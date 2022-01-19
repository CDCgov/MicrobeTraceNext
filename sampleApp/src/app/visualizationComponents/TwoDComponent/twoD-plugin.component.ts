import { Injector, Component, Output, OnChanges, SimpleChange, EventEmitter, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EventManager, DOCUMENT } from '@angular/platform-browser';
import { CommonService } from '../../contactTraceCommonServices/common.service';
import { window } from 'ngx-bootstrap';
import * as d3 from 'd3';
import { forceAttract } from 'd3-force-attract'
import * as ClipboardJS from 'clipboard';
import * as saveAs from 'file-saver';
import * as domToImage from 'dom-to-image-more';
import { SelectItem } from 'primeng/api';
import { DialogSettings } from '../../helperClasses/dialogSettings';
import { MicobeTraceNextPluginEvents } from '../../helperClasses/interfaces';
import * as _ from 'lodash';
import { MicrobeTraceNextVisuals } from '../../microbe-trace-next-plugin-visuals';


@Component({
    selector: 'TwoDComponent',
    templateUrl: './twoD-plugin.component.html',
    styleUrls: ['./twoD-plugin.component.css']
})
export class TwoDComponent extends AppComponentBase implements OnInit, MicobeTraceNextPluginEvents, OnDestroy {

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

    svgStyle: {} = {
        'height': '0px',
        'width': '1000px'
    };

    ShowNetworkAttributes: boolean = false;
    ShowStatistics: boolean = false;
    Show2DExportPane: boolean = false;
    Show2DSettingsPane: boolean = false;
    IsDataAvailable: boolean = false;
    svg: any = null;
    settings: any = this.commonService.session.style.widgets;
    halfWidth: any = null;
    halfHeight: any = null;
    transform: any = null;
    force: any = null;
    radToDeg: any = (180 / Math.PI);
    selected: any = null;
    multidrag: boolean = false;
    clipboard = new ClipboardJS('#copyID, #copySeq');
    zoom: any = null;
    brush: any = null;
    FieldList: SelectItem[] = [];
    ToolTipFieldList: SelectItem[] = [];

    // Node Tab    
    SelectedNodeLabelVariable: string = "None";
    SelectedNodeLabelOrientationVariable: string = "Right";
    SelectedNodeTooltipVariable: string = "None";
    SelectedNodeSymbolVariable: string = "None";
    SelectedNodeShapeVariable: string = "symbolCircle";
    SelectedNodeRadiusVariable: string = "None";
    SelectedNodeRadiusSizeVariable: string = "None";
    TableTypes: any = [
        { label: 'Show', value: 'Show' },
        { label: 'Hide', value: 'Hide' }
    ];
    SelectedNetworkTableTypeVariable: string = "Hide";

    private isExportClosed: boolean = false;
    public isExporting: boolean = false;

    // Link Tab
    SelectedLinkTooltipVariable: string = "None";
    SelectedLinkLabelVariable: string = "None";
    SelectedLinkTransparencyVariable: any = 0;
    SelectedLinkWidthByVariable: string = "None";

    ReciprocalTypes: any = [
        { label: 'Reciprocal', value: 'Reciprocal' },
        { label: 'Non-Reciprocal', value: 'Non-Reciprocal' }
    ];
    SelectedLinkReciprocalTypeVariable: string = "Reciprocal";

    SelectedLinkWidthVariable: any = 0;
    SelectedLinkLengthVariable: any = 0;
    ArrowTypes: any = [
        { label: 'Hide', value: 'Hide' },
        { label: 'Show', value: 'Show' }
    ];
    SelectedLinkArrowTypeVariable: string = "Hide";

    // Network 
    NeighborTypes: any = [
        { label: 'Normal', value: 'Normal' },
        { label: 'Highlighted', value: 'Highlighted' }
    ];
    SelectedNetworkNeighborTypeVariable: string = "Normal";

    GridLineTypes: any = [
        { label: 'Hide', value: 'Hide' },
        { label: 'Show', value: 'Show' }
    ];
    SelectedNetworkGridLineTypeVariable: string = "Hide";

    SelectedNetworkChargeVariable: any = 200;
    SelectedNetworkGravityVariable: any = .05;
    SelectedNetworkFrictionVariable: any = .4;
    SelectedNetworkExportFilenameVariable: string = "";

    NetworkExportFileTypeList: any = [
        { label: 'png', value: 'png' },
        { label: 'jpeg', value: 'jpeg' },
        { label: 'webp', value: 'webp' },
        { label: 'svg', value: 'svg' }
    ];

    SelectedNetworkExportFileTypeListVariable: string = "png";
    SelectedNetworkExportScaleVariable: any = 1;
    SelectedNetworkExportQualityVariable: any = 0.92;
    CalculatedResolutionWidth: any = 1918;
    CalculatedResolutionHeight: any = 909;
    CalculatedResolution: any = ((this.CalculatedResolutionWidth * this.SelectedNetworkExportScaleVariable) + " x " + (this.CalculatedResolutionHeight * this.SelectedNetworkExportScaleVariable) + "px");

    SelectedColorTransparencyVariable: any = 1;
    SelectedNodeLabelSizeVariable: any = 16;

    ShowNodeSymbolWrapper: boolean = false;
    ShowNodeSymbolTable: boolean = false;
    ShowAdvancedExport: boolean = true;

    NodeSymbolTableWrapperDialogSettings: DialogSettings = new DialogSettings('#node-symbol-table-wrapper', false);
    Node2DNetworkExportDialogSettings: DialogSettings = new DialogSettings('#network-settings-pane', false);

    ContextSelectedNodeAttributes: {attribute: string, value: string}[] = [];

    private visuals: MicrobeTraceNextVisuals;

    constructor(injector: Injector,
        private eventManager: EventManager,
        public commonService: CommonService,
        private cdref: ChangeDetectorRef) {

        super(injector);

        this.visuals = commonService.visuals;
        this.commonService.visuals.twoD = this;
    }

    ngOnInit() {
        this.commonService.updateNetwork();
    }

    InitView() {

        this.visuals.twoD.IsDataAvailable = (this.visuals.twoD.commonService.session.data.nodes.length == 0 ? false : true);

        if (this.visuals.twoD.IsDataAvailable == true && this.visuals.twoD.zoom == null) {

            d3.select('svg#network').exit().remove();
            this.visuals.twoD.svg = d3.select('svg#network').append('g');

            this.visuals.twoD.FieldList = [];

            this.visuals.twoD.FieldList.push({ label: "None", value: "None" });
            this.visuals.twoD.commonService.session.data['nodeFields'].map((d, i) => {

                this.visuals.twoD.FieldList.push(
                    {
                        label: this.visuals.twoD.commonService.capitalize(d.replace("_", "")),
                        value: d
                    });

            });


            this.visuals.twoD.ToolTipFieldList = [];

            this.visuals.twoD.ToolTipFieldList.push({ label: "None", value: "None" });
            this.visuals.twoD.commonService.session.data['linkFields'].map((d, i) => {

                this.visuals.twoD.ToolTipFieldList.push(
                    {
                        label: this.visuals.twoD.commonService.capitalize(d.replace("_", "")),
                        value: d
                    });

            });


            this.visuals.twoD.svgStyle = {
                'height': 'calc(100vh - 350px)',
                'min-width.%': 100

            };

            this.visuals.twoD.zoom = d3.zoom().on('zoom', () => this.visuals.twoD.svg.attr('transform', this.visuals.twoD.transform = d3.event.transform));
            this.visuals.twoD.brush = d3.brush();
            this.visuals.twoD.halfWidth = $('#network').parent().width() / 2;
            this.visuals.twoD.halfHeight = $('#network').parent().parent().parent().height() / 2;
            this.visuals.twoD.transform = d3.zoomTransform(d3.select('svg#network').node());
            this.visuals.twoD.commonService.session.style.widgets = this.visuals.twoD.commonService.session.style.widgets;

            let zoom = d3.zoom().on('zoom', () => this.visuals.twoD.svg.attr('transform', this.visuals.twoD.transform = d3.event.transform));

            let brush = d3.brush()
                .on('start', () => {
                    this.visuals.twoD.commonService.session.network.nodes.forEach(d => {
                        if (d.visible) d._previouslySelected = d.selected;
                    });
                })
                .on('brush', () => {

                    let e = d3.event;
                    if (e.sourceEvent.type == 'end') return;
                    let selection0: any = this.visuals.twoD.transform.invert(e.selection[0]),
                        selection1: any = this.visuals.twoD.transform.invert(e.selection[1]);


                    //if (this.visuals.twoD.commonService.includes($(this).selection, null)) return;

                    this.visuals.twoD.commonService.session.network.nodes.forEach(d => {

                        let exp: any = ((selection0[0] <= d.x && d.x <= selection1[0] && selection0[1] <= d.y && d.y <= selection1[1]));

                        d.selected = (d._previouslySelected ^ (exp)) == 1;
                    });
                })
                .on('end', () => {
                    if (d3.event.selection == null) return;
                    this.visuals.twoD.commonService.session.network.nodes.forEach(d => delete d._previouslySelected);
                    this.visuals.twoD.commonService.session.data.nodes.forEach(d => {
                        let match = this.visuals.twoD.commonService.session.network.nodes.find(node => node._id == d._id);
                        if (match) d.selected = match.selected;
                    });


                    this.visuals.twoD.render();
                    //window.trigger('node-selected');
                });

            d3.select('svg#network')
                .html(null) //Let's make sure the canvas is blank.
                .on('click', ()=>this.visuals.twoD.hideContextMenu())
                .call(zoom);

            d3.select('svg#network')
                .append('g')
                .attr('class', 'brush')
                .call(brush)
                .attr('pointer-events', 'none')
                .select('rect.overlay')
                .attr('pointer-events', 'none');

            d3.select('svg#network')
                .append('g')
                .attr('class', 'horizontal-gridlines');

            d3.select('svg#network')
                .append('g')
                .attr('class', 'vertical-gridlines');


            this.visuals.twoD.svg = d3.select('svg#network').append('g');

            this.visuals.twoD.svg.append('g').attr('class', 'links');
            this.visuals.twoD.svg.append('g').attr('class', 'nodes');

            this.visuals.twoD.svg.append('svg:defs').append('marker')
                .attr('id', 'end-arrow')
                .attr('viewBox', '0 0 10 10')
                .attr('refX', 20)
                .attr('refY', 5)
                .attr('markerWidth', 4)
                .attr('markerHeight', 4)
                .attr('orient', 'auto')
                .append('svg:path')
                .attr('d', 'M0,0 L0,10 L10,5 z');

            this.visuals.twoD.force = d3.forceSimulation()
                .force('link', d3.forceLink()
                    .id(d => d._id)
                    .distance(l => l.origin.length * this.visuals.twoD.commonService.session.style.widgets['link-length'])
                    .strength(0.125)
                )
                .force('charge', d3.forceManyBody()
                    .strength(-this.visuals.twoD.commonService.session.style.widgets['node-charge'])
                )
                .force('gravity', forceAttract()
                    .target([this.visuals.twoD.halfWidth, this.visuals.twoD.halfHeight])
                    .strength(this.visuals.twoD.commonService.session.style.widgets['network-gravity'])
                )
                .force('center', d3.forceCenter(this.visuals.twoD.halfWidth, this.visuals.twoD.halfHeight));

            if (this.visuals.twoD.commonService.session.style.widgets['network-friction']) this.visuals.twoD.force.velocityDecay(this.visuals.twoD.commonService.session.style.widgets['network-friction']);

            this.visuals.twoD.clipboard.on('success', ()=>this.hideContextMenu());

            d3.select(window).on('keydown keyup', () => {
                d3.select('g.brush')
                    .attr('pointer-events', d3.event.ctrlKey ? 'all' : 'none')
                    .select('rect.overlay')
                    .attr('pointer-events', d3.event.ctrlKey ? 'all' : 'none');
            });

            this.visuals.twoD.eventManager.addGlobalEventListener('window', 'node-color-change', () => {

                this.visuals.twoD.updateNodeColors;
            });

            this.visuals.twoD.eventManager.addGlobalEventListener('window', 'link-color-change', () => {

                this.visuals.twoD.updateLinkColor;
            });

            this.visuals.twoD.eventManager.addGlobalEventListener('window', 'background-color-change', () => {

                $('#network').css('background-color', this.visuals.twoD.commonService.session.style.widgets['background-color']);
            });

            this.visuals.twoD.eventManager.addGlobalEventListener('window', 'node-visibility link-visibility cluster-visibility node-selected', () => {

                this.visuals.twoD.render(false);
            });

            this.visuals.twoD.eventManager.addGlobalEventListener('window', "node-selected", () => {
                this.visuals.twoD.render(false);
            });

            if (this.visuals.twoD.commonService.session.files.length > 1) $('#link-color-variable').val('origin').change();
            if (this.visuals.twoD.commonService.session.style.widgets['background-color']) $('#network').css('background-color', this.visuals.twoD.commonService.session.style.widgets['background-color']);
            this.visuals.twoD.render();

            //For some mysterious reason, this really needed a delay...
            setTimeout(() => {

                if (this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'] !== 'None') {
                    $('#node-symbol-variable').change(); //.trigger('change');
                }
            }, 1);

            setTimeout(() =>{
                this.visuals.twoD.fit(undefined, undefined);
                this.loadSettings();
            
            }
                , 2000);


        }


    }

    onDataChange(event) {

    }


    updateCalculatedResolution(event) {

        this.CalculatedResolution = (Math.round(this.CalculatedResolutionWidth * this.SelectedNetworkExportScaleVariable) + " x " + Math.round(this.CalculatedResolutionHeight * this.SelectedNetworkExportScaleVariable) + "px");
        this.cdref.detectChanges();
    }


    showGlobalSettings() {
        this.DisplayGlobalSettingsDialogEvent.emit("Styling");
    }

    exportVisualization(event) {

        this.visuals.twoD.Show2DExportPane = false;
        this.isExporting = true;

        if (this.commonService.session.style.widgets['node-symbol-variable'] != 'None') {
            this.generateNodeSymbolSelectionTable("#node-symbol-table-bottom", this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'], false);
        }

        if (this.commonService.session.style.widgets['node-color-variable'] != 'None') {
            this.visuals.microbeTrace.generateNodeColorTable("#node-color-table-bottom", false);
        }

        if (this.commonService.session.style.widgets['link-color-variable'] != 'None') {
            this.visuals.microbeTrace.generateNodeLinkTable("#link-color-table-bottom", false);
        }

        if (!this.isExportClosed) {
            setTimeout(() => this.exportVisualization(undefined), 300);
        }
        else {
            this.exportWork();
        }
    }

    onCloseExport() {
        this.isExportClosed = true;
    }

    exportWork() {
        let network = document.getElementById('network');
        let $network = $(network);
        let watermark = d3.select(network).append('text')
            .text('MicrobeTrace')
            .attr('x', $network.width() - 170)
            .attr('y', $network.height() - 20)
            .attr('class', 'watermark');
        let filetype = this.SelectedNetworkExportFileTypeListVariable, 
            filename = this.SelectedNetworkExportFilenameVariable;
        if (filetype == 'svg') {
           
            network.style.height = '100%';
            network.style.width = '100%';
            let content = this.visuals.twoD.commonService.unparseSVG(network);
            let blob = new Blob([content], { type: 'image/svg+xml;charset=utf-8' });
            saveAs(blob, filename + '.' + filetype);
            watermark.remove();
            const style: any = this.svgStyle;
            network.style.height = style.height;
            network.style.width = style.width;
            
        } else {
            setTimeout(() => {
                const scale: number = this.visuals.twoD.SelectedNetworkExportScaleVariable;
                const element = document.querySelector('TwoDComponent').parentElement;
                domToImage.toBlob(element, {
                    width: element.clientWidth * scale,
                    height: element.clientHeight * scale,
                    style: {
                        transform: 'scale(' + scale + ')',
                        transformOrigin: 'top left'
                    },
                    quality: this.visuals.twoD.SelectedNetworkExportQualityVariable
                })
                    .then((blob) => {
                        saveAs(blob, filename + '.' + filetype);

                        watermark.remove();
                        this.visuals.twoD.isExporting = false;
                        this.visuals.microbeTrace.clearTable("#node-symbol-table-bottom");
                        this.visuals.microbeTrace.clearTable("#node-color-table-bottom");
                        this.visuals.microbeTrace.clearTable("#link-color-table-bottom");

                        this.visuals.microbeTrace.GlobalSettingsDialogSettings.restoreStateAfterExport();
                        this.visuals.microbeTrace.GlobalSettingsLinkColorDialogSettings.restoreStateAfterExport();
                        this.visuals.microbeTrace.GlobalSettingsNodeColorDialogSettings.restoreStateAfterExport();
                        this.visuals.twoD.NodeSymbolTableWrapperDialogSettings.restoreStateAfterExport();
                        this.visuals.twoD.Node2DNetworkExportDialogSettings.restoreStateAfterExport();
                    });
            }, 1000);
           
        }
    }


    render(showStatistics: boolean = true) {

        if (!$('#network').length) return;

        $("#numberOfSelectedNodes").text(this.visuals.twoD.commonService.session.data.nodes.filter(d => d.selected).length.toLocaleString());

        const start = Date.now();
        let newNodes = this.visuals.twoD.commonService.getVisibleNodes(true);
        let oldNodes = this.visuals.twoD.commonService.session.network.nodes;

        newNodes.forEach((d, i) => {
            let match = oldNodes.find(d2 => d2._id == d._id);
            if (match) {
                ['x', 'y', 'fx', 'fy', 'vx', 'vy', 'fixed'].forEach(v => {
                    if (typeof match[v] != "undefined") d[v] = match[v];
                });
            }
        });

        this.visuals.twoD.commonService.session.network.nodes = newNodes;

        let nodes = this.visuals.twoD.svg.select('g.nodes').selectAll('g').data(newNodes, d => d._id)
            .join(
                enter => {
                    let g = enter.append('g')
                        .attr('tabindex', '0')
                        .call(d3.drag() //A bunch of mouse handlers.
                            .on('start', (x) => this.visuals.twoD.dragstarted(x))
                            .on('drag', (x) => this.visuals.twoD.dragged(x))
                            .on('end', (x) => this.visuals.twoD.dragended(x)))
                        .on('mouseenter focusin', (x) => this.visuals.twoD.showNodeTooltip(x))
                        .on('mouseout focusout', (x) => this.visuals.twoD.hideTooltip())
                        .on('contextmenu', (x) => this.visuals.twoD.showContextMenu(x))
                        .on('click', (x) => this.visuals.twoD.clickHandler(x))
                        .on('keydown', n => {
                            if (d3.event.code == 'Space') this.visuals.twoD.clickHandler(n);
                            if (d3.event.shiftKey && d3.event.key == 'F10') this.visuals.twoD.showContextMenu(n);
                        });
                       g.append('path')
                        .attr('stroke', '#ffffff')
                        .attr('stroke-width', '2px');
                    g.append('text')
                        .attr('dy', 5)
                        .attr('dx', 8);
                    return g;
                }
            );


        this.visuals.twoD.redrawNodes();
        this.visuals.twoD.updateNodeColors();
        this.visuals.twoD.redrawLabels();


        let vlinks = this.visuals.twoD.getVLinks();
        let links = this.visuals.twoD.svg.select('g.links').selectAll('line').data(vlinks)
            .join('line')
            .attr('stroke-width', this.visuals.twoD.commonService.session.style.widgets['link-width'])
            .attr('opacity', 1 - this.visuals.twoD.commonService.session.style.widgets['link-opacity'])
            .on('mouseenter', (x) => this.visuals.twoD.showLinkTooltip(x))
            .on('mouseout', (x) => this.visuals.twoD.hideTooltip());

        this.visuals.twoD.updateLinkColor();
        this.visuals.twoD.scaleLinkWidth();

        let linklabels = this.visuals.twoD.svg.select('g.links').selectAll('text').data(this.visuals.twoD.getLLinks())
            .join('text')
            .attr('text-anchor', 'middle')
            .attr('dy', this.visuals.twoD.commonService.session.style.widgets['link-width'] + 2)
            .text(l => l[this.visuals.twoD.commonService.session.style.widgets['link-label-variable']]);

        this.visuals.twoD.force.nodes(this.visuals.twoD.commonService.session.network.nodes).on('tick', () => {
            nodes
                .attr('transform', d => {
                    var ew =
                        d.fixed ?
                            `translate(${d.fx}, ${d.fy})` :
                            `translate(${d.x}, ${d.y})`;

                    return ew;
                }
                );
            links
                .attr('x1', l => l.source.x)
                .attr('y1', l => l.source.y)
                .attr('x2', l => l.target.x)
                .attr('y2', l => l.target.y);


            if (this.visuals.twoD.commonService.session.style.widgets['link-label-variable'] !== 'None') {
                linklabels
                    .attr('x', l => (l.source.x + l.target.x) / 2)
                    .attr('y', l => (l.source.y + l.target.y) / 2)
                    .attr('transform', l => 'rotate(' +
                        this.visuals.twoD.calcAngle(l.source, l.target) + ' ' +
                        (l.source.x + l.target.x) / 2 + ' ' +
                        (l.source.y + l.target.y) / 2 + ')'
                    );
            }
        });
        this.visuals.twoD.force.force('link').links(vlinks);
        this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
        $('#node-symbol-variable').trigger('change');

        this.visuals.twoD.ShowStatistics = showStatistics;
        this.visuals.twoD.cdref.detectChanges();

        console.log("Network render time:", (Date.now() - start).toLocaleString(), 'ms');
    };



    getVLinks() {
        let vlinks = this.visuals.twoD.commonService.getVisibleLinks(true);
        let output = [];
        let n = vlinks.length;
        let nodes = this.visuals.twoD.commonService.session.network.nodes;
        for (let i = 0; i < n; i++) {
            if (vlinks[i].origin) {
                if (typeof vlinks[i].origin == 'object') {
                    vlinks[i].origin.forEach((o, j, l) => {
                        output.push(Object.assign({}, vlinks[i], {
                            origin: o,
                            oNum: j,
                            origins: l.length,
                            source: nodes.find(d => d._id == vlinks[i].source || d.id == vlinks[i].source),
                            target: nodes.find(d => d._id == vlinks[i].target || d.id == vlinks[i].target)
                        }));
                    });
                } else {
                    output.push(Object.assign({}, vlinks[i], {
                        oNum: 0,
                        origins: 1,
                        source: nodes.find(d => d._id == vlinks[i].source || d.id == vlinks[i].source),
                        target: nodes.find(d => d._id == vlinks[i].target || d.id == vlinks[i].target)
                    }));
                }
            } else {
                output.push(Object.assign({}, vlinks[i], {
                    origin: 'Unknown',
                    oNum: 0,
                    origins: 1,
                    source: nodes.find(d => d._id == vlinks[i].source || d.id == vlinks[i].source),
                    target: nodes.find(d => d._id == vlinks[i].target || d.id == vlinks[i].target)
                }));
            }
        }

        output =  output.filter(x=>x.source != undefined && x.target != undefined);

        return output;
    };

    getLLinks() {
        let vlinks = this.visuals.twoD.commonService.getVisibleLinks(true);
        let n = vlinks.length;
        for (let i = 0; i < n; i++) {
            vlinks[i].source = this.visuals.twoD.commonService.session.network.nodes.find(d => d._id == vlinks[i].source);
            vlinks[i].target = this.visuals.twoD.commonService.session.network.nodes.find(d => d._id == vlinks[i].target);
        }
        return vlinks;
    };

    calcAngle(source, target) {
        return Math.atan((source.y - target.y) / (source.x - target.x)) * this.visuals.twoD.radToDeg;
    };

    dragstarted(n) {
        if (!d3.event.active) this.visuals.twoD.force.alphaTarget(0.3).restart();
        function setNode(d) {
            d.fx = d.x;
            d.fy = d.y;
        }
        this.visuals.twoD.multidrag = n.selected;
        this.visuals.twoD.selected = this.visuals.twoD.svg.select('g.nodes')
            .selectAll('g')
            .data(this.visuals.twoD.commonService.session.network.nodes)
            .filter(d => d.selected);
        if (this.visuals.twoD.multidrag) {
            this.visuals.twoD.selected.each(setNode);
        } else {
            setNode(n);
        }
    };

    dragged(n) {
        function updateNode(d) {
            d.fx += d3.event.dx;
            d.fy += d3.event.dy;
        }
        if (this.visuals.twoD.multidrag) {
            this.visuals.twoD.selected.each(updateNode);
        } else {
            updateNode(n);
        }
    };

    dragended(n) {
        if (!d3.event.active) this.visuals.twoD.force.alphaTarget(0);
        function unsetNode(d) {
            if (!d.fixed) {
                d.fx = null;
                d.fy = null;
            }
        }
        if (this.visuals.twoD.multidrag) {
            this.visuals.twoD.selected.each(unsetNode);
        } else {
            unsetNode(n);
        }
    };

    clickHandler(n) {
        if (d3.event.ctrlKey) {
            this.visuals.twoD.commonService.session.data.nodes.find(node => node._id == n._id).selected = !n.selected;
        } else {
            this.visuals.twoD.commonService.session.data.nodes.forEach(node => {
                if (node._id == n._id) {
                    node.selected = !n.selected;
                } else {
                    node.selected = false;
                }
            });
        }
 
        this.visuals.twoD.render(false);

        window.dispatchEvent(new Event('node-selected'));
    };

    showContextMenu(d) {
        d3.event.preventDefault();
        this.visuals.twoD.hideTooltip();
        $('#copyID').attr('data-clipboard-text', d._id);
        $('#copySeq').attr('data-clipboard-text', d.seq);
        d3.select('#viewAttributes').on('click', () => {

            this.visuals.twoD.ContextSelectedNodeAttributes = [];

            this.visuals.twoD.hideContextMenu();

            this.visuals.twoD.ShowNetworkAttributes = true;
            this.visuals.twoD.cdref.detectChanges();

            let target = $('#network-attribute-table').empty();
            let nd = this.visuals.twoD.commonService.session.data.nodes.find(nd => nd._id == d._id);
            for (let attribute in nd) {
                if (attribute[0] == '_') continue;
                this.visuals.twoD.ContextSelectedNodeAttributes.push({attribute: this.visuals.twoD.commonService.titleize(attribute), value: d[attribute]});
            }

            this.visuals.twoD.ContextSelectedNodeAttributes = 
            this.visuals.twoD.ContextSelectedNodeAttributes.filter(x=>x.attribute !== "Seq" && x.value !== undefined && x.value !== null && x.value !== "" )
            .concat(this.visuals.twoD.ContextSelectedNodeAttributes.filter(x=>x.attribute !== "Seq" && (x.value === undefined || x.value === null || x.value === "" )))
            .concat(this.visuals.twoD.ContextSelectedNodeAttributes.filter(x=>x.attribute === "Seq"));

        }).node().focus();
        if (d.fixed) {
            $('#pinNode').text('Unpin Node').on('click', () => {

                d.fx = null;
                d.fy = null;
                d.fixed = false;
                this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
                this.visuals.twoD.hideContextMenu();
            });

        } else {
            $('#pinNode').text('Pin Node').on('click', () => {

                d.fx = d.x;
                d.fy = d.y;
                d.fixed = true;
                this.visuals.twoD.hideContextMenu();
            });
        }
        $('#context-menu').css({
            'z-index': 1000,
            'display': 'block',
            'left': (d3.event.pageX - 300) + 'px',
            'top': (d3.event.pageY - 125) + 'px',
        }).animate({ 'opacity': 1 }, 80);
    };

    hideContextMenu() {

        $('#context-menu').animate({ 'opacity': 0 }, 80, () => {
            $(this).css('z-index', -1);
        });
    };

    showNodeTooltip(d) {
        if (this.visuals.twoD.commonService.session.style.widgets['node-highlight']) this.visuals.twoD.highlightNeighbors(d);
        //if ($('#node-tooltip-variable').val() == 'None') return;
        if (this.visuals.twoD.SelectedNodeTooltipVariable == 'None') return;

        //let htmlValue: any = $('#node-tooltip-variable').val();
        let htmlValue: any = this.visuals.twoD.SelectedNodeTooltipVariable;


        $('#tooltip').css({ top: d3.event.pageY - 128, left: d3.event.pageX - 300, position: 'absolute' });

        d3.select('#tooltip')
            .html(d[htmlValue])
            .style('left', (d3.event.pageX - 300) + 'px')
            .style('top', (d3.event.pageY - 128) + 'px')
            .style('z-index', 1000)
            .transition().duration(100)
            .style('opacity', 1)
            .style('color','#333333')
            .style('background','#f5f5f5')
            .style('border', '1px solid #cccccc')
            .style('border-radius','.25rem')
            .style('padding','.25rem')
            ;
    };

    highlightNeighbors(node) {
        let links = this.visuals.twoD.getVLinks();
        let lindices = [], neighbors = [node._id];

        let n = links.length;
        for (let i = 0; i < n; i++) {
            let l = links[i];
            if (l.source._id !== node._id && l.target._id !== node._id) {
                lindices.push(l.index);
            } else {
                if (l.source._id == node._id) {
                    neighbors.push(l.target._id);
                } else {
                    neighbors.push(l.source._id);
                }
            }
        }
        this.visuals.twoD.svg
            .select('g.nodes')
            .selectAll('g')
            .selectAll('path')
            .attr('opacity', d => this.visuals.twoD.commonService.includes(neighbors, d._id) ? 1 : .1);
        this.visuals.twoD.svg
            .select('g.links')
            .selectAll('line')
            .data(links)
            .attr('opacity', l => this.visuals.twoD.commonService.includes(lindices, l.index) ? .1 : 1);
    };

    showLinkTooltip(d) {
        let v: any = this.visuals.twoD.SelectedLinkTooltipVariable;
        if (v == 'None') return;

        $('#tooltip').css({ top: d3.event.pageY - 128, left: d3.event.pageX - 300, position: 'absolute' });


        d3.select('#tooltip')
            .html((v == 'source' || v == 'target') ? d[v]._id : d[v])
            .style('left', (d3.event.pageX - 300) + 'px')
            .style('top', (d3.event.pageY - 128) + 'px')
            .style('z-index', 1000)
            .transition().duration(100)
            .style('opacity', 1);
    };

    hideTooltip() {
        if (this.visuals.twoD.commonService.session.style.widgets['node-highlight']) {
            this.visuals.twoD.svg
                .select('g.nodes')
                .selectAll('g')
                .selectAll('path')
                .attr('opacity', 1);
            let linkOpacity = 1 - this.visuals.twoD.commonService.session.style.widgets['link-opacity'];
            this.visuals.twoD.svg
                .select('g.links')
                .selectAll('line')
                .attr('opacity', linkOpacity);
        }
        let tooltip = d3.select('#tooltip');
        tooltip
            .transition().duration(100)
            .style('opacity', 0)
            .on('end', () => tooltip.style('z-index', -1));
    };



    isNumber(a) {
        return typeof a == "number";
    };

    redrawNodes() {


        //Things to track in the function:
        //* Shapes:
        let type = d3[this.visuals.twoD.commonService.session.style.widgets['node-symbol']];
        let symbolVariable = this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'];
        //* Sizes:
        let defaultSize = this.visuals.twoD.commonService.session.style.widgets['node-radius'];
        let size = defaultSize, med = defaultSize, oldrng, min, max;
        let sizeVariable = this.visuals.twoD.commonService.session.style.widgets['node-radius-variable'];
        if (sizeVariable !== 'None') {
            let n = this.visuals.twoD.commonService.session.network.nodes.length;
            min = Number.MAX_VALUE;
            max = Number.MIN_VALUE;
            for (let i = 0; i < n; i++) {
                let size = this.visuals.twoD.commonService.session.network.nodes[i][sizeVariable];
                if (typeof size == 'undefined') continue;
                if (size < min) min = size;
                if (size > max) max = size;
            }
            oldrng = max - min;
            med = oldrng / 2;
        }
        let nodes = this.visuals.twoD.svg.select('g.nodes').selectAll('g').data(this.visuals.twoD.commonService.session.network.nodes);
        
        nodes.selectAll('path')._parents.forEach(x=>{
            const path = x.childNodes[0];
            const data = x.__data__;

            if (symbolVariable !== 'None') type = d3[this.visuals.twoD.commonService.temp.style.nodeSymbolMap(data[symbolVariable])];
            if (sizeVariable !== 'None') {
                size = data[sizeVariable];
                if (!this.visuals.twoD.isNumber(size)) size = med;
                size = (size - min) / oldrng;
                size = size * size * defaultSize + 100;
            }

            if (type != undefined){
                d3.select(path).attr('d', d3.symbol().size(size).type(type));
            }
        });
    };


    redrawLabels() {

        let nodes = this.visuals.twoD.svg.select('g.nodes').selectAll('g').data(this.visuals.twoD.commonService.session.network.nodes).select('text'),
            labelVar = this.visuals.twoD.commonService.session.style.widgets['node-label-variable'];
        if (labelVar == 'None') {
            nodes.text('');
        } else {
            let size = this.visuals.twoD.commonService.session.style.widgets['node-label-size'],
                orientation = this.visuals.twoD.commonService.session.style.widgets['node-label-orientation'];
            nodes
                .text(n => n[labelVar])
                .style('font-size', size + 'px');
            switch (orientation) {
                case 'Left':
                    nodes
                        .attr('text-anchor', 'end')
                        .attr('dx', -8)
                        .attr('dy', (size - 4) / 2);
                    break;
                case 'Top':
                    nodes
                        .attr('text-anchor', 'middle')
                        .attr('dx', 0)
                        .attr('dy', 4 - size);
                    break;
                case 'Bottom':
                    nodes
                        .attr('text-anchor', 'middle')
                        .attr('dx', 0)
                        .attr('dy', size + 4);
                    break;
                case 'Middle':
                    nodes
                        .attr('text-anchor', 'middle')
                        .attr('dx', 0)
                        .attr('dy', (size - 4) / 2);
                    break;
                default: //'right'
                    nodes
                        .attr('text-anchor', 'start')
                        .attr('dx', 8)
                        .attr('dy', (size - 4) / 2);
            }
        }
    };


    /*/
        Node Events
    /*/
    onNodeLabelVaribleChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['node-label-variable'] = e;
        if (e == 'None') {
            $('.node-label-row').slideUp();
        } else {
            $('.node-label-row').css('display', 'flex');
        }
        this.redrawLabels();
    }

    onNodeLabelSizeChange(e) {
        this.setNodeLabelSize(e.target.value);
    }

    setNodeLabelSize(size) {
        this.visuals.twoD.commonService.session.style.widgets['node-label-size'] = parseFloat(size);
        this.visuals.twoD.redrawLabels();
    }

    onNodeLabelOrientationChange(e) {
        this.visuals.twoD.commonService.session.style.widgets['node-label-orientation'] = e;
        this.visuals.twoD.redrawLabels();
    }

    onNodeTooltipVariableChange(e) {
        this.visuals.twoD.commonService.session.style.widgets['node-tooltip-variable'] = e;
        this.visuals.twoD.redrawLabels();
    }

    onNodeSymbolVariableChange(e, setVisibility = true) {
    //    if(this.SelectedNodeSymbolVariable != this.context.twoD.commonService.session.style.widgets['node-symbol-variable']){

            this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'] = this.SelectedNodeSymbolVariable;

            if(setVisibility){
                this.visuals.twoD.NodeSymbolTableWrapperDialogSettings.setVisibility(true);
                this.visuals.twoD.ShowNodeSymbolTable = true;
                this.visuals.twoD.SelectedNetworkTableTypeVariable = "Show";
            }

            this.visuals.twoD.cdref.detectChanges();

            this.generateNodeSymbolSelectionTable("#node-symbol-table", e);

            this.visuals.twoD.redrawNodes();
      //  }
    }

    generateNodeSymbolSelectionTable(tableId: string, variable: string, isEditable: boolean = true) {
        this.visuals.microbeTrace.clearTable(tableId);

        let symbolMapping: { key: string, value: string }[] = [
            { key: 'symbolCircle', value: '&#11044; (Circle)' },
            { key: "symbolTriangle", value: '&#9650; (Up Triangle)' },
            { key: "symbolTriangleDown", value: '&#9660; (Down Triangle)' },
            { key: "symbolTriangleLeft", value: '&#9664; (Left Triangle)' },
            { key: "symbolTriangleRight", value: '&#9654; (Right Triangle)' },
            { key: "symbolDiamond", value: '&#10731; (Vertical Diamond)' },
            { key: "symbolDiamondAlt", value: '&#10731; (Horizontal Diamond)' },
            { key: "symbolSquare", value: '&#9632; (Square)' },
            { key: "symbolDiamondSquare", value: '&#9670; (Tilted Square)' },
            { key: "symbolPentagon", value: '&#11039; (Pentagon)' },
            { key: "symbolHexagon", value: '&#11042; (Hexagon)' },
            { key: "symbolHexagonAlt", value: '&#11043; (Tilted Hexagon)' },
            { key: "symbolOctagon", value: '&#11204; (Octagon)' },
            { key: "symbolOctagonAlt", value: '&#11203; (Tilted Octagon)' },
            { key: "symbolCross", value: '&#10010; (Addition Sign)' },
            { key: "symbolX", value: '&#10006; (Multiplication Sign)' },
            { key: "symbolWye", value: '&#120300; (Wye)' },
            { key: "symbolStar", value: '&#9733; (Star)' },
        ];

        let table = $(tableId)
        const disabled: string = isEditable ? '' : 'disabled';

        this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'] = variable;

        if (variable === 'None' && !isEditable) return;


        let values = [];
        let aggregates = {};
        let nodes = this.visuals.twoD.commonService.session.data.nodes;
        let n = nodes.length;
        let vnodes = 0;
        for (let i = 0; i < n; i++) {
            let d = nodes[i];
            if (!d.visible) continue;
            vnodes++;
            let dv = d[variable];
            if (values.indexOf(dv) == -1) values.push(dv);
            if (dv in aggregates) {
                aggregates[dv]++;
            } else {
                aggregates[dv] = 1;
            }
        }
        if (values.length > this.visuals.twoD.commonService.session.style.nodeSymbols.length) {
            let symbols = [];
            let m = Math.ceil(values.length / this.visuals.twoD.commonService.session.style.nodeSymbols.length);
            while (m-- > 0) {
                symbols = symbols.concat(this.visuals.twoD.commonService.session.style.nodeSymbols);
            }
            this.visuals.twoD.commonService.session.style.nodeSymbols = symbols;
        }
        this.visuals.twoD.commonService.temp.style.nodeSymbolMap = d3.scaleOrdinal(this.visuals.twoD.commonService.session.style.nodeSymbols).domain(values);

        table.empty().append(
            '<tr>' +
            `<th ${isEditable ? 'contenteditable' : ''}>Node ${this.visuals.twoD.commonService.titleize(variable)}</th>` +
            (this.visuals.twoD.commonService.session.style.widgets['node-symbol-table-counts'] ? '<th>Count</th>' : '') +
            (this.visuals.twoD.commonService.session.style.widgets['node-symbol-table-frequencies'] ? '<th>Frequency</th>' : '') +
            '<th>Shape</th>' +
            '</tr>');
        let options = $('#node-symbol2').html();
        values.sort( (a, b)  => {
            return aggregates[b] - aggregates[a];
        }).forEach((v, i) => {
            let selector = $(`<select ${disabled}></select>`).append(options).val(this.visuals.twoD.commonService.temp.style.nodeSymbolMap(v)).on('change',  (e) => {
                this.visuals.twoD.commonService.session.style.nodeSymbols.splice(i, 1, (e.target as any).value);
                this.visuals.twoD.commonService.temp.style.nodeSymbolMap = d3.scaleOrdinal(this.visuals.twoD.commonService.session.style.nodeSymbols).domain(values);
                this.visuals.twoD.redrawNodes();
            });
            let symbolText = symbolMapping.find(x => x.key === this.visuals.twoD.commonService.temp.style.nodeSymbolMap(v));

            let cell = $('<td></td>').append(isEditable ? selector : symbolText ? symbolText.value : '');
            let row = $(
                '<tr>' +
                `<td ${isEditable ? 'contenteditable' : ''}> ${this.visuals.twoD.commonService.titleize('' + v)} </td> ` +
                (this.visuals.twoD.commonService.session.style.widgets['node-symbol-table-counts'] ? ('<td>' + aggregates[v] + '</td>') : '') +
                (this.visuals.twoD.commonService.session.style.widgets['node-symbol-table-frequencies'] ? ('<td>' + (aggregates[v] / vnodes).toLocaleString() + '</td>') : '') +
                '</tr>'
            ).append(cell);
            table.append(row);
        });
    }

    onNodeRadiusVariableChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['node-radius-variable'] = e;
        this.visuals.twoD.redrawNodes();

    }

    onNodeRadiusChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['node-radius'] = e;
        this.visuals.twoD.redrawNodes();
    }

    onNodeSymbolChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['node-symbol'] = e;
        this.visuals.twoD.redrawNodes();
    }

    onNodeSymbolTableChange(e) {
        this.SelectedNetworkTableTypeVariable = e;
        this.visuals.twoD.commonService.session.style.widgets["node-symbol-table-visible"] = this.SelectedNetworkTableTypeVariable;
        if (this.SelectedNetworkTableTypeVariable == "Show") {
            this.NodeSymbolTableWrapperDialogSettings.setVisibility(true);
        }
        else {
            this.NodeSymbolTableWrapperDialogSettings.setVisibility(false);
        }
    }


    onLinkTooltipVariableChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['link-tooltip-variable'] = e;
//TODO: umm.... do something here?
    }

    onLinkLabelVariableChange(e) {


        let label: any = e;
        this.visuals.twoD.commonService.session.style.widgets['link-label-variable'] = label;
        if (label == 'None') {
            this.visuals.twoD.svg.select('g.links').selectAll('text').text('');
        } else {
            this.visuals.twoD.svg.select('g.links').selectAll('text').data(this.visuals.twoD.getLLinks()).text(l => l[label] === null || l[label] === undefined ? '' :  _.unescape(l[label])
            );
            this.visuals.twoD.force.alpha(0.01).alphaTarget(0).restart();
        }
    }





    onLinkOpacityChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['link-opacity'] = e;
        let opacity = 1 - e;
        this.visuals.twoD.svg.select('g.links').selectAll('line').attr('opacity', opacity);
    }

    onLinkWidthVariableChange(e) {

        if (e == 'None') {
            $('#link-reciprocalthickness-row').slideUp();
        } else {
            $('#link-reciprocalthickness-row').css('display', 'flex');
        }
        this.visuals.twoD.commonService.session.style.widgets['link-width-variable'] = e;
        this.visuals.twoD.scaleLinkWidth();
    }


    onLinkWidthReciprocalNonReciprocalChange(e) {

        if (e == "Reciprocal") {
            this.visuals.twoD.commonService.session.style.widgets['link-width-reciprocal'] = true;
            this.visuals.twoD.scaleLinkWidth();
        }
        else {
            this.visuals.twoD.commonService.session.style.widgets['link-width-reciprocal'] = false;
            this.visuals.twoD.scaleLinkWidth();

        }
    }

    onLinkWidthChange(e) {

        this.visuals.twoD.commonService.session.style.widgets['link-width'] = e;
        this.visuals.twoD.scaleLinkWidth();

    }

    onLinkLengthChange(e) {

        this.visuals.twoD.force.force('link').distance(e);
        this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
        this.visuals.twoD.commonService.session.style.widgets['link-length'] = e;
    }

    onLinkDirectedUndirectedChange(e) {

        if (e == "Show") {
            this.visuals.twoD.svg.select('g.links').selectAll('line').attr('marker-end', 'url(#end-arrow)');
            this.visuals.twoD.commonService.session.style.widgets['link-directed'] = true;
        }
        else {

            this.visuals.twoD.svg.select('g.links').selectAll('line').attr('marker-end', null);
            this.visuals.twoD.commonService.session.style.widgets['link-directed'] = false;
        }
    }


    onDontHighlightNeighborsHighlightNeighborsChange(e) {

        if (e == "Normal") {
            this.visuals.twoD.commonService.session.style.widgets['node-highlight'] = false;
        }
        else {
            this.visuals.twoD.commonService.session.style.widgets['node-highlight'] = true;
        }
    }

    onNetworkGridlinesShowHideChange(e) {

        if (e == "Show") {
            this.visuals.twoD.commonService.session.style.widgets['network-gridlines-show'] = true;
            let range = Math.ceil(Math.max(this.visuals.twoD.halfWidth, this.visuals.twoD.halfHeight) / 50);
            let ords = Object.keys(new Array(range).fill(null)).map(parseFloat);
            d3.select('#network g.horizontal-gridlines').selectAll('line').data(ords).enter().append('line')
                .attr('x1', 0)
                .attr('x2', this.visuals.twoD.halfWidth * 2)
                .attr('y1', function (d) { return d * 100; })
                .attr('y2', function (d) { return d * 100; })
                .attr('stroke', 'lightgray');
            d3.select('#network g.vertical-gridlines').selectAll('line').data(ords).enter().append('line')
                .attr('x1', function (d) { return d * 100; })
                .attr('x2', function (d) { return d * 100; })
                .attr('y1', 0)
                .attr('y2', this.visuals.twoD.halfHeight * 2)
                .attr('stroke', 'lightgray');
        }
        else {
            this.visuals.twoD.commonService.session.style.widgets['network-gridlines-show'] = false;
            d3.select('#network g.horizontal-gridlines').html(null);
            d3.select('#network g.vertical-gridlines').html(null);
        }
    }

    onNodeChargeChange(e) {

        this.visuals.twoD.force.force('charge').strength(-e);
        this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
        this.visuals.twoD.commonService.session.style.widgets['node-charge'] = e;
    }

    onNetworkGravityChange(e) {

        this.visuals.twoD.force.force('gravity').strength(e);
        this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
        this.visuals.twoD.commonService.session.style.widgets['network-gravity'] = e;
    }

    onNetworkFrictionChange(e) {

        this.visuals.twoD.force.velocityDecay(e);
        this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
        this.visuals.twoD.commonService.session.style.widgets['network-friction'] = e;
    }


    onNetworkExportFiletypeChange(e) {
        if (e == "svg") {
            this.visuals.twoD.ShowAdvancedExport = false;
        }
        else
            this.visuals.twoD.ShowAdvancedExport = true;
    }

    onSelectedColorTransparencyVariableChange(e){
        //Place holder event
        //this.context.twoD.commonService.session.data.nodes
    }


    updateNodeColors() {

        //debugger;

        let variable = this.visuals.twoD.commonService.session.style.widgets['node-color-variable'];
        let nodes = this.visuals.twoD.svg.select('g.nodes').selectAll('g').select('path').data(this.visuals.twoD.commonService.session.network.nodes).classed('selected', d => d.selected);
        let col = this.visuals.twoD.commonService.session.style.widgets['node-color'];

        let stroke = this.visuals.twoD.commonService.session.style.widgets['selected-node-stroke-color'];
        let stroke_width = parseInt(this.visuals.twoD.commonService.session.style.widgets['selected-node-stroke-width']);

        if (variable == 'None') {

            nodes
                .attr('fill', col).attr('opacity', 1);

            // this.context.microbeTrace.clearTable("#node-color-table-bottom");

        } else {
            nodes
                .attr('fill', d => this.visuals.twoD.commonService.temp.style.nodeColorMap(d[variable]))
                .attr('opacity', d => this.visuals.twoD.commonService.temp.style.nodeAlphaMap(d[variable]));

            //  this.context.microbeTrace.generateNodeColorTable("#node-color-table-bottom", false);
        }


        Array.from(nodes._groups).forEach((x: any)=>{
            x.forEach(y=>{
                if(!this.visuals.twoD.commonService.session.data.nodeFilteredValues.find(z => y.__data__.index === z.index)){
                    y.style['opacity'] = 0;
                }
            })
        })

        let _selected: any = this.visuals.twoD.commonService.session.data.nodes.filter(d => d.selected);

        /*/
         * Add a color that shows the node is selected.
        /*/

        if (_selected.length > 0) {

            Array.from(nodes._groups).filter(x => {

                (<any>x).filter(y => {

                    /*/
                     * Turn on the node(s) selected.
                    /*/
                    if (y['__data__'].selected == true) {

                        y.style['stroke'] = stroke;
                        y.style['strokeWidth'] = stroke_width;

                    }
                    else {
                        /*/
                         * Otherwise, turn on the node(s) selected.
                        /*/

                        y.style['stroke'] = "#FFFFFF";
                        y.style['strokeWidth'] = stroke_width;
                    }
                });
            });
        }
        else {

            //nodes                
            //    .attr('stroke', "#FFFFFF")
            //    .attr('stroke-width', stroke_width)


            Array.from(nodes._groups).filter(x => {

                (<any>x).filter(y => {

                    /*/
                        * Otherwise, turn on the node(s) selected.
                    /*/

                    y.style['stroke'] = "#FFFFFF";
                    y.style['strokeWidth'] = stroke_width;

                });
            });
        }



    };



    updateLinkColor() {

        let variable = this.visuals.twoD.commonService.session.style.widgets['link-color-variable'];
        let links = this.visuals.twoD.svg.select('g.links').selectAll('line');
        if (variable == 'None') {
            let color = this.visuals.twoD.commonService.session.style.widgets['link-color'],
                opacity = 1 - this.visuals.twoD.commonService.session.style.widgets['link-opacity'];
            links
                .attr('stroke', color)
                .attr('opacity', opacity);

            // this.context.microbeTrace.clearTable("#link-color-table-bottom");
        } else {
            // this.context.microbeTrace.generateNodeLinkTable("#link-color-table-bottom", false);

            links
                .data(this.getVLinks())
                .attr('stroke', l => this.visuals.twoD.commonService.temp.style.linkColorMap(l[variable]))
                .attr('opacity', l => this.visuals.twoD.commonService.temp.style.linkAlphaMap(l[variable]))
                .attr('stroke-dasharray', l => {
                    //This quirky little algorithm creates the dasharray code necessary to make dash-y links.
                    let length = 15;
                    let out = new Array(l.origins * 2);
                    let ofs = new Array(l.origins).fill(1);
                    let ons = new Array(l.origins).fill(0);
                    ons[l.oNum] = 1;
                    ofs[l.oNum] = 0;
                    for (let i = 0; i < l.origins; i++) {
                        out[2 * i] = ons[i] * length;
                        out[2 * i + 1] = ofs[i] * length;
                    }
                    return out.join(', ');
                });
        }
    };



    scaleLinkWidth() {
        let scalar = this.visuals.twoD.commonService.session.style.widgets['link-width'];
        let variable = this.visuals.twoD.commonService.session.style.widgets['link-width-variable'];
        let vlinks = this.visuals.twoD.getVLinks();
        let links = this.visuals.twoD.svg.select('g.links').selectAll('line').data(vlinks);
        if (variable == 'None') return links.attr('stroke-width', scalar);
        let n = vlinks.length;
        let max = -Infinity;
        let min = Infinity;
        for (let i = 0; i < n; i++) {
            let l = vlinks[i][variable];
            if (!this.visuals.twoD.isNumber(l)) return;
            if (l > max) max = l;
            if (l < min) min = l;
        }
        let mid = (max - min) / 2 + min;
        let scale = d3.scaleLinear()
            .domain(this.visuals.twoD.commonService.session.style.widgets['link-width-reciprocal'] ? [max, min] : [min, max])
            .range([1, scalar]);
        links.attr('stroke-width', d => {
            let v = d[variable];
            if (!this.visuals.twoD.isNumber(v)) v = mid;
            return scale(v);
        });
    };

    fit(thing, bounds) {

        if (!bounds) bounds = this.visuals.twoD.svg.node().getBBox();
        if (bounds.width == 0 || bounds.height == 0) return; // nothing to fit
        let parent = this.visuals.twoD.svg.node().parentElement.parentElement,
            midX = bounds.x + bounds.width / 2,
            midY = bounds.y + bounds.height / 2;
        let scale = 0.8 / Math.max(bounds.width / parent.parentNode.clientWidth, bounds.height / parent.parentNode.clientHeight);
        const w = parent.parentNode.clientWidth / 2 - midX*scale ;
        const h = parent.parentNode.clientHeight / 2 - midY*scale;
        d3.select('svg#network')
            .transition()
            .duration(750)
            .call(this.visuals.twoD.zoom.transform, d3.zoomIdentity
                .translate(w, h)
                //.translate(parent.parentNode.clientWidth / 2 - midX, parent.parentNode.clientHeight / 2 - midY)
                .scale(scale));
    };

    isFiltered(nodeData: any): boolean{
        if(nodeData){
            return this.visuals.twoD.commonService.session.data.nodeFilteredValues.find(x=>x.index === nodeData.index) !== undefined;
        }
        return true
    }

    openSettings() {

        this.visuals.twoD.Node2DNetworkExportDialogSettings.setVisibility(true);
       // this.context.twoD.ShowStatistics = !this.context.twoD.Show2DSettingsPane;

    }

    enableSettings() {
        this.visuals.twoD.ShowStatistics = !this.visuals.twoD.ShowStatistics;
        this.cdref.detectChanges();
    }

    openExport() {

        this.visuals.microbeTrace.GlobalSettingsDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsLinkColorDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsNodeColorDialogSettings.setStateBeforeExport();
        this.visuals.twoD.NodeSymbolTableWrapperDialogSettings.setStateBeforeExport();
        this.visuals.twoD.Node2DNetworkExportDialogSettings.setStateBeforeExport();

        this.isExportClosed = false;
        this.visuals.twoD.Show2DExportPane = true;
    }

    openCenter() {
        this.visuals.twoD.fit(undefined, undefined);
    }

    openPinAllNodes() {

        let nodes = this.visuals.twoD.svg
            .select('g.nodes')
            .selectAll('g')
            .data(this.visuals.twoD.commonService.session.network.nodes)
            .select('path');
        if (this.visuals.twoD.commonService.session.network.allPinned) {
            nodes.each(function (d) {
                delete d.fx;
                delete d.fy;
                d.fixed = false;
            });
            this.visuals.twoD.force.alpha(0.3).alphaTarget(0).restart();
        } else {
            nodes.each(function (d) {
                d.fx = d.x;
                d.fy = d.y;
                d.fixed = true;
            });
        }
        this.visuals.twoD.commonService.session.network.allPinned = !this.visuals.twoD.commonService.session.network.allPinned;
    }

    onRecallSession(){
        //this.loadSettings();
    }

    openRefreshScreen() {
        this.loadSettings();
        setTimeout(this.visuals.twoD.fit, 2000);
    }

    openSelectDataSetScreen() {

    }

    updateVisualization() {
    }

    ngOnDestroy(): void {
        //this.context.twoD.commonService.session.style.widgets['node-label-variable'] = 'None';
    }

    onLoadNewData(){
        this.render();
    }

    onFilterDataChange(){
         this.render(false);
    }

    loadSettings(){
        //this.context.twoD.zoom = null;

       //Nodes|Label
        this.SelectedNodeLabelVariable = this.visuals.twoD.commonService.session.style.widgets['node-label-variable'];
        this.onNodeLabelVaribleChange(this.SelectedNodeLabelVariable);

        //Node|Label Size
        this.SelectedNodeLabelSizeVariable = this.visuals.twoD.commonService.session.style.widgets['node-label-size'];
        this.setNodeLabelSize(this.SelectedNodeLabelSizeVariable);

        //Node|Orientation
        this.SelectedNodeLabelOrientationVariable = this.visuals.twoD.commonService.session.style.widgets['node-label-orientation'];
        this.onNodeLabelOrientationChange(this.SelectedNodeLabelOrientationVariable);

        //Nodes|Tooltip
        this.SelectedNodeTooltipVariable = this.visuals.twoD.commonService.session.style.widgets['node-tooltip-variable'];
        this.onNodeTooltipVariableChange(this.SelectedNodeTooltipVariable);

        //Nodes|Shape By Table
        this.SelectedNetworkTableTypeVariable = this.visuals.twoD.commonService.session.style.widgets["node-symbol-table-visible"];
        this.onNodeSymbolTableChange(this.SelectedNetworkTableTypeVariable);

        //Nodes|Shape By
        this.SelectedNodeSymbolVariable = this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'];
        this.onNodeSymbolVariableChange(this.visuals.twoD.commonService.session.style.widgets['node-symbol-variable'], this.SelectedNetworkTableTypeVariable === "Show");
        

        //Nodes|Shape
        this.SelectedNodeShapeVariable = this.visuals.twoD.commonService.session.style.widgets['node-symbol'];
        this.onNodeSymbolChange(this.SelectedNodeShapeVariable);

        //Nodes|Size By
        this.SelectedNodeRadiusVariable = this.visuals.twoD.commonService.session.style.widgets['node-radius-variable'];
        this.onNodeRadiusVariableChange(this.SelectedNodeRadiusVariable);

        //Nodes|Size
        this.SelectedNodeRadiusSizeVariable = this.visuals.twoD.commonService.session.style.widgets['node-radius'].toString();
        this.onNodeRadiusChange(this.SelectedNodeRadiusSizeVariable);


        //Links|Tooltip
        this.SelectedLinkTooltipVariable = this.visuals.twoD.commonService.session.style.widgets['link-tooltip-variable'];
        this.onLinkTooltipVariableChange(this.SelectedLinkTooltipVariable);

        //Links|Label
        this.SelectedLinkLabelVariable = this.visuals.twoD.commonService.session.style.widgets['link-label-variable'];
        this.onLinkLabelVariableChange(this.SelectedLinkLabelVariable);

        //Links|Transparency
        this.SelectedLinkTransparencyVariable = this.visuals.twoD.commonService.session.style.widgets['link-opacity'];
        this.onLinkOpacityChange(this.SelectedLinkTransparencyVariable);

        //Links|Width By
        this.SelectedLinkWidthByVariable = this.visuals.twoD.commonService.session.style.widgets['link-width-variable'];
        this.onLinkWidthVariableChange(this.SelectedLinkWidthByVariable);

        //Links|Reciprical
        this.SelectedLinkReciprocalTypeVariable = this.visuals.twoD.commonService.session.style.widgets['link-width-reciprocal'] ? "Reciprocal" : "Non-Reciprocal"
        this.onLinkWidthReciprocalNonReciprocalChange(this.SelectedLinkReciprocalTypeVariable);

        //Links|Width
        this.SelectedLinkWidthVariable = this.visuals.twoD.commonService.session.style.widgets['link-width'];
        this.onLinkWidthChange(this.SelectedLinkWidthVariable);

        //Links|Length
        this.SelectedLinkLengthVariable = this.visuals.twoD.commonService.session.style.widgets['link-length'];
        this.onLinkLengthChange(this.SelectedLinkLengthVariable);

        //Links|Arrows
        this.SelectedLinkArrowTypeVariable = this.visuals.twoD.commonService.session.style.widgets['link-directed'] ? "Show" : "Hide";
        this.onLinkDirectedUndirectedChange(this.SelectedLinkArrowTypeVariable); 


        //Network|Neighbors
        this.SelectedNetworkNeighborTypeVariable = this.visuals.twoD.commonService.session.style.widgets['node-highlight'] ? "Highlighted" : "Normal";
        this.onDontHighlightNeighborsHighlightNeighborsChange(this.SelectedNetworkNeighborTypeVariable);

        //Network|Gridlines
        this.SelectedNetworkGridLineTypeVariable = this.visuals.twoD.commonService.session.style.widgets['network-gridlines-show'] ? "Show" : "Hide";
        this.onNetworkGridlinesShowHideChange(this.SelectedNetworkGridLineTypeVariable);

        //Network|Charge
        this.SelectedNetworkChargeVariable = this.visuals.twoD.commonService.session.style.widgets['node-charge'];
        this.onNodeChargeChange(this.SelectedNetworkChargeVariable);

        //Network|Gravity
        this.SelectedNetworkGravityVariable = this.visuals.twoD.commonService.session.style.widgets['network-gravity'];
        this.onNetworkGravityChange(this.SelectedNetworkGravityVariable);

        //Network|Friction
        this.SelectedNetworkFrictionVariable = this.visuals.twoD.commonService.session.style.widgets['network-friction'];
        this.onNetworkFrictionChange(this.SelectedNetworkFrictionVariable);

    }
}
