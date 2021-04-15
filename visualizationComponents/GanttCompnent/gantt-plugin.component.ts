import { Injector, Component, Output, OnChanges, SimpleChange, EventEmitter, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CommonService } from '../../contactTraceCommonServices/common.service';
import * as d3 from 'd3';
import * as moment from 'moment';
import * as saveAs from 'file-saver';
import * as domToImage from 'dom-to-image-more';
import { MicrobeTraceNextVisuals } from '../../microbe-trace-next-plugin-visuals';
import { DialogSettings } from '../../helperClasses/dialogSettings';
import { MicobeTraceNextPluginEvents } from '../../helperClasses/interfaces';


@Component({
  selector: 'GanttComponent',
  templateUrl: './gantt-plugin.component.html',
})
export class GanttComponent extends AppComponentBase implements OnInit, MicobeTraceNextPluginEvents {

  @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

  private ganttDateListId: number = 0;

  ganttExportDialogSettings: DialogSettings = new DialogSettings('#gantt-settings-pane', false);

  public ganttDateList: GanttDateItem[] = [];
  public fieldList: { label: string, value: string }[] = [];
  public isDataAvailable: boolean = false;

  private margin = {
    top: 30,
    right: 0,
    bottom: 25,
    left: 100
  };
  private width: number = 500;
  private height: number = 500;

  tickFormat = d3.timeFormat("%Y-%m-%d");
  mousebox: any;
  mouseLine: any;
  svg: any;
  timestamp: any;

  private visuals: MicrobeTraceNextVisuals;
  resizeFunction = () => this.createGantt();

  //<export>
  ganttExportPane: boolean = false;
  selectedGanttExportFilenameVariable: string;
  isExportClosed: boolean = false;
  isExporting: boolean = false;
  ganttExportFileTypeList: any = [
    { label: 'png', value: 'png' },
    { label: 'jpeg', value: 'jpeg' },
    { label: 'webp', value: 'webp' },
    { label: 'svg', value: 'svg' }
];
selectedGanttExportFileTypeListVariable: string = 'png';
showAdvancedExport: boolean = true;
selectedGanttExportScaleVariable: any = 1;
selectedGanttExportQualityVariable: any = 0.92;
calculatedResolutionWidth: any = 1918;
    calculatedResolutionHeight: any = 909;
    calculatedResolution: any = ((this.calculatedResolutionWidth * this.selectedGanttExportScaleVariable) + " x " + (this.calculatedResolutionHeight * this.selectedGanttExportScaleVariable) + "px");

  //</export>

  constructor(injector: Injector,
    private commonService: CommonService) {

    super(injector);

    this.visuals = commonService.visuals;
    this.commonService.visuals.gantt = this;
  }

  ngOnInit() {
    this.loadFieldList();
    this.createGantt();

    window.addEventListener("resize", this.resizeFunction);

     const obs = new ResizeObserver(e => {
       this.resizeFunction();
     });
     obs.observe(document.querySelector('#gantt'));
  }

  InitView() { }

  loadFieldList() {
    this.isDataAvailable = (this.commonService.session.data.nodes.length == 0 ? false : true);

    this.fieldList = [];

    this.fieldList.push({ label: "None", value: "None" });
    this.commonService.session.data['nodeFields'].map((d, i) => {

      this.fieldList.push(
        {
          label: this.commonService.capitalize(d.replace("_", "")),
          value: d
        });
    });
  }

  createGantt() {
    d3.select('#gantt').html(null);
    this.svg = d3.select('#gantt').append("svg");
    
    const ganttElement = document.getElementById("gantt");
    if(!ganttElement || !ganttElement.parentElement || !ganttElement.parentElement.parentElement) return; 
    
    this.width = document.getElementById("gantt").parentElement.parentElement.offsetWidth - 70;
    if(this.width <= 0) return;
    this.height = document.documentElement.clientHeight * 0.50;

    this.svg.append("g")
      .attr("class", "gantt-chart")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");

    this.svg.append("g")
      .attr("class", "x-axis");

    this.svg.append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");

    let mouseG = this.svg.append("g").attr("class", "mouse-over-effects")

    this.mouseLine = mouseG.append("path")
      .attr("class", "mouse-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", "0");

    this.timestamp = mouseG.append('text').attr('y', this.margin.top).attr('text-anchor', 'middle');

    this.mousebox = mouseG.append('rect')
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('mouseout', () => {
        this.mouseLine.style("opacity", "0");
        this.timestamp.style("opacity", "0");
      })
      .on('mouseover', () => {
        this.mouseLine.style("opacity", "1");
        this.timestamp.style("opacity", "1");
      });

    setTimeout(() => {
      this.refresh();
      //    setBackground();
    }, 80);
  }

  refresh() {
    let wrapper = $('#gantt').parent().css('z-index', 1000);
    if (!wrapper.length) return;

    let bars = [];

    this.ganttDateList.forEach(dateItem => {
      this.commonService.session.data.nodeFilteredValues.forEach((x: any, index: number) => {
        if (x[dateItem.start] || x[dateItem.end])

          bars.push({
            barID: dateItem.id != undefined ? dateItem.id.toString() : '',
            row: x.id,
            barClass: `date-${dateItem.id}`,
            startDate: x[dateItem.start] ? new Date(x[dateItem.start]) : new Date(x[dateItem.end]),
            endDate: x[dateItem.end] ? new Date(x[dateItem.end]) : new Date(x[dateItem.start]),
          });
      })
    })

    this.svg.attr("width", this.width)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    $('.date-table-row').each((i, el) => {
      let $el = $(el);
      let dateid = $el.data('dateid');
      let startField: string = $el.find(`#date-${dateid}-start`).val() as string;
      let endField: string = $el.find(`#date-${dateid}-end`).val() as string;
      if (endField == 'None') endField = startField;
      this.commonService.session.data.nodeFilteredValues.filter(d => d.visible).forEach(d => {
        let startDate, endDate;
        if (typeof d[startField] == 'number') {
          startDate = moment((d[startField] - 25567) * 24 * 60 * 60 * 1000);
        } else {
          startDate = moment(d[startField]);
        }
        if (typeof d[endField] == 'number') {
          endDate = moment((d[endField] - 25567) * 24 * 60 * 60 * 1000);
        } else {
          endDate = moment(d[endField]);
        }
        if (startDate.isValid() || endDate.isValid()) {
          bars.push({
            "startDate": startDate.isValid() ? startDate.toDate() : endDate.toDate(),
            "endDate": endDate.isValid() ? endDate.toDate() : startDate.toDate(),
            "barID": `${d.id}-${dateid}`,
            "barClass": `date-${dateid}`,
            "row": d.id
          });
        }
      });
    });

    if (bars.length == 0) return;

    bars.sort((a, b) => b.endDate - a.endDate);
    let timeDomainEnd: Date = bars[0].endDate;

    bars.sort((a, b) => a.startDate - b.startDate);
    let timeDomainStart: Date = bars[0].startDate;

    const dayDiff = moment(timeDomainEnd).diff(moment(timeDomainStart), 'day');
    const dayOffset = Math.max(Math.ceil(dayDiff * .2), 5);
    timeDomainEnd = moment(timeDomainEnd).add(dayOffset, 'day').toDate();

    let x = d3.scaleTime()
      .domain([timeDomainStart, timeDomainEnd])
      .range([0, this.width])
      .clamp(true);

    let y = d3.scaleBand()
      .domain(Array.from(new Set(bars.map(t => t.row))))
      .range([0, this.height - this.margin.top - this.margin.bottom])
      .padding(0.1);
      
    this.svg.select('.x-axis')
      .transition()
      .attr("transform", "translate(" + this.margin.left + ", " + this.height + ")")
      .call(d3.axisBottom()
        .scale(x)
        .tickFormat(this.tickFormat)
        .tickSize(8)
        .tickPadding(8));

    this.svg.selectAll(".x-axis text")
      .attr("transform", function (d) {
        return "translate(-25,15)rotate(-45)";
      });

    this.svg.select('.y-axis')
      .transition()
      .call(d3.axisLeft()
        .scale(y)
        .tickSize(0));

    let rect = this.svg.select(".gantt-chart").selectAll("rect").data(bars, d => d.barID);

    rect.exit().remove();

    rect.enter().append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr('fill-opacity', .6)
      .attr("class", d => d.barClass)
      .transition()
      .attr("y", 0)
      .attr("transform", d => {
        if(!x(d.startDate)) return undefined;
        return "translate(" + x(d.startDate) + "," + y(d.row) + ")";
      })
      .attr("height", d => y.bandwidth())
      .attr("width", d => {
        return Math.max(x(d.endDate) - x(d.startDate), 5);
      });

    rect = rect.merge(rect)
      .transition()
      .attr("transform", d => {
        if(!x(d.startDate)) return undefined;
        return "translate(" + x(d.startDate) + "," + y(d.row) + ")";
      })
      .attr("height", d => y.bandwidth())
      .attr("width", d => Math.max(x(d.endDate) - x(d.startDate), 5));

    this.mousebox
      .attr('width', this.width)
      .attr('height', this.height - this.margin.top - this.margin.bottom)
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
      .on('mousemove', (a, b, c, d) => {
        let xc = d3.mouse(c[0])[0] + this.margin.left;
        let h = this.height - this.margin.bottom;
        this.mouseLine.attr("d", () => {
          return "M" + xc + "," + h + " " + xc + "," + this.margin.top;
        });
        this.timestamp.attr('x', Math.min(Math.max(xc, 50), this.width - 50)).text(this.tickFormat(x.invert(xc - this.margin.left)));
      });

    //   setBackground();
    this.setColor();
    this.setTransparency();
  }

  onColorChange(item: GanttDateItem) {
    this.setColor();
  }

  onTransparencyChange(item: GanttDateItem) {
    this.setTransparency();
  }

  onCloseDate(item){
    this.ganttDateList = this.ganttDateList.filter(x=>x.id != item.id);
    this.createGantt();
  }

  private setColor() {
    this.ganttDateList.forEach(dateItem => {
      this.svg.selectAll(`.date-${dateItem.id}`).attr('fill', dateItem.color);
    })
    this.saveSessionVariable();
  }

  private setTransparency() {
    this.ganttDateList.forEach(dateItem => {
    this.svg.selectAll(`.date-${dateItem.id}`).attr('fill-opacity', 1 - dateItem.transparency);
    })
    this.saveSessionVariable();
  }

  saveSessionVariable(){
    this.commonService.session.style.widgets['gantt-date-list'] = JSON.stringify(this.ganttDateList);
  }

  updateNodeColors() {
  }
  updateVisualization() {
  }
  updateLinkColor() {
  }
  onLoadNewData() {
    this.loadFieldList();
  }
  onFilterDataChange() {
  }

  onAddDateItem() {
    this.ganttDateList.push({
      id: this.ganttDateListId++,
      start: "None",
      end: "None",
      color: "black",
      transparency: .5
    })
  }

  onDateItemChange(e) {
    this.refresh();
    this.saveSessionVariable();
  }

  openSettings() {
    this.ganttExportDialogSettings.setVisibility(true);
  }

  openExport() {
    this.ganttExportDialogSettings.setVisibility(false);

    this.isExportClosed = false;
    this.ganttExportPane = true;
  }

onCloseExport(){
  this.isExportClosed = true;
}
onGanttExportFiletypeChange(e) {
  if (e == "svg") {
      this.showAdvancedExport = false;
  }
  else
      this.showAdvancedExport = true;
}

updateCalculatedResolution(event) {

  this.calculatedResolution = (Math.round(this.calculatedResolutionWidth * this.selectedGanttExportScaleVariable) + " x " + Math.round(this.calculatedResolutionHeight * this.selectedGanttExportScaleVariable) + "px");
  //this.cdref.detectChanges();
}
exportVisualization(event) {

  this.ganttExportPane = false;
  this.isExporting = true;

  if (!this.isExportClosed) {
      setTimeout(() => this.exportVisualization(undefined), 300);
  }
  else {
      this.exportWork();
  }
}
exportWork() {
  let network = document.getElementById('gantt');
  let $network = $(network);
  let watermark = d3.select(network).append('text')
      .text('MicrobeTrace')
      .attr('x', $network.width() - 170)
      .attr('y', $network.height() - 20)
      .attr('class', 'watermark');
  let filetype = this.selectedGanttExportFileTypeListVariable, 
      filename = this.selectedGanttExportFilenameVariable;
  if (filetype == 'svg') {
     
      network.style.height = '100%';
      network.style.width = '100%';
      let content = this.commonService.unparseSVG(network);
      let blob = new Blob([content], { type: 'image/svg+xml;charset=utf-8' });
      saveAs(blob, filename + '.' + filetype);
      watermark.remove();
      // const style: any = this.svgStyle;
      // network.style.height = style.height;
      // network.style.width = style.width;
       network.style.height = this.height.toString();
       network.style.width = this.width.toString();
      
  } else {
      setTimeout(() => {
          const scale: number = this.selectedGanttExportScaleVariable;
          const element = document.querySelector('GanttComponent').parentElement;
          domToImage.toBlob(element, {
              width: element.clientWidth * scale,
              height: element.clientHeight * scale,
              style: {
                  transform: 'scale(' + scale + ')',
                  transformOrigin: 'top left'
              },
              quality: this.selectedGanttExportQualityVariable
          })
              .then((blob) => {
                  saveAs(blob, filename + '.' + filetype);

                  watermark.remove();
                  this.visuals.twoD.isExporting = false;


                  this.ganttExportDialogSettings.restoreStateAfterExport();
              });
      }, 1000);
     
  }
}

  openCenter() {

  }

  openPinAllNodes() {


  }

  openRefreshScreen() {

  }

  openSelectDataSetScreen() {

  }

  onRecallSession() {
    this.ganttDateList = JSON.parse(this.commonService.session.style.widgets['gantt-date-list']);
  }
}

interface GanttDateItem {
  id: number;
  start: string;
  end: string;
  color: string;
  transparency: number
} 