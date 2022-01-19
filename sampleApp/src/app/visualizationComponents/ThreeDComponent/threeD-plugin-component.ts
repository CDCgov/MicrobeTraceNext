import { Injector, Component, Output, OnChanges, SimpleChange, EventEmitter, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EventManager, DOCUMENT } from '@angular/platform-browser';
import { CommonService } from '../../contactTraceCommonServices/common.service';
import { window } from 'ngx-bootstrap';
import * as d3 from 'd3';
import * as ClipboardJS from 'clipboard';
import * as saveAs from 'file-saver';
import * as ForceGraph3D from '3d-force-graph';
import { SelectItem } from 'primeng/api';
import * as domToImage from 'dom-to-image-more';
import { DialogSettings } from '../../helperClasses/dialogSettings';
import { MicobeTraceNextPluginEvents } from '../../helperClasses/interfaces';
import {  MicrobeTraceNextVisuals } from '../../microbe-trace-next-plugin-visuals';

/**
 * @title Complex Example
 */
@Component({
    selector: 'ThreeDComponent',
    templateUrl: './threeD-plugin-component.html',
    styleUrls: ['./threeD-plugin-component.css']
})
export class ThreeDComponent extends AppComponentBase implements OnInit, MicobeTraceNextPluginEvents, OnDestroy {

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

    svgStyle: {} = {
        'height': '0px',
        'width': '800px'
    };

    IsDataAvailable: boolean = false;
    pane: any = null;
    links: any = [];
    nodes: any = [];
    graph: any = null;
    a: any = 0;
    downloads: any = 0;
    settings: any = this.commonService.session.style.widgets;
    Show3DSettingsPane: boolean = false;
    Show3DExportSettingsPange: boolean = false;

    Node3DSettingsExportDialogSettings: DialogSettings;

    FieldList: SelectItem[] = [];
    ToolTipFieldList: SelectItem[] = [];

    SelectedNetworkExportFilenameVariable: string = "";

    NetworkExportFileTypeList: any = [
        { label: 'png', value: 'png' }/*,
        { label: 'jpeg', value: 'jpeg' },
        { label: 'webp', value: 'webp' },
        { label: 'svg', value: 'svg' }*/
    ];
    SelectedNetworkExportFileTypeListVariable: string = "png";

    SelectedNodeTooltipVariable: string = "None";
    SelectedNodeSizeByVariable: string = "None";
    SelectedNodeSizeVariabe: any = 4;


    SelectedLinkTooltipVariable: string = "None";
    SelectedLinkTransparencyVariabe: any = 0;
    SelectedLinkWidthVariabe: any = 1.6;


    SelectedNetworkExportScaleVariable: any = 1;
    SelectedNetworkExportQualityVariable: any = 0.92;
    CalculatedResolutionWidth: any = 1918;
    CalculatedResolutionHeight: any = 909;
    CalculatedResolution: any = ((this.CalculatedResolutionWidth * this.SelectedNetworkExportScaleVariable) + " x " + (this.CalculatedResolutionHeight * this.SelectedNetworkExportScaleVariable) + "px");

    private isExportClosed: boolean = false;
    public isExporting: boolean = false;

    resizeFunction = () => this.onWindowResize();

    private visuals: MicrobeTraceNextVisuals;

    constructor(injector: Injector,
        private eventManager: EventManager,
        public commonService: CommonService,
        private cdref: ChangeDetectorRef) {

        super(injector);

        this.visuals = commonService.visuals;
        this.visuals.threeD = this;
    }

    ngOnInit() {
        if(!this.Node3DSettingsExportDialogSettings){
            this.Node3DSettingsExportDialogSettings = new DialogSettings('#net3D-settings-pane', false);
        }
    }

    InitView() {
        window.addEventListener("resize", this.resizeFunction);


        this.visuals.threeD.IsDataAvailable = (this.visuals.threeD.commonService.session.data.nodes.length == 0 ? false : true);

        if (this.visuals.threeD.IsDataAvailable == true) {

            if (this.visuals.threeD.graph == null) {


                this.visuals.threeD.FieldList = [];

                this.visuals.threeD.FieldList.push({ label: "None", value: "None" });
                this.visuals.threeD.commonService.session.data['nodeFields'].map((d, i) => {

                    this.visuals.threeD.FieldList.push(
                        {
                            label: this.visuals.threeD.commonService.capitalize(d.replace("_", "")),
                            value: d
                        });

                });


                this.visuals.threeD.ToolTipFieldList = [];

                this.visuals.threeD.ToolTipFieldList.push({ label: "None", value: "None" });
                this.visuals.threeD.commonService.session.data['linkFields'].map((d, i) => {

                    this.visuals.threeD.ToolTipFieldList.push(
                        {
                            label: this.visuals.threeD.commonService.capitalize(d.replace("_", "")),
                            value: d
                        });

                });



                this.visuals.threeD.graph = ForceGraph3D.default()($("#3DNet").get(0))
                    .width(this.getViewport().vw - 500)
                    .height(this.getViewport().vh - 350)                    
                    ;

                    this.visuals.threeD.graph.onNodeClick((clickedNode, event) =>{
                        if(clickedNode){
                            if (window.event.ctrlKey) {
                                this.commonService.session.data.nodes.find(node => node._id == clickedNode._id).selected = !clickedNode.selected;
                            } else {
                                this.commonService.session.data.nodes.forEach(node => {
                                    if (node._id == clickedNode._id) {
                                        node.selected = !clickedNode.selected;
                                    } else {
                                        node.selected = false;
                                    }
                                });
                            }

                            window.dispatchEvent(new Event('node-selected'));
                        }
                    });
            



                this.visuals.threeD.eventManager.addGlobalEventListener('window', "link-visibility node-visibility", () => {
                    debugger;
                    this.visuals.threeD.updateData();
                });

                this.visuals.threeD.eventManager.addGlobalEventListener('window', "node-color-change selected-color-change", () => {
                    debugger;
                    this.visuals.threeD.updateNodeColors();
                });

                this.visuals.threeD.eventManager.addGlobalEventListener('window', "link-color-change", () => {
                    debugger;
                    this.visuals.threeD.updateLinkColors();
                });

                this.visuals.threeD.eventManager.addGlobalEventListener('window', "background-color-change", () => {
                    debugger;
                    this.visuals.threeD.updateBackground();
                });

                this.visuals.threeD.eventManager.addGlobalEventListener('window', "node-selected", () => {
                    debugger;
                    this.visuals.threeD.updateData();
                    this.visuals.threeD.updateNodeColors();
                });

                setTimeout(() => {
                    this.visuals.threeD.updateGraph();

                }, 100);

                this.loadSettings();
            }
        }
    }

    getViewport(): { vw: number, vh: number } {

        var viewPortWidth;
        var viewPortHeight;

        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
            viewPortWidth = window.innerWidth,
                viewPortHeight = window.innerHeight
        }

        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
            viewPortWidth = document.documentElement.clientWidth,
                viewPortHeight = document.documentElement.clientHeight
        }

        // older versions of IE
        else {
            viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
        }
        return { vw: viewPortWidth, vh: viewPortHeight };
    }

    showGlobalSettings(event) {
        this.DisplayGlobalSettingsDialogEvent.emit("Styling");
    }

    onDataChange(event) {

    }

    onNodeToolTipChange() {
        this.visuals.threeD.commonService.session.style.widgets["3DNet-node-tooltip-variable"] = this.SelectedNodeTooltipVariable;
        this.visuals.threeD.updateNodeTooltip();
    }

    onNodeLinkToolTipChange() {
        this.visuals.threeD.commonService.session.style.widgets["3DNet-link-tooltip-variable"] = this.SelectedLinkTooltipVariable;
        this.visuals.threeD.updateLinkTooltip();
    }

    onNodeSizeChange() {
        this.visuals.threeD.commonService.session.style.widgets["3DNet-node-radius-variable"] = this.SelectedNodeSizeByVariable;
        this.visuals.threeD.commonService.session.style.widgets["3DNet-node-radius"] = parseFloat(this.SelectedNodeSizeVariabe);
        this.visuals.threeD.updateNodeSizes();
    }


    openSettings() {
        this.Node3DSettingsExportDialogSettings.setVisibility(true);
    }

    openExport() {
        this.visuals.microbeTrace.GlobalSettingsDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsLinkColorDialogSettings.setStateBeforeExport();
        this.visuals.microbeTrace.GlobalSettingsNodeColorDialogSettings.setStateBeforeExport();
        this.visuals.threeD.Node3DSettingsExportDialogSettings.setStateBeforeExport();

        this.isExportClosed = false;
        this.visuals.threeD.Show3DExportSettingsPange = true;
    }

    openCenter() {

    }

    openPinAllNodes() {


    }

    openRefreshScreen() {
        this.visuals.threeD.clearCoords();
    }

    openSelectDataSetScreen() {

    }


    exportToImage() {

    }


    download() {
        if (this.visuals.threeD.downloads) {
            cancelAnimationFrame(this.visuals.threeD.a);
        } else {
            let _3dData: any = $("#3DNet canvas")[0];

            _3dData.toBlob((blob) => {
                saveAs(blob, this.visuals.threeD.SelectedNetworkExportFilenameVariable + ".png");
            });
        }
    }

    exportVisualization(event) {

        this.visuals.threeD.Show3DExportSettingsPange = false;
        this.isExporting = true;

        if (this.commonService.session.style.widgets['node-color-variable'] != 'None') {
            this.visuals.microbeTrace.generateNodeColorTable("#node-color-table-bottom3d", false);
        }

        if (this.commonService.session.style.widgets['link-color-variable'] != 'None') {
            this.visuals.microbeTrace.generateNodeLinkTable("#link-color-table-bottom3d", false);
        }

        if (!this.isExportClosed) {
            setTimeout(() => this.exportVisualization(undefined), 300);
        }
        else {
            requestAnimationFrame(() =>this.visuals.threeD.exportWork())
        }
    }

    onCloseExport() {
        this.isExportClosed = true;
    }

    exportWork() {
        let filetype = this.visuals.threeD.SelectedNetworkExportFileTypeListVariable
        let filename = this.visuals.threeD.SelectedNetworkExportFilenameVariable;

        const element = document.querySelector('ThreeDComponent').parentElement;
        domToImage.toBlob(element)
            .then((blob) => {
                saveAs(blob, filename + '.' + filetype);

                this.visuals.threeD.isExporting = false;
                this.visuals.microbeTrace.clearTable("#node-color-table-bottom3d");
                this.visuals.microbeTrace.clearTable("#link-color-table-bottom3d");

                this.visuals.microbeTrace.GlobalSettingsDialogSettings.restoreStateAfterExport();
                this.visuals.microbeTrace.GlobalSettingsLinkColorDialogSettings.restoreStateAfterExport();
                this.visuals.microbeTrace.GlobalSettingsNodeColorDialogSettings.restoreStateAfterExport();
                this.visuals.threeD.Node3DSettingsExportDialogSettings.restoreStateAfterExport();
            });
    }



    updateCalculatedResolution(event) {

        this.CalculatedResolution = (Math.round(this.CalculatedResolutionWidth * this.SelectedNetworkExportScaleVariable) + " x " + Math.round(this.CalculatedResolutionHeight * this.SelectedNetworkExportScaleVariable) + "px");
        this.cdref.detectChanges();
    }


    cancelExportToImage() {
        this.visuals.threeD.Show3DExportSettingsPange = !this.visuals.threeD.Show3DExportSettingsPange;
    }


    updateNodeTooltip() {
        let nodeTooltip = this.visuals.threeD.commonService.session.style.widgets["3DNet-node-tooltip-variable"];
        if (nodeTooltip == "None" || nodeTooltip == null) {
            this.visuals.threeD.graph.nodeLabel("");
        } else {
            this.visuals.threeD.graph.nodeLabel(d => `<span class="three-dee-node-tooltip">${d[nodeTooltip]}</span>`);
        }
    };


    updateNodeColors() {
        let nodeColorBy = this.visuals.threeD.commonService.session.style.widgets["node-color-variable"];
        if (nodeColorBy == "None") {
            let nodeColor = this.visuals.threeD.commonService.session.style.widgets["node-color"];
            this.visuals.threeD.graph.nodeColor(d => {
                return d.selected ? this.visuals.threeD.commonService.session.style.widgets["selected-color"] : nodeColor
            });
        } else {
            this.visuals.threeD.graph.nodeColor(d => {
                return d.selected
                    ? this.visuals.threeD.commonService.session.style.widgets["selected-color"]
                    : this.visuals.threeD.commonService.temp.style.nodeColorMap(d[nodeColorBy])
            });
        }
        this.visuals.threeD.graph.nodeOpacity(1);
    }


    updateNodeSizes() {
        let nodeSizeBy = this.visuals.threeD.commonService.session.style.widgets["3DNet-node-radius-variable"];
        if (nodeSizeBy !== "None") this.visuals.threeD.graph.nodeVal(nodeSizeBy);
        this.visuals.threeD.graph.nodeRelSize(this.visuals.threeD.commonService.session.style.widgets["3DNet-node-radius"]);
    }

    updateLinkTooltip() {
        let linkTooltip = this.visuals.threeD.commonService.session.style.widgets["3DNet-link-tooltip-variable"];
        if (linkTooltip == "None") {
            this.visuals.threeD.graph.linkLabel("");
        } else {
            this.visuals.threeD.graph.linkLabel(d => `<span style="color:#333333;background:#f5f5f5;border:1px solid #cccccc;border-radius:.25rem;padding:.25rem;">${d[linkTooltip]}</span>`);
        }
    }


    updateLinkColors() {
        let linkColorBy = this.visuals.threeD.commonService.session.style.widgets["link-color-variable"];
        if (linkColorBy == "None") {
            let linkColor = this.visuals.threeD.commonService.session.style.widgets["link-color"];
            this.visuals.threeD.graph.linkColor(l => linkColor);
        } else {
            this.visuals.threeD.graph.linkColor(l => this.visuals.threeD.commonService.temp.style.linkColorMap(l[linkColorBy]));
        }
    }

    updateLinkOpacity() {
        this.visuals.threeD.graph.linkOpacity(1 - this.visuals.threeD.commonService.session.style.widgets["3DNet-link-transparency"]);
    }


    updateLinkWidth() {
        this.visuals.threeD.graph.linkWidth(this.visuals.threeD.commonService.session.style.widgets["3DNet-link-width"]);
    }


    updateBackground() {
        this.visuals.threeD.graph.backgroundColor(this.visuals.threeD.commonService.session.style.widgets["background-color"]);
    }


    updateData() {

        if (!$('#3DNet').length) return;
        let newNodes = this.visuals.threeD.commonService.getVisibleNodes(true);
        newNodes.forEach(d => {
            let match = this.visuals.threeD.nodes.find(d2 => d._id == d2._id || d.id == d2.id);
            if (match) {
                d.x = match.x;
                d.y = match.y;
                d.z = match.z;
                d.vx = match.vx;
                d.vy = match.vy;
                d.vz = match.vz;
            }
            d.id = d._id;
        });

        this.visuals.threeD.nodes = newNodes;
        this.visuals.threeD.links = this.visuals.threeD.commonService.getVisibleLinks(true);
        this.visuals.threeD.links = this.visuals.threeD.links.filter(x=>newNodes.find(y=>y._id === x.source) != undefined &&  newNodes.find(y=>y._id === x.target) != undefined);
        this.visuals.threeD.graph.graphData({
            nodes: this.visuals.threeD.nodes,
            links: this.visuals.threeD.links
        });



    }


    updateGraph() {

        this.visuals.threeD.updateData();
        this.visuals.threeD.updateBackground();
        this.visuals.threeD.updateNodeSizes();
        this.visuals.threeD.updateNodeColors();
        this.visuals.threeD.updateNodeTooltip();
        this.visuals.threeD.updateLinkWidth();
        this.visuals.threeD.updateLinkColors();
        this.visuals.threeD.updateLinkOpacity();
        this.visuals.threeD.updateLinkTooltip();
    }

    clearCoords() {
        this.visuals.threeD.nodes.forEach(d => {
            delete d.x;
            delete d.y;
            delete d.z;
        });
        this.visuals.threeD.updateGraph();
    }

    updateVisualization() {
    }

    updateLinkColor() {
        this.updateLinkColors();
    }

    onLinkTransparencyChange() {
        this.visuals.threeD.commonService.session.style.widgets["3DNet-link-transparency"] = parseFloat(
            this.SelectedLinkTransparencyVariabe
        );

        this.updateLinkOpacity();
    }

    onLinkWidthChange() {
        this.visuals.threeD.commonService.session.style.widgets["3DNet-link-width"] = parseFloat(this.SelectedLinkWidthVariabe);
        this.visuals.threeD.updateLinkWidth();
    }

    onWindowResize() {
        this.visuals.threeD.graph.width(this.getViewport().vw - 500).height(this.getViewport().vh - 350);
    }

    onRecallSession(){
        this.loadSettings();
    }

    onLoadNewData(){
        this.updateGraph();
    }

    onFilterDataChange(){
        this.updateGraph();
    }

    loadSettings(){
        this.InitView();

        //Nodes|Tooltip
        this.SelectedNodeTooltipVariable = this.visuals.threeD.commonService.session.style.widgets["3DNet-node-tooltip-variable"];
        this.onNodeToolTipChange();

        //Nodes|Size By
        //Nodes|Size
        this.SelectedNodeSizeByVariable = this.visuals.threeD.commonService.session.style.widgets["3DNet-node-radius-variable"];
        this.SelectedNodeSizeVariabe = this.visuals.threeD.commonService.session.style.widgets["3DNet-node-radius"];
        this.onNodeSizeChange();

        //Links|Tooltip
        this.SelectedLinkTooltipVariable = this.visuals.threeD.commonService.session.style.widgets["3DNet-link-tooltip-variable"];
        this.onNodeLinkToolTipChange();

        //Links|Transparency
        this.SelectedLinkTransparencyVariabe = this.visuals.threeD.commonService.session.style.widgets["3DNet-link-transparency"];
        this.onLinkTransparencyChange();

        //Links|Width
        this.SelectedLinkWidthVariabe = this.visuals.threeD.commonService.session.style.widgets["3DNet-link-width"];
        this.onLinkWidthChange();

    }

    ngOnDestroy() {
        window.removeEventListener("resize", this.resizeFunction);
    }

 
}
