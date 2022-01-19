import { Injector, Component, Output, OnChanges, SimpleChange, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EventManager, DOCUMENT } from '@angular/platform-browser';
import { CommonService } from '../../contactTraceCommonServices/common.service';
import * as saveAs from 'file-saver';
import * as Plotly from 'plotly.js'
import * as domToImage from 'dom-to-image-more';
import { DialogSettings } from '../../helperClasses/dialogSettings';
import { MicobeTraceNextPluginEvents } from '../../helperClasses/interfaces';
import { MicrobeTraceNextVisuals } from '../../microbe-trace-next-plugin-visuals';
import * as _ from 'lodash';

//declare let Plotly: any;



/**
 * @title Complex Example
 */
@Component({
    selector: 'HistogramComponent',
    templateUrl: './histogram-plugin.component.html',
})
export class HistogramComponent extends AppComponentBase implements OnInit, MicobeTraceNextPluginEvents {

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();


    svgStyle: {} = {
        'height': '0px',
        'width': '1000px'
    };

    panel: any = $('#histogram');
    traces: any = [];
    layout: any = {};
    plot: any = null;
    IsDataAvailable: boolean = false;
    ShowHistogramSettingsPane: boolean = false;
    HistogramSettingsExportDialogSettings: DialogSettings;
    ShowHistogramExportPane: boolean = false;

    SelectedNetworkExportFilenameVariable: string = "";

    NetworkExportFileTypeList: any = [
        { label: 'png', value: 'png' },
        { label: 'jpeg', value: 'jpeg' },
        { label: 'webp', value: 'webp' },
        { label: 'svg', value: 'svg' }
    ];
    SelectedNetworkExportFileTypeListVariable: string = "png";
    HistogramMixedVariablesVariableFieldList: any[] = [];
    SelectedHistogramMixedVariableVariable: string = "";

    AxisTypes: any = [
        { label: 'X', value: 'X' },
        { label: 'Y', value: 'Y' }
    ];
    SelectedAxisTypeVariable: any = "X";

    ScaleTypes: any = [
        { label: 'Linear', value: 'Linear' },
        { label: 'Log', value: 'Log' }
    ];
    SelectedScaleTypeVariable: any = "Linear";

    SelectedNetworkExportScaleVariable: any = 1;
    SelectedNetworkExportQualityVariable: any = 0.92;
    CalculatedResolutionWidth: any = 1918;
    CalculatedResolutionHeight: any = 909;
    CalculatedResolution: any = "";

    private isExportClosed: boolean = false;
    public isExporting: boolean = false;

    private visuals: MicrobeTraceNextVisuals;

    constructor(injector: Injector,
        private eventManager: EventManager,
        private commonService: CommonService,
        private cdref: ChangeDetectorRef) {

        super(injector);

        this.visuals = commonService.visuals;
        this.visuals.histogram = this;
    }

    ngOnInit() {

        this.updateCalculatedResolution(null);
    }


    InitView() {
        if(!this.HistogramSettingsExportDialogSettings){
            this.HistogramSettingsExportDialogSettings = new DialogSettings('#histogram-settings-pane', false);
        }


        this.visuals.histogram.IsDataAvailable = (this.visuals.histogram.commonService.session.data.nodeFilteredValues.length == 0 ? false : true);


        if (this.visuals.histogram.IsDataAvailable == true) {


            this.visuals.histogram.HistogramMixedVariablesVariableFieldList = [];

            this.visuals.histogram.HistogramMixedVariablesVariableFieldList.push({ label: 'None', value: 'None' });

            this.visuals.histogram.commonService.session.data.linkFields.map(field => {
                this.visuals.histogram.HistogramMixedVariablesVariableFieldList.push({ label: "Links " + this.visuals.histogram.commonService.titleize(field), value: "links-" + field });
            });

            this.visuals.histogram.commonService.session.data.nodeFields.map(field => {
                this.visuals.histogram.HistogramMixedVariablesVariableFieldList.push({ label: "Nodes " + this.visuals.histogram.commonService.titleize(field), value: "nodes-" + field });
            });

            this.visuals.histogram.svgStyle = {
                'height': 'calc(100vh - 350px)',
                'width': 'calc(100vw - 500px)'
            };


            this.eventManager.addGlobalEventListener('window', 'node-color-change link-color-change', () => {
                debugger;
                this.visuals.histogram.redrawHistogram();
            });

            this.visuals.histogram.eventManager.addGlobalEventListener('window', 'background-color-change', () => {
                debugger;
                this.visuals.histogram.setBackground();
            });


            //layout.on('stateChanged', this.redrawHistogram);

            setTimeout(() => this.redrawHistogram(), 80);
        }
    }


    onDataChange(event) {

    }


    updateCalculatedResolution(event) {

        this.CalculatedResolution = (Math.round(this.CalculatedResolutionWidth * this.SelectedNetworkExportScaleVariable) + " x " + Math.round(this.CalculatedResolutionHeight * this.SelectedNetworkExportScaleVariable) + "px");
        this.cdref.detectChanges();
    }


    redrawHistogram() {
        let panel = $('#histogram');
        if (!panel.length) return;
        if (this.visuals.histogram.plot) Plotly.purge('histogram');
        let varSource, varName, axis = 'x', nonAxis = 'y';

        [varSource, ...varName] = this.visuals.histogram.commonService.session.style.widgets['histogram-variable'].split('-');
        varName = varName.join('-');
        if (!this.visuals.histogram.commonService.session.style.widgets['histogram-axis-x']) {
            axis = 'y', nonAxis = 'x';
        }

        this.visuals.histogram.traces = [];

        if (varSource == 'nodes' && this.visuals.histogram.commonService.session.style.widgets['node-color-variable'] !== 'None') {
            let values = [];
            let field = this.visuals.histogram.commonService.session.style.widgets['node-color-variable'];
            this.visuals.histogram.commonService.session.data.nodeFilteredValues.forEach(d => {
                if (!this.visuals.histogram.commonService.includes(values, d[field])) values.push(d[field]);
            });
            let vnodes = this.visuals.histogram.commonService.getVisibleNodes();
            values.forEach((v, i) => {
                let trace = {
                    type: 'histogram',
                    marker: {
                        color: this.visuals.histogram.commonService.temp.style.nodeColorMap(v),
                    },
                    showlegend: false,
                    hoverinfo: 'skip'
                };
                trace[axis] = vnodes.filter(d => d[field] == v).map(d => d[varName]);
                this.visuals.histogram.traces.push(trace);
            });

            this.layout.barmode = 'stack';

        } else if (varSource == 'links' && !this.visuals.histogram.commonService.includes(['None', 'origin'], this.visuals.histogram.commonService.session.style.widgets['link-color-variable'])) {
            let values = [];
            let field = this.visuals.histogram.commonService.session.style.widgets['link-color-variable'];
            this.visuals.histogram.commonService.session.data.links.forEach(d => {
                if (!(d[field] in values)) values.push(d[field]);
            });
            let vlinks = this.visuals.histogram.commonService.getVisibleLinks();
            values.forEach((v, i) => {
                let trace = {
                    type: 'histogram',
                    marker: {
                        color: this.visuals.histogram.commonService.temp.style.linkColorMap(v),
                    },
                    showlegend: false,
                    hoverinfo: 'skip'
                };
                trace[axis] = vlinks.filter(d => d[field] == v).map(d => d[varName]);
                this.visuals.histogram.traces.push(trace);
            });

            this.layout.barmode = 'stack';

        } else {
            let trace = {
                type: 'histogram',
                marker: {
                    color: varSource == 'nodes' ? this.visuals.histogram.commonService.session.style.widgets['node-color'] : this.visuals.histogram.commonService.session.style.widgets['link-color'],
                },
                showlegend: false,
                hoverinfo: 'skip'
            };
            trace[axis] = (varSource == 'nodes' ? this.visuals.histogram.commonService.getVisibleNodes() : this.visuals.histogram.commonService.getVisibleLinks()).map(l => l[varName]);

            this.visuals.histogram.traces = [trace];
        }

        //Are the results of type string?
        let isString: boolean = false;
        if(this.visuals.histogram.traces && this.visuals.histogram.traces.length > 0 && this.visuals.histogram.traces[0][axis]){
            for(let index = 0; index < this.visuals.histogram.traces[0][axis].length; index++){
                if(typeof this.visuals.histogram.traces[0][axis][index] === 'string')
                {
                    isString = true;
                    break;
                }
            }
        } 

        if(isString){
            this.visuals.histogram.layout[axis + 'axis'] = {
                title: this.visuals.histogram.commonService.titleize(varName), 
                type: 'category'
            }
        } else{
            this.visuals.histogram.layout[axis + 'axis'] = {
                title: this.visuals.histogram.commonService.titleize(varName)
            }
        }
        
        this.visuals.histogram.layout[nonAxis + 'axis'] = {
            title: 'Number of ' + this.visuals.histogram.commonService.titleize(varSource),
            type: this.visuals.histogram.commonService.session.style.widgets['histogram-scale-log'] ? 'log' : ''
        };

        this.visuals.histogram.plot = Plotly.newPlot('histogram', this.visuals.histogram.traces, this.visuals.histogram.layout, {
            displaylogo: false,
            displayModeBar: false,
            scrollZoom: true
        });

        this.visuals.histogram.setBackground();
    }


    exportVisualization(event) {

        this.visuals.histogram.ShowHistogramExportPane = false;
        this.isExporting = true;

        if (!this.isExportClosed) {
            setTimeout(() => this.exportVisualization(undefined), 300);
        }
        else {
            requestAnimationFrame(() => this.visuals.histogram.exportWork())
        }

    }

    onCloseExport() {
        this.isExportClosed = true;
    }

    exportWork() {
        let filetype = this.visuals.histogram.SelectedNetworkExportFileTypeListVariable
        let filename = this.visuals.histogram.SelectedNetworkExportFilenameVariable;

        const scale: number = this.visuals.histogram.SelectedNetworkExportScaleVariable;
        const element = document.querySelector('HistogramComponent').parentElement;
        domToImage.toBlob(element, {
            width: element.clientWidth * scale,
            height: element.clientHeight * scale,
            style: {
                transform: 'scale(' + scale + ')',
                transformOrigin: 'top left'
            },
            quality: this.visuals.histogram.SelectedNetworkExportQualityVariable
        })
            .then((blob)=>  {
                saveAs(blob, filename + '.' + filetype);

                this.visuals.histogram.isExporting = false;

                this.visuals.microbeTrace.GlobalSettingsDialogSettings.restoreStateAfterExport();
                this.visuals.microbeTrace.GlobalSettingsLinkColorDialogSettings.restoreStateAfterExport();
                this.visuals.microbeTrace.GlobalSettingsNodeColorDialogSettings.restoreStateAfterExport();
                this.visuals.histogram.HistogramSettingsExportDialogSettings.restoreStateAfterExport();
            });
    }


    setBackground() {
        let col = this.visuals.histogram.commonService.session.style.widgets['background-color'];
        $('#histogram svg.main-svg').first().css('background', col);
        $('#histogram rect.bg').css('fill', col);

        let contrast = this.visuals.histogram.commonService.session.style.widgets['background-color-contrast'];
        $('#histogram .xtitle, .ytitle').css('fill', contrast);
        $('#histogram .xaxislayer-above text').css('fill', contrast);
        $('#histogram .yaxislayer-above text').css('fill', contrast);
    }



    openSettings() {
        this.HistogramSettingsExportDialogSettings.setVisibility(true);
    }

    openExport() {
        this.visuals.histogram.HistogramSettingsExportDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsLinkColorDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsNodeColorDialogSettings.setStateBeforeExport();

        this.isExportClosed = false;
        this.ShowHistogramExportPane = true
    }

    openCenter() {

    }

    openPinAllNodes() {


    }

    openRefreshScreen() {

    }

    openSelectDataSetScreen() {

    }

    onVariableChange(){
        this.commonService.session.style.widgets['histogram-variable'] = this.SelectedHistogramMixedVariableVariable;
        this.redrawHistogram();
    }

    onAxisChange(){
        this.commonService.session.style.widgets['histogram-axis-x'] = this.SelectedAxisTypeVariable === 'X';
        this.redrawHistogram();
    }

    onScaleChange(){
        this.commonService.session.style.widgets['histogram-scale-log'] = this.SelectedScaleTypeVariable === 'Log';
        this.redrawHistogram();
    }

    updateNodeColors() {
        //Not Relevant
    }
    updateVisualization() {
        //Not Relevant
    }
    updateLinkColor() {
        //Not Relevant
    }

    onRecallSession(){
        this.loadSettings();    
    }

    onLoadNewData(){
     this.redrawHistogram();
    }

    onFilterDataChange(){
        
    }

    loadSettings() {
        //Variable
        this.SelectedHistogramMixedVariableVariable = this.commonService.session.style.widgets['histogram-variable'];
        this.onVariableChange();

        //Axis
        this.SelectedAxisTypeVariable = this.commonService.session.style.widgets['histogram-axis-x'] ? 'X' : 'Y';
        this.onAxisChange();

        //Scale
        this.SelectedScaleTypeVariable = this.commonService.session.style.widgets['histogram-scale-log'] ? 'Log' : 'Linear';
        this.onScaleChange();
    }

}
