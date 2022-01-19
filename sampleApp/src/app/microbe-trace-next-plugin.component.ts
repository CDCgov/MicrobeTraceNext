import { ChangeDetectionStrategy, Component, OnInit, Injector, ViewChild, ViewChildren, AfterViewInit, Compiler, TemplateRef, ComponentRef, ViewContainerRef, QueryList, ElementRef, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

import { CommonService } from './contactTraceCommonServices/common.service';
import { FilesComponent } from './filesComponent/files-plugin.component';
import { TwoDComponent } from './visualizationComponents/TwoDComponent/twoD-plugin.component';
import { ThreeDComponent } from './visualizationComponents/ThreeDComponent/threeD-plugin-component';
import { TableComponent } from './visualizationComponents/TableComponent/table-plugin-component';
import { AggregationComponent } from './visualizationComponents/AggregationComponent/aggregation-plugin.component';
import { HistogramComponent } from './visualizationComponents/HistogramComponent/histogram-plugin.component';
import { BubblesComponent } from './visualizationComponents/BubblesComponent/bubbles-plugin.component';
import { FlowDiagramComponent } from './visualizationComponents/FlowDiagrmComponent/flowDiagram-plugin.component';
import { ScatterPlotComponent } from './visualizationComponents/ScatterPlotComponent/scatterPlot-plugin.component';
import { WaterfallComponent } from './visualizationComponents/WaterfallComponent/waterfall-plugin.component';
import { MapComponent } from './visualizationComponents/MapComponent/map-plugin.component';
import { GanttComponent } from './visualizationComponents/GanttCompnent/gantt-plugin.component';
import { TimelineComponent } from './visualizationComponents/TimelineComponent/timeline-plugin.component';
import { HeatMapComponent } from './visualizationComponents/HeatMapComponent/heatMap-plugin.component';
import { PhylogeneticComponent } from './visualizationComponents/PhylogeneticComponent/phylogenetic-plugin.component';
import * as d3 from 'd3';
import { window, TabsetComponent } from 'ngx-bootstrap';
import { TabView, TabPanel, Button } from 'primeng/primeng';
import { AppComponentBase } from '@shared/common/app-component-base';
import { SelectItem, TreeNode } from 'primeng/api';
import { BpaasLedgerPluginServiceProxy, BlockchainProofHashDto, GetAllBlockByBlockchainLedgerIDDto, OutputblockchainaccessDto, DeleteBlockdetailsDto, LockblockchainledgerDto, OutputlockblockchainledgerDto, DownloadBlockDto, OutputDeleteblockDto, LeidosPluginServiceProxy, Auth, UserServiceProxy, UserRoleDto, UserEditDto, Blockdata, DownloadFilteredBlockDto, OutputGetJurisdictionDtoItem, MarkAllUnreadMessagesOfUserAsReadInput, OutputDownloadFilteredBlock } from '@shared/service-proxies/service-proxies';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { DialogSettings } from './helperClasses/dialogSettings';
import * as saveAs from 'file-saver';
import { StashObjects, HomePageTabItem } from './helperClasses/interfaces';
import { Observable, forkJoin } from 'rxjs';
import { MicrobeTraceNextVisuals } from './microbe-trace-next-plugin-visuals';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'contact-trace',
    templateUrl: './microbe-trace-next-plugin.component.html',
    styleUrls: ['./microbe-trace-next-plugin.component.less']
})

export class MicrobeTraceNextHomeComponent extends AppComponentBase implements AfterViewInit, OnInit, OnDestroy {


    showSettings: boolean = false;
    showExport: boolean = false;
    showCenter: boolean = false;
    showPinAllNodes: boolean = false;
    showRefresh: boolean = false;
    showButtonGroup: boolean = false;
    showSorting: boolean = false;


    downloadedBlocks: string[] = [];
    ledgerOptions: TreeNode[] = [];
    ledgerOptionSelected: any[] = [];
    ledgerOptionSelectedFlag: boolean = true;
    selectedItemsLabel = 'Choose';

    dataSetView: SelectItem[];
    dataSetViewSelected: string;
    tabSet: any;
    filedata: any;
    fileExtension: string;
    activeTabIndex: any;
    displayHelp: boolean = false;
    displayAbout: boolean = false;
    displayStashDialog: boolean = false;
    displayRecallStashDialog: boolean = false;
    displayLedgerLoaderDialog: boolean = false;
    version: string = "0.6.1";

    saveFileName: string = '';


    posts: BlockchainProofHashDto[] = new Array<BlockchainProofHashDto>();
    Blockchaindata: BlockchainProofHashDto = new BlockchainProofHashDto();
    date: Date;
    Inputdownloadblock: DownloadFilteredBlockDto = new DownloadFilteredBlockDto();
    Filepath: SafeResourceUrl;

    BlockChainLedgerNodeList: any[] = [];
    BlockChainLedgerEdgeList: any[] = [];



    FieldList: SelectItem[] = [];
    ToolTipFieldList: SelectItem[] = [];

    PruneWityTypes: any = [
        { label: 'None', value: 'None' },
        { label: 'Nearest Neighbor', value: 'Nearest Neighbor' }
    ];
    SelectedPruneWityTypesVariable: string = "None";


    SelectedClusterMinimumSizeVariable: any = 0;
    SelectedLinkSortVariable: string = "Distance";
    SelectedLinkThresholdVariable: any = 0;

    RevealTypes: any = [
        { label: 'Everything', value: 'Everything' }
    ];
    SelectedRevealTypesVariable: string = "Everything";


    StatisticsTypes: any = [
        { label: 'Show', value: 'Show' }
        //,{ label: 'Hide', value: 'Hide' }
    ];
    SelectedStatisticsTypesVariable: string = "";

    SelectedColorNodesByVariable: string = "None";
    SelectedNodeColorVariable: string = "#1f77b4";
    SelectedColorLinksByVariable: string = "None;"


    LinkColorTableTypes: any = [
        { label: 'Show', value: 'Show' },
        { label: 'Hide', value: 'Hide' }
    ];
    SelectedLinkColorTableTypesVariable: string = "Hide";

    NodeColorTableTypes: any = [
        { label: 'Show', value: 'Show' },
        { label: 'Hide', value: 'Hide' }
    ];
    SelectedNodeColorTableTypesVariable: string = "Hide";


    SelectedColorVariable: string = "#ff8300";
    SelectedBackgroundColorVariable: string = "#ffffff";
    SelectedApplyStyleVariable: string = "";


    activeTabNdx = null;
    ShowGlobalSettingsLinkColorTable: boolean = false;
    ShowGlobalSettingsNodeColorTable: boolean = false;
    user: UserEditDto = new UserEditDto();
    roles: Array<string> = new Array<string>();

    ShowGlobalSettingsSettingsPane: boolean = false;
    GlobalSettingsDialogSettings: DialogSettings;
    GlobalSettingsLinkColorDialogSettings: DialogSettings;
    GlobalSettingsNodeColorDialogSettings: DialogSettings;

    cachedGlobalSettingsVisibility: boolean = false;
    cachedGlobalSettingsLinkColorVisibility: boolean = false;
    cachedGlobalSettingsNodeColorVisibility: boolean = false;

    cmpRef: ComponentRef<any>;

    private previousTab: string = '';

    private visuals: MicrobeTraceNextVisuals;

    private bpaaSPayloadWrappers: BpaaSPayloadWrapper[] = [];

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

    @ViewChild(TabView) tabView: TabView;
    @ViewChild('dataSet') dataSet: Selection;
    @ViewChildren('placeholder', { read: ViewContainerRef }) targets: QueryList<ViewContainerRef>
    @ViewChild('ledgerloader') spinnerElement: ElementRef;
    @ViewChild('ledgerloadDiv') spinnerDivElement: ElementRef;
    @ViewChild('globalSettingsTab') globalSettingsTab: TabsetComponent;

    public HideThisForNow: boolean = true;

    homepageTabs: HomePageTabItem[] = [
        {
            label: 'MicrobeTrace Next Files',
            templateRef: null,
            tabTitle: 'MicrobeTrace Next Files',
            isActive: true,
            componentRef: null
        }
    ];

    constructor(
        injector: Injector,
        private cfr: ComponentFactoryResolver,
        private compiler: Compiler,
        public commonService: CommonService,
        private keenService: BpaasLedgerPluginServiceProxy,
        private _userService: UserServiceProxy,
        public domSanitizer: DomSanitizer,
        private cdref: ChangeDetectorRef,
        private bpaasLedgerPluginServiceProxy: BpaasLedgerPluginServiceProxy,
        private route: ActivatedRoute
    ) {


        super(injector);

        this.visuals = commonService.visuals;
        this.visuals.microbeTrace = this;

        this.appSession = injector.get(AppSessionService);

        this.activeTabIndex = 0;

        this.dataSetView = [];
        this.dataSetView.push({ label: 'Nodes', value: 'Node' });
        this.dataSetView.push({ label: 'Links', value: 'Link' });
        this.dataSetView.push({ label: 'Clusters', value: 'Cluster' });

        this.dataSetViewSelected = "Node";
    }

    ngOnInit() {

        this.getGlobalSettingsData();

        if (!this.GlobalSettingsDialogSettings) {
            this.GlobalSettingsDialogSettings = new DialogSettings('#global-settings-modal', false);
        }
        if (!this.GlobalSettingsLinkColorDialogSettings) {
            this.GlobalSettingsLinkColorDialogSettings = new DialogSettings('#global-settings-link-color-table', false);
        }
        if (!this.GlobalSettingsNodeColorDialogSettings) {
            this.GlobalSettingsNodeColorDialogSettings = new DialogSettings('#global-settings-node-color-table', false);
        }

        this.SelectedPruneWityTypesVariable = this.commonService.GlobalSettingsModel.SelectedPruneWityTypesVariable;

        //debugger;
        this.SelectedClusterMinimumSizeVariable = this.commonService.GlobalSettingsModel.SelectedClusterMinimumSizeVariable;
        this.SelectedLinkSortVariable = this.commonService.GlobalSettingsModel.SelectedLinkSortVariable;
        this.SelectedLinkThresholdVariable = this.commonService.GlobalSettingsModel.SelectedLinkThresholdVariable;
        this.SelectedRevealTypesVariable = this.commonService.GlobalSettingsModel.SelectedRevealTypesVariable;
        this.SelectedStatisticsTypesVariable = this.commonService.GlobalSettingsModel.SelectedStatisticsTypesVariable;

        this.SelectedColorNodesByVariable = this.commonService.GlobalSettingsModel.SelectedColorNodesByVariable;
        this.SelectedNodeColorVariable = this.commonService.session.style.widgets['node-color'];
        this.SelectedColorLinksByVariable = this.commonService.session.style.widgets['link-tooltip-variable'];
        this.SelectedColorVariable = this.commonService.session.style.widgets['selected-color'];

        this.SelectedLinkColorTableTypesVariable = this.commonService.GlobalSettingsModel.SelectedLinkColorTableTypesVariable;
        this.SelectedApplyStyleVariable = this.commonService.GlobalSettingsModel.SelectedApplyStyleVariable;

        this.SelectedLinkThresholdVariable = this.commonService.session.style.widgets['link-threshold'];

        this.commonService.updateThresholdHistogram();

    }



    onBackgroundChanged() {

        this.visuals.microbeTrace.commonService.session.style.widgets['background-color'] = this.visuals.microbeTrace.SelectedBackgroundColorVariable;

        if ($('#network') != undefined) {
            $('#network').css('background-color', this.SelectedBackgroundColorVariable);
        }

    }



    onMinimumClusterSizeChanged() {

        this.visuals.microbeTrace.commonService.GlobalSettingsModel.SelectedClusterMinimumSizeVariable = this.visuals.microbeTrace.SelectedClusterMinimumSizeVariable;

        let val = parseInt(this.visuals.microbeTrace.SelectedClusterMinimumSizeVariable);

        this.visuals.microbeTrace.commonService.session.style.widgets["cluster-minimum-size"] = val;

        this.visuals.microbeTrace.commonService.setClusterVisibility(true);
        this.visuals.microbeTrace.commonService.setLinkVisibility(true);
        this.visuals.microbeTrace.commonService.setNodeVisibility(true);

        this.visuals.microbeTrace.updatedVisualization();

        this.visuals.microbeTrace.commonService.updateStatistics();

    }


    onLinkSortChanged() {

        this.visuals.microbeTrace.commonService.GlobalSettingsModel.SelectedLinkSortVariable = this.visuals.microbeTrace.SelectedLinkSortVariable;

        this.visuals.microbeTrace.commonService.session.style.widgets["link-sort-variable"] = this.visuals.microbeTrace.SelectedLinkSortVariable;
        this.visuals.microbeTrace.commonService.updateThresholdHistogram();
        this.visuals.microbeTrace.commonService.updateNetwork();

    }



    onPruneWithTypesChanged() {

        this.visuals.microbeTrace.commonService.GlobalSettingsModel.SelectedPruneWityTypesVariable = this.visuals.microbeTrace.SelectedPruneWityTypesVariable;

        //debugger;

        if (this.visuals.microbeTrace.SelectedPruneWityTypesVariable == "None") {
            this.visuals.microbeTrace.commonService.session.style.widgets["link-show-nn"] = false;
            this.visuals.microbeTrace.commonService.updateNetwork();

            this.visuals.microbeTrace.updatedVisualization();
        }
        else {
            this.visuals.microbeTrace.commonService.session.style.widgets["link-show-nn"] = true;
            this.visuals.microbeTrace.commonService.updateNetwork();

            this.visuals.microbeTrace.updatedVisualization();
        }

    }



    onLinkColorTableChanged() {

        this.commonService.GlobalSettingsModel.SelectedLinkColorTableTypesVariable = this.SelectedLinkColorTableTypesVariable;

        if (this.SelectedLinkColorTableTypesVariable == "Hide") {
            this.GlobalSettingsLinkColorDialogSettings.setVisibility(false);
        }
        else {
            this.onColorLinksByChanged();
        }
    }


    onNodeColorTableChanged() {

        this.commonService.GlobalSettingsModel.SelectedNodeColorTableTypesVariable = this.SelectedNodeColorTableTypesVariable;

        if (this.SelectedNodeColorTableTypesVariable == "Hide") {
            this.GlobalSettingsNodeColorDialogSettings.setVisibility(false);
        }
        else {
            this.onColorNodesByChanged();
        }
    }



    onShowStatisticsChanged() {

        this.commonService.GlobalSettingsModel.SelectedStatisticsTypesVariable = this.SelectedStatisticsTypesVariable;

        if (this.homepageTabs[this.activeTabNdx].label == "2D Network") {
            this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance.enableSettings();
        }

    }

    onNodeColorChanged() {

        let variable = this.SelectedNodeColorVariable;
        this.commonService.session.style.widgets["node-color"] = variable;

        this.publishUpdateNodeColors();
    }

    publishUpdateNodeColors() {
        this.homepageTabs.forEach(tab => {
            if (tab.componentRef &&
                tab.componentRef.instance.updateNodeColors) {
                tab.componentRef.instance.updateNodeColors();
            }
        })
    }

    publishUpdateVisualization() {
        this.homepageTabs.forEach(tab => {
            if (tab.componentRef &&
                tab.componentRef.instance.updateVisualization) {
                tab.componentRef.instance.updateVisualization();
            }
        })
    }

    publishUpdateLinkColor() {
        this.homepageTabs.forEach(tab => {
            if (tab.componentRef &&
                tab.componentRef.instance.updateLinkColor) {
                tab.componentRef.instance.updateLinkColor();
            }
        })
    }

    onColorLinksByChanged() {

        this.visuals.microbeTrace.commonService.GlobalSettingsModel.SelectedColorLinksByVariable = this.visuals.microbeTrace.SelectedColorLinksByVariable;

        if (!this.GlobalSettingsLinkColorDialogSettings.isVisible) {

            if (this.SelectedColorLinksByVariable != "None") {
                this.GlobalSettingsLinkColorDialogSettings.setVisibility(true);
                this.cachedGlobalSettingsLinkColorVisibility = this.GlobalSettingsLinkColorDialogSettings.isVisible;
                this.SelectedLinkColorTableTypesVariable = "Show";
                this.cdref.detectChanges();
            }
        }

        this.visuals.microbeTrace.commonService.GlobalSettingsModel.SelectedColorLinksByVariable = this.visuals.microbeTrace.SelectedColorLinksByVariable;
        this.visuals.microbeTrace.commonService.session.style.widgets['link-color-variable'] = this.visuals.microbeTrace.SelectedColorLinksByVariable;


        if (this.SelectedColorLinksByVariable != "None") {

            this.generateNodeLinkTable("#link-color-table");

            this.publishUpdateLinkColor()
        }
        else {
            this.publishUpdateLinkColor()
        }
    }

    generateNodeLinkTable(tableId: string, isEditable: boolean = true) {
        let linkColorTable = $(tableId)
            .empty()
            .append(
                "<tr>" +
                ("<th class='p-1' contenteditable>Link " + this.visuals.microbeTrace.commonService.titleize(this.visuals.microbeTrace.SelectedColorLinksByVariable) + "</th>") +
                (this.visuals.microbeTrace.commonService.session.style.widgets["link-color-table-counts"] ? "<th>Count</th>" : "") +
                (this.visuals.microbeTrace.commonService.session.style.widgets["link-color-table-frequencies"] ? "<th>Frequency</th>" : "") +
                "<th>Color</th>" +
                "</tr>"
            );

        if (!this.visuals.microbeTrace.commonService.session.style.linkValueNames)
            this.visuals.microbeTrace.commonService.session.style.linkValueNames = {};

        let aggregates = this.visuals.microbeTrace.commonService.createLinkColorMap();
        let vlinks = this.visuals.microbeTrace.commonService.getVisibleLinks();
        let aggregateValues = Object.keys(aggregates);

        const disabled: string = isEditable ? '' : 'disabled';

        aggregateValues.forEach((value, i) => {

            const color = this.visuals.microbeTrace.commonService.temp.style.linkColorMap(value);

            let colorinput = $(`<input type="color" value="${color}" ${disabled}>`)
                .on("change", () => {

                    let $this: any = $(this);
                    let colorValue = $this[0].value;

                    this.visuals.microbeTrace.commonService.session.style.linkColors.splice(i, 1, colorValue);
                    this.visuals.microbeTrace.commonService.temp.style.linkColorMap = d3
                        .scaleOrdinal(this.visuals.microbeTrace.commonService.session.style.linkColors)
                        .domain(aggregateValues);


                    this.visuals.microbeTrace.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance.updateLinkColor();

                });

            let alphainput = $("<a>⇳</a>")
                .on("click", e => {
                    $("#color-transparency-wrapper").css({
                        top: e.clientY + 129,
                        left: e.clientX,
                        display: "block"
                    });

                    $("#color-transparency")
                        .val(this.visuals.microbeTrace.commonService.session.style.linkAlphas[i])
                        .one("change", () => {

                            let $this: any = $(this);
                            let transparencyValue = $this[0].value;

                            this.visuals.microbeTrace.commonService.session.style.linkAlphas.splice(i, 1, parseFloat(transparencyValue));
                            this.visuals.microbeTrace.commonService.temp.style.linkAlphaMap = d3
                                .scaleOrdinal(this.visuals.microbeTrace.commonService.session.style.linkAlphas)
                                .domain(aggregateValues);
                            $("#color-transparency-wrapper").fadeOut();

                            this.visuals.microbeTrace.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance.updateLinkColor();

                        });
                });

            let row = $(
                "<tr>" +
                "<td data-value='" + value + "'>" +
                (this.visuals.microbeTrace.commonService.session.style.linkValueNames[value] ? this.visuals.microbeTrace.commonService.session.style.linkValueNames[value] : this.commonService.titleize("" + value)) +
                "</td>" +
                (this.commonService.session.style.widgets["link-color-table-counts"] ? "<td>" + aggregates[value] + "</td>" : "") +
                (this.commonService.session.style.widgets["link-color-table-frequencies"] ? "<td>" + (aggregates[value] / vlinks.length).toLocaleString() + "</td>" : "") +
                "</tr>"
            );

            const nonEditCell = `<td style="background-color:${color}"></td>`;

            if (isEditable) {
                row.append($("<td></td>").append(colorinput).append(alphainput));
            } else {
                row.append(nonEditCell);
            }

            linkColorTable.append(row);
        });

        if (isEditable) {
            linkColorTable
                .find("td")
                .on("dblclick", function () {
                    $(this).attr("contenteditable", "true").focus();
                })
                .on("focusout", () => {
                    let $this = $(this);
                    $this.attr("contenteditable", "false");

                    this.visuals.microbeTrace.commonService.session.style.linkValueNames[$this.data("value")] = $this.text();

                });
        }
    }

    onColorNodesByChanged() {

        this.commonService.GlobalSettingsModel.SelectedColorNodesByVariable = this.SelectedColorNodesByVariable;


        if (!this.GlobalSettingsNodeColorDialogSettings.isVisible) {

            if (this.SelectedColorNodesByVariable != "None") {
                this.GlobalSettingsNodeColorDialogSettings.setVisibility(true);
                this.cachedGlobalSettingsNodeColorVisibility = this.GlobalSettingsNodeColorDialogSettings.isVisible;

                this.cdref.detectChanges();
            }
        }

        this.commonService.session.style.widgets["node-color-variable"] = this.SelectedColorNodesByVariable;


        if (this.SelectedColorNodesByVariable != "None") {

            this.generateNodeColorTable("#node-color-table");

            this.visuals.microbeTrace.publishUpdateNodeColors();

        }
        else
            this.visuals.microbeTrace.publishUpdateNodeColors();
    }

    generateNodeColorTable(tableId: string, isEditable: boolean = true) {
        let nodeColorTable = $(tableId)
            .empty()
            .append(
                "<tr>" +
                "<th class='p-1' contenteditable>Node " + this.commonService.titleize(this.SelectedColorNodesByVariable) + "</th>" +
                (this.commonService.session.style.widgets["node-color-table-counts"] ? "<th>Count</th>" : "") +
                (this.commonService.session.style.widgets["node-color-table-frequencies"] ? "<th>Frequency</th>" : "") +
                "<th>Color</th>" +
                "<tr>"
            );


        if (!this.commonService.session.style.nodeValueNames)
            this.commonService.session.style.nodeValueNames = {};


        let aggregates = this.commonService.createNodeColorMap();

        let vnodes = this.commonService.getVisibleNodes();

        let aggregateValues = Object.keys(aggregates);

        const disabled = isEditable ? '' : 'disabled';

        aggregateValues.forEach((value, i) => {

            const color = this.visuals.microbeTrace.commonService.temp.style.nodeColorMap(value);

            let colorinput = $(`<input type="color" value="${color}" ${disabled}>`)
                .on("change", (e) => {

                    let $this: any = $(this);
                    let colorValue = $this[0].value;

                    this.visuals.microbeTrace.commonService.session.style.nodeColors.splice(i, 1, colorValue);
                    this.visuals.microbeTrace.commonService.temp.style.nodeColorMap = d3
                        .scaleOrdinal(this.visuals.microbeTrace.commonService.session.style.nodeColors)
                        .domain(aggregateValues);

                    this.visuals.microbeTrace.publishUpdateNodeColors();

                });

            let alphainput = $("<a>⇳</a>").on("click", e => {

                $("#color-transparency-wrapper").css({
                    top: e.clientY + 129,
                    left: e.clientX,
                    display: "block"
                });

                $("#color-transparency")
                    .val(this.visuals.microbeTrace.commonService.session.style.nodeAlphas[i])
                    .one("change", () => {

                        //debugger;
                        let $this: any = $(this);
                        let transparencyValue = $this[0].value;

                        this.visuals.microbeTrace.commonService.session.style.nodeAlphas.splice(i, 1, parseFloat(transparencyValue));
                        this.visuals.microbeTrace.commonService.temp.style.nodeAlphaMap = d3
                            .scaleOrdinal(this.visuals.microbeTrace.commonService.session.style.nodeAlphas)
                            .domain(aggregateValues);
                        $("#color-transparency-wrapper").fadeOut();

                    });
            });

            const nonEditCell = `<td style="background-color:${color}"></td>`;

            let cell = $("<td></td>")
                .append(colorinput)
                .append(alphainput);

            let row = $(
                "<tr>" +
                "<td data-value='" + value + "'>" +
                (this.visuals.microbeTrace.commonService.session.style.nodeValueNames[value] ? this.visuals.microbeTrace.commonService.session.style.nodeValueNames[value] : this.visuals.microbeTrace.commonService.titleize("" + value)) +
                "</td>" +
                (this.visuals.microbeTrace.commonService.session.style.widgets["node-color-table-counts"] ? "<td>" + aggregates[value] + "</td>" : "") +
                (this.visuals.microbeTrace.commonService.session.style.widgets["node-color-table-frequencies"] ? "<td>" + (aggregates[value] / vnodes.length).toLocaleString() + "</td>" : "") +
                "</tr>"
            ).append(isEditable ? cell : nonEditCell);

            nodeColorTable.append(row);
        });

        if (isEditable) {
            nodeColorTable
                .find("td")
                .on("dblclick", function () {
                    $(this).attr("contenteditable", "true").focus();
                })
                .on("focusout", () => {

                    let $this = $(this);
                    $this.attr("contenteditable", "false");

                    //this.visuals.microbeTrace.commonService.session.style.nodeValueNames[$this.data("value")] = $this.find("input").value;

                });
        }
    }

    onLinkThresholdChanged() {

        //debugger;

        this.commonService.GlobalSettingsModel.SelectedLinkThresholdVariable = this.SelectedLinkThresholdVariable;

        this.visuals.microbeTrace.commonService.session.style.widgets["link-threshold"] = parseFloat(this.SelectedLinkThresholdVariable);

        this.visuals.microbeTrace.commonService.setLinkVisibility(true);
        this.visuals.microbeTrace.commonService.tagClusters().then(() => {
            this.visuals.microbeTrace.commonService.setClusterVisibility(true);
            //To catch links that should be filtered out based on cluster size:
            this.visuals.microbeTrace.commonService.setLinkVisibility(true);
            this.visuals.microbeTrace.commonService.setNodeVisibility(true);
            //Because the network isn't robust to the order in which these operations
            //take place, we just do them all silently and then react as though we did
            //them each after all of them are already done.

            this.visuals.microbeTrace.updatedVisualization();

            this.visuals.microbeTrace.commonService.updateStatistics();

        });


    }


    updateGlobalSettingsModel() {

        this.commonService.GlobalSettingsModel.SelectedRevealTypesVariable = this.SelectedRevealTypesVariable;





        this.commonService.GlobalSettingsModel.SelectedNodeColorVariable = this.SelectedNodeColorVariable;
        this.commonService.session.style.widgets['node-color'] = this.SelectedNodeColorVariable;
        this.commonService.session.style.widgets['node-color-variable'] = this.SelectedColorNodesByVariable;
        //this.commonService.session.style.widgets['node-color-variable'] = this.SelectedNodeColorVariable;

        this.commonService.session.style.widgets['link-tooltip-variable'] = this.SelectedColorLinksByVariable;


        this.commonService.GlobalSettingsModel.SelectedColorVariable = this.SelectedColorVariable;
        this.commonService.session.style.widgets['selected-color'] = this.SelectedColorVariable;
        this.commonService.session.style.widgets['selected-node-stroke-color'] = this.SelectedColorVariable;


        this.commonService.GlobalSettingsModel.SelectedBackgroundColorVariable = this.SelectedBackgroundColorVariable;
        this.commonService.session.style.widgets['background-color'] = this.SelectedBackgroundColorVariable;


        this.commonService.GlobalSettingsModel.SelectedApplyStyleVariable = this.SelectedApplyStyleVariable;


    }


    updatedVisualization() {

        this.visuals.microbeTrace.publishUpdateVisualization();

        if (!this.homepageTabs[this.activeTabNdx]) return;

        switch (this.homepageTabs[this.activeTabNdx].label) {
            case "2D Network":

                if (this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef &&
                    this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance) {
                    this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance.render(false);
                }
                break;

            case "3D Network":

                if (this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef &&
                    this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance) {
                    this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance.updateData();
                    this.visuals.microbeTrace.publishUpdateNodeColors();
                    this.homepageTabs[this.visuals.microbeTrace.activeTabNdx].componentRef.instance.updateLinkColors();
                }
                break;

            case "Histogram":


                break;

            case "Table":


                break;

            case "Map":


                break;
        }

    }



    getGlobalSettingsData() {
        this.FieldList = [];

        this.FieldList.push({ label: "None", value: "None" });
        this.commonService.session.data['nodeFields'].map((d, i) => {

            this.FieldList.push(
                {
                    label: this.commonService.capitalize(d.replace("_", "")),
                    value: d
                });

        });


        this.ToolTipFieldList = [];

        this.ToolTipFieldList.push({ label: "None", value: "None" });
        this.commonService.session.data['linkFields'].map((d, i) => {

            this.ToolTipFieldList.push(
                {
                    label: this.commonService.capitalize(d.replace("_", "")),
                    value: d
                });

        });


        this.SelectedLinkSortVariable = this.commonService.GlobalSettingsModel.SelectedLinkSortVariable;
        this.commonService.updateThresholdHistogram();

    }



    getUserRoles() {

        this._userService.getUserForEdit(this.appSession.userId).subscribe(userResult => {

            this.user = userResult.user;

            userResult.roles.map(x => {

                if (x.isAssigned === true) {
                    this.roles.push(x.roleName);
                }
            });

        });
    }


    ngAfterViewInit() {

        let factory = this.cfr.resolveComponentFactory(FilesComponent);
        this.cmpRef = this.targets.first.createComponent(factory);

        this.homepageTabs[0].componentRef = this.cmpRef;

        this.cmpRef.instance.LoadDefaultVisualizationEvent.subscribe((v) => {
            this.loadDefaultVisualization(v);
            this.publishLoadNewData();
        });

        this.setActiveTabProperties();

        this.cdref.detectChanges();
    }


    getLedgerData() {

        this.ledgerOptions = [];
        this.ledgerOptionSelected = [];
        this.ledgerOptionSelectedFlag = true;

        this.showSpinner();

        this.posts = new Array<BlockchainProofHashDto>();
        this.Blockchaindata = new BlockchainProofHashDto();


        this.keenService.getAllBlockchainsByTenantID().subscribe((resA: BlockchainProofHashDto[]) => {
            this.posts = resA.filter(x => x.ledgerName.toLowerCase() === 'ContactTrace'.toLowerCase());

            let ok2Exit = false;

            let getBlockByLedgerIdObservable: Observable<GetAllBlockByBlockchainLedgerIDDto[]>[] = [];

            for (let i = 0; i < this.posts.length; i++) {
                this.posts[i].blockdata = [];
                this.date = new Date(parseInt(this.posts[i].lastUpdated.substring(6, 26)));
                this.posts[i].lastUpdated = this.date.toString();
                this.Blockchaindata = this.posts[i];

                getBlockByLedgerIdObservable.push(this.keenService.getAllBlockByBlockchainLedgerID(
                    this.Blockchaindata.ledgerName,
                    this.Blockchaindata.blockChainProofHashCode,
                    this.Blockchaindata.tenantID,
                    this.Blockchaindata.userID));

            }

            forkJoin(getBlockByLedgerIdObservable).subscribe(results => {
                results.forEach((data: GetAllBlockByBlockchainLedgerIDDto[], index: number) => {
                    this.posts[index].blockdata = data;

                    for (let j = 0; j < this.posts[index].blockdata.length; j++) {

                        this.date = new Date(parseInt(this.posts[index].blockdata[j].blockUpdatedDate.substring(6, 26)));
                        this.posts[index].blockdata[j].blockUpdatedDate = this.date.toString();
                    }

                    if (index == this.posts.length - 1) {
                        ok2Exit = true;

                        this.loadLedgerOptions();
                    }
                })
            },
                error => {
                    console.log("error retrieving posts.");
                },
                () => {

                });

        })

    }

    downloadSelectedBlocks() {

        if (this.ledgerOptionSelected == undefined)
            return;

        /*/
         * Clear all data previously loaded so that we can re-create new outputs.
        /*/
        const homepageTabs = this.homepageTabs;
        this.commonService.resetData();
        this.homepageTabs = homepageTabs;

        this.downloadedBlocks = [];

        this.ledgerOptionSelected.forEach((block, i) => {

            if (block.data) {
                if (this.downloadedBlocks.findIndex(x => x == block.data.blockName) == -1) {
                    this.downloadedBlocks.push(block.data.blockName);
                    const isNodeList: boolean = block.label.includes('nodelist');
                    this.downloadLedgerBlock(block.data, block.data.ledgerName, isNodeList)
                }
            }

        });
    }


    convertToCSV(objArray) {

        let tmpArray = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        let headerLoaded = false;
        let line = '';


        for (var i = 0; i < tmpArray.length; i++) {
            line = '';

            if (headerLoaded == false) {
                for (let index1 in tmpArray[i]) {
                    if (line != '') line = line.toString() + ','

                    line = line.toString() + index1.toString().replace(/\r/g, '').replace(/\n/g, '').trim();
                }

                str = str.toString() + line.toString() + '\r\n';

                headerLoaded = true;
            }
            line = '';

            for (let index2 in tmpArray[i]) {
                if (line != '') line = line.toString() + ','

                line = line.toString() + tmpArray[i][index2].toString();
            }

            if (line != "") {
                str = str.toString() + line.toString().replace(/\r/g, '').replace(/\r/g, '').trim() + (i == tmpArray.length - 1 ? '' : '\r\n');
            }
        }

        return str;
    }

    downloadLedgerBlock(item: DownloadFilteredBlockDto, ledgerId, isNodeList: boolean): void {
        const filteredWrappers = this.bpaaSPayloadWrappers.filter(x => x.BlockName &&  x.BlockName.toLowerCase() === item.blockName.toLowerCase());

        const detailRows = _.flatten(filteredWrappers.map(x => x.BpaaSPayload.Data))

        let blob: any = new Blob([JSON.stringify(detailRows)], { type: 'text/plain' });
        blob.lastModifiedDate = new Date();
        blob.name = (item.blockName + ".json");


        var file: File = <File>blob;

        this.getSinglefileContent(file);

        abp.notify.success("Ledger block successfully downloaded.");
        this.hideSpinner();

    }

    showSpinner() {
        this.spinnerDivElement.nativeElement.style.display = "block";
        this.spinnerElement.nativeElement.style.display = "block";
    }

    hideSpinner() {
        this.spinnerDivElement.nativeElement.style.display = "none";
        this.spinnerElement.nativeElement.style.display = "none";
    }


    public loadLedgerOptions() {

        this.BlockChainLedgerNodeList = [];
        this.BlockChainLedgerEdgeList = [];
        this.ledgerOptions = [];

        let postCount = this.posts.length;
        let loadedAny: boolean = false;
        let observableFilterBlocks: { post: BlockchainProofHashDto, ob: Observable<OutputDownloadFilteredBlock> }[] = [];

        const endLoadBadly = () => {
            this.hideSpinner();
            abp.notify.warn("Your role(s) do not allow access to a ledger.  See your administrator to grant you roles to access a ledger.");
        }

        const endLoadNoData = () => {
            this.hideSpinner();
            abp.notify.warn("No data was loaded");
        }
    }

    public loadDefaultVisualization(e: string) {

        e = e.replace("_", " ");
        this.Viewclick(e);
    }

    public getfileContent(fileList: FileList) {

        this.homepageTabs.map(x => {
            if (x.tabTitle === "MicrobeTrace Next Files") {
                if (x.componentRef != null) {
                    x.componentRef.instance.processFiles(fileList);
                }
            }
        });
    }

    public getSinglefileContent(file: File) {

        this.homepageTabs.map(x => {
            if (x.tabTitle === "MicrobeTrace Next Files") {
                if (x.componentRef != null) {
                    x.componentRef.instance.processFile(file);
                }
            }
        });
    }

    public onPanelHide($event) {
        console.log($event);
    }

    public onClickChildOptionContainer($event) {

    }

    public onClickChildOptionChecbox($event) {

    }

    public onChangeChildOptionCheckbox($event) {

    }

    DisplayHelp() {
        window.open("https://github.com/CDCgov/MicrobeTrace/wiki");
    }

    DisplayAbout() {
        this.displayAbout = !this.displayAbout;
    }


    DisplayLedgerLoaderDialog(ledgerLoaderAction: string = "") {
        switch (ledgerLoaderAction) {
            case "Load": {
                this.downloadSelectedBlocks();
                break;
            }
            default: {
                this.getLedgerData();
            }
        }

        this.ToggleDisplayLedgerLoaderDialog();

    }

    ToggleDisplayLedgerLoaderDialog() {
        this.displayLedgerLoaderDialog = !this.displayLedgerLoaderDialog;
    }

    DisplayStashDialog(saveStash: string) {
        switch (saveStash) {
            case "Save": {

                const lightTabs: HomePageTabItem[] = this.homepageTabs.map(x => {
                    return {
                        label: x.label,
                        tabTitle: x.tabTitle,
                        isActive: x.isActive,
                        componentRef: undefined,
                        templateRef: undefined
                    }
                });

                const stash: StashObjects = {
                    session: this.visuals.microbeTrace.commonService.session,
                    tabs: lightTabs
                };

                const blob = new Blob([JSON.stringify(stash)], { type: "application/json;charset=utf-8" });
                saveAs(blob, `${this.saveFileName}.microbetracenext`);
                break;
            }
            case "Cancel": {

                break;
            }
        }
        this.displayStashDialog = !this.displayStashDialog;
    }

    ResetTabs() {
        const home = this.homepageTabs.find(x => x.tabTitle === "MicrobeTrace Next Files");
        home.isActive = true;
        this.homepageTabs = this.homepageTabs.filter(x => home === x);
        this.homepageTabs = [home];

        this.activeTabIndex = 0;
    }

    NewSession() {
        this.visuals.filesPlugin.removeAllFiles();

        this.ResetTabs();

        this.commonService.reset();

        this.onReloadScreen();
    }

    OpenStashFiles(stashFile: FileList) {
        // console.log(stashFile);

        const files: File[] = Array.from(stashFile);

        if (files.length > 0) {

            const extension = files[0].name.split('.').pop().toLowerCase();

            let reader = new FileReader();
            reader.onloadend = out => {
                if (out && out.target) {
                    this.OpenStash((<any>out.target).result);
                }
            }
            reader.readAsText(files[0], 'UTF-8');
        }
    }

    OpenStash(sessionData: string) {
        if (sessionData) {
            const sessionObject: StashObjects = JSON.parse(sessionData);
            if (sessionObject) {

                //ResetFiles
                this.visuals.filesPlugin.removeAllFiles();

                this.visuals.microbeTrace.commonService.session = sessionObject.session;

                //Reset Tabs
                this.ResetTabs();

                //Load Tabs
                for (let index = 1; index < sessionObject.tabs.length; ++index) {
                    if (this.homepageTabs.find(x => x.label === sessionObject.tabs[index].label) === undefined) {
                        this.addTab(sessionObject.tabs[index].label, sessionObject.tabs[index].label + index, index, false);
                    }
                }

                if (sessionObject.session.files) {
                    sessionObject.session.files.forEach(file => {
                        this.visuals.filesPlugin.addToTable(file);
                    })
                }

                this.homepageTabs[0].isActive = true;

                this.loadSettings();
            }
        }
    }

    DisplayRecallStashDialog(recallStash: string) {
        switch (recallStash) {
            case "Recall": {
                this._userService.getUserForEdit(this.appSession.userId).subscribe(userResult => {
                    const email: string = userResult.user.emailAddress;
                    this.visuals.microbeTrace.commonService.localStorageService.getItem("stash-" + email, (err, sessionData) => {
                        if (sessionData) {
                            const sessionObject: StashObjects = JSON.parse(sessionData);
                            if (sessionObject) {
                                this.visuals.microbeTrace.commonService.session = sessionObject.session;

                                //Load Tabs
                                sessionObject.tabs.forEach(loadedTab => {
                                    if (this.homepageTabs.find(x => x.label === loadedTab.label) === undefined) {
                                        this.Viewclick(loadedTab.label);
                                    }
                                })

                                this.loadSettings();

                                this.homepageTabs.forEach(tab => {
                                    if (tab.componentRef &&
                                        tab.componentRef.instance.onRecallSession) {
                                        tab.componentRef.instance.onRecallSession();
                                    }
                                })

                            }
                        }
                    });

                });

                break;
            }
            case "Cancel": {

                break;
            }
            case "Delete": {

                break;
            }
        }
        this.displayRecallStashDialog = !this.displayRecallStashDialog;
    }

    FileClick(actionName: any) {
        switch (actionName) {
            case "New Session": {
                this.NewSession();
                break;
            }
            case "Recall Session": {
                this.DisplayRecallStashDialog("Cancel");
                break;
            }
            case "Save Session": {
                this.DisplayStashDialog("Cancel");
                break;
            }
            case "Add Ledger Data": {
                this.DisplayLedgerLoaderDialog();
                break;
            }

        }
    }

    SettingsClick(actionName: any) {
        switch (actionName) {
            case "Global Settings": {
                this.DisplayGlobalSettingsDialog();
                break;
            }

        }
    }

    GetComponentTypeByName(viewName: string) {
        let _type: any = null;

        switch (viewName) {

            case "2D Network": {
                _type = TwoDComponent;
                break;
            }
            case "3D Network": {
                _type = ThreeDComponent;
                break;
            }
            case "Histogram": {
                _type = HistogramComponent;
                break;
            }
            case "Table": {
                _type = TableComponent;
                break;
            }
            case "Aggregation": {
                _type = AggregationComponent;
                break;
            }
            case "Bubbles": {
                _type = BubblesComponent;
                break;
            }
            case "Flow Diagram": {
                _type = FlowDiagramComponent;
                break;
            }
            case "Scatterplot": {
                _type = ScatterPlotComponent;
                break;
            }
            case "Waterfall": {
                _type = WaterfallComponent;
                break;
            }
            case "Map": {
                _type = MapComponent;
                break;
            }
            case "Gantt": {
                _type = GanttComponent;
                break;
            }
            case "Timeline": {
                _type = TimelineComponent;
                break;
            }
            case "Heatmap": {
                _type = HeatMapComponent;
                break;
            }
            case "Phylogenetic Tree": {
                _type = PhylogeneticComponent;
                break;
            }
        }

        return _type;
    }

    Viewclick(viewName: string) {

        let tabNdx = this.homepageTabs.findIndex(x => x.label == viewName);

        /*/
         * Don't allow duplicate tabs to get added.
        /*/
        if (tabNdx == -1) {

            this.activeTabIndex = this.activeTabIndex + 1;

            this.addTab(viewName, viewName + this.activeTabIndex, this.activeTabIndex);

            setTimeout(() => {

                let _type: any = this.GetComponentTypeByName(viewName);

                let factory = this.cfr.resolveComponentFactory(_type);
                this.cmpRef = this.targets.last.createComponent(factory)

                tabNdx = this.homepageTabs.findIndex(x => x.label == viewName);
                this.homepageTabs[tabNdx].componentRef = this.cmpRef;
                this.tabView.tabs[tabNdx].selected = true;

                this.cmpRef.instance.DisplayGlobalSettingsDialogEvent.subscribe((v) => { this.DisplayGlobalSettingsDialog(v) });

                this.setActiveTabProperties();
            });
        }
        else {
            const tabWithoutComponentRef: HomePageTabItem | undefined = this.homepageTabs.find(x => x.label == viewName && x.componentRef != undefined);

            if (!tabWithoutComponentRef) {
                /*
                setTimeout(() => {

                    let _type: any = this.GetComponentTypeByName(viewName);

                    let factory = this.cfr.resolveComponentFactory(_type);
                    this.cmpRef = this.targets.last.createComponent(factory)

                    tabNdx = this.homepageTabs.findIndex(x => x.label == viewName);
                    this.homepageTabs[tabNdx].componentRef = this.cmpRef;
                    this.tabView.tabs[tabNdx].selected = true;

                    this.cmpRef.instance.DisplayGlobalSettingsDialogEvent.subscribe((v) => { this.DisplayGlobalSettingsDialog(v) });

                    this.setActiveTabProperties();
                });
                */
            }
            else {
                this.tabView.tabs.map(x => {

                    x.selected = false;
                    if (x.header.includes(viewName, 0) == true) {
                        x.selected = true;
                    }

                });

                this.setActiveTabProperties();
                this.loadSettings();

            }
        }

        const foundTab = this.homepageTabs.find(x => x.label == viewName);

        if (foundTab && foundTab.componentRef &&
            foundTab.componentRef.instance.loadSettings) {
            foundTab.componentRef.instance.loadSettings();
        }


    }

    DisplayGlobalSettingsDialog(activeTab = "Styling") {

        this.visuals.microbeTrace.getGlobalSettingsData();

        this.visuals.microbeTrace.GlobalSettingsDialogSettings.setVisibility(true);
        this.cachedGlobalSettingsVisibility = this.GlobalSettingsDialogSettings.isVisible;


        this.visuals.microbeTrace.commonService.updateThresholdHistogram();

        this.globalSettingsTab.tabs[activeTab === "Styling" ? 1 : 0].active = true;
    }


    WindowClick(actionName: any) {
        switch (actionName) {
            case "Phylogeography Mode": {

                break;
            }
            case "Reload Screen": {

                this.onReloadScreen();

                this.homepageTabs.forEach(tab => {
                    if (tab.componentRef &&
                        tab.componentRef.instance.openRefreshScreen) {
                        tab.componentRef.instance.openRefreshScreen();
                    }
                })
                break;
            }
        }
    }

    HelpClick(actionName: any) {
        switch (actionName) {
            case "Help": {
                this.DisplayHelp();
                break;
            }
            case "About": {
                this.DisplayAbout();
                break;
            }
        }
    }

    setActiveTabProperties(tabNdx: number = -1) {

        if (tabNdx === -1) tabNdx = this.tabView.tabs.findIndex(x => x.selected == true);

        let activeComponentName: string = this.homepageTabs[tabNdx].label;

        this.homepageTabs.forEach((item: HomePageTabItem) => {
            item.isActive = item.label === activeComponentName;
        });



        switch (activeComponentName) {

            case "MicrobeTrace Next Files": {

                this.showSettings = true;
                this.showExport = false;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                this.cachedGlobalSettingsVisibility = this.GlobalSettingsDialogSettings.isVisible;
                this.cachedGlobalSettingsLinkColorVisibility = this.GlobalSettingsLinkColorDialogSettings.isVisible;
                this.cachedGlobalSettingsNodeColorVisibility = this.GlobalSettingsNodeColorDialogSettings.isVisible;
                this.GlobalSettingsDialogSettings.setVisibility(false);
                this.GlobalSettingsLinkColorDialogSettings.setVisibility(false);
                this.GlobalSettingsNodeColorDialogSettings.setVisibility(false);

                break;
            }
            case "2D Network": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = true;
                this.showPinAllNodes = true;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "3D Network": {
                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = true;
                this.showButtonGroup = false;
                this.showSorting = false;


                break;
            }
            case "Histogram": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Table": {

                this.showSettings = false;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = true;
                this.showSorting = true;

                break;
            }
            case "Aggregation": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Bubbles": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;


                break;
            }
            case "Flow Diagram": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Scatterplot": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Waterfall": {

                this.showSettings = false;
                this.showExport = false;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Map": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = true;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Gantt": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Heatmap": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = false;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
            case "Phylogenetic Tree": {

                this.showSettings = true;
                this.showExport = true;
                this.showCenter = true;
                this.showPinAllNodes = false;
                this.showRefresh = false;
                this.showButtonGroup = false;
                this.showSorting = false;

                break;
            }
        }

        if (activeComponentName !== "MicrobeTrace Next Files" && this.previousTab === "MicrobeTrace Next Files") {
            this.GlobalSettingsDialogSettings.setVisibility(this.cachedGlobalSettingsVisibility);
            this.GlobalSettingsLinkColorDialogSettings.setVisibility(this.cachedGlobalSettingsLinkColorVisibility);
            this.GlobalSettingsNodeColorDialogSettings.setVisibility(this.cachedGlobalSettingsNodeColorVisibility);
        }

        if (!this.homepageTabs[tabNdx].componentRef) {
            setTimeout(() => {

                let _type: any = this.GetComponentTypeByName(activeComponentName);

                let factory = this.cfr.resolveComponentFactory(_type);

                const viewContainerRef = this.targets.filter((element, index) => index === tabNdx);

                if (viewContainerRef.length > 0) {

                    this.cmpRef = viewContainerRef[0].createComponent(factory);
                }

                tabNdx = this.homepageTabs.findIndex(x => x.label == activeComponentName);
                this.homepageTabs[tabNdx].componentRef = this.cmpRef;
                this.tabView.tabs[tabNdx].selected = true;

                this.cmpRef.instance.DisplayGlobalSettingsDialogEvent.subscribe((v) => { this.DisplayGlobalSettingsDialog(v) });

                this.homepageTabs[tabNdx].componentRef.instance.InitView();
                this.homepageTabs[tabNdx].componentRef.instance.onRecallSession();

            });
        } else {
            this.homepageTabs[tabNdx].componentRef.instance.InitView();
        }

        this.previousTab = activeComponentName;
    }

    openSettings(tabNdx: any): void {

        this.activeTabNdx = tabNdx;
        this.homepageTabs[tabNdx].componentRef.instance.openSettings();

    }

    openExport(tabNdx: any): void {
        this.homepageTabs[tabNdx].componentRef.instance.openExport();
    }

    openCenter(tabNdx: any): void {

        this.homepageTabs[tabNdx].componentRef.instance.openCenter();

    }

    openPinAllNodes(tabNdx: any): void {
        this.homepageTabs[tabNdx].componentRef.instance.openPinAllNodes();
    }

    openRefreshScreen(tabNdx: any): void {
        this.homepageTabs[tabNdx].componentRef.instance.openRefreshScreen();
    }

    openSelectDataSetScreen(tabNdx: any, e: any): void {
        this.homepageTabs[tabNdx].componentRef.instance.openSelectDataSetScreen(e.option.value.toString().toLowerCase());
    }



    removeTab(e: any) {
        if (e.index > 0) {

            this.homepageTabs.splice(e.index, 1);

            if (e.index == this.homepageTabs.length - 1) {
                this.tabView.activeIndex = this.homepageTabs.length;
            } else {
                this.tabView.activeIndex = this.homepageTabs.length - 1;
            }

            this.setActiveTabProperties();
        }
    }

    addTab(tabLabel: any, tabTitle: any, tabPosition: any, activate: boolean = true): void {

        /*/
         * Ensure that all tabs are not selected before we set the next new tab.
         * This will ensure that the newly created component appears on the currently selected tab, 
         * which will be the newly added tab array element.
        /*/
        this.homepageTabs.map(x => {

            x.isActive = false;
        });

        this.tabView.tabs.map(x => {

            x.selected = false;
        });

        this.activeTabIndex = tabPosition;
        this.homepageTabs.splice(tabPosition, 0, {
            label: tabLabel,
            templateRef: null,
            tabTitle: tabTitle,
            isActive: activate,
            componentRef: null
        });

    }

    clearTable(tableId) {
        let linkColorTable = $(tableId).empty();
    }

    onReloadScreen() {
        this.commonService.session.style.widgets = this.commonService.defaultWidgets();

        this.loadSettings();
    }

    loadSettings() {
        //Filtering|Prune With
        this.SelectedPruneWityTypesVariable = this.visuals.microbeTrace.commonService.session.style.widgets["link-show-nn"] ? "Nearest Neighbor" : "None";
        this.onPruneWithTypesChanged();

        //Filtering|Minimum Cluster Size
        this.SelectedClusterMinimumSizeVariable = this.visuals.microbeTrace.commonService.session.style.widgets["cluster-minimum-size"];
        this.onMinimumClusterSizeChanged();

        //Filtering|Filter Links on
        this.SelectedLinkSortVariable = this.visuals.microbeTrace.commonService.session.style.widgets["link-sort-variable"];
        this.onLinkSortChanged();

        //Filtering|Filtering Threshold
        this.SelectedLinkThresholdVariable = this.visuals.microbeTrace.commonService.session.style.widgets["link-threshold"];
        this.onLinkThresholdChanged();


        //Styling|Color Nodes By
        this.SelectedColorNodesByVariable = this.visuals.microbeTrace.commonService.session.style.widgets["node-color-variable"];
        this.onColorNodesByChanged();

        //Styling|Nodes
        this.SelectedNodeColorVariable = this.visuals.microbeTrace.commonService.session.style.widgets["node-color"];
        this.onNodeColorChanged();

        //Styling|Color Links By
        this.SelectedColorLinksByVariable = this.visuals.microbeTrace.commonService.session.style.widgets['link-color-variable'];
        this.onColorLinksByChanged();

        //Styling|Link Color Table

        //Styling|Selected
        this.SelectedColorVariable = this.visuals.microbeTrace.commonService.session.style.widgets['selected-color'];

        //Styling|Background
        this.SelectedBackgroundColorVariable = this.visuals.microbeTrace.commonService.session.style.widgets['background-color'];
        this.onBackgroundChanged();

        this.updateGlobalSettingsModel();
    }

    publishLoadNewData() {
        this.homepageTabs.forEach(tab => {
            if (tab.componentRef &&
                tab.componentRef.instance.onLoadNewData) {
                tab.componentRef.instance.onLoadNewData();
            }
        })
    }

    publishFilterDataChange() {
        this.homepageTabs.forEach(tab => {
            if (tab.componentRef &&
                tab.componentRef.instance.onFilterDataChange) {
                tab.componentRef.instance.onFilterDataChange();
            }
        })
    }

    ngOnDestroy(): void {
        this.NewSession();
    }
}

class BpaaSPayloadWrapper {
    public BlockHashCode: string | undefined = undefined;
    public BlockName: string | undefined = undefined;
    public BpaaSPayload: BpaaSPayloadWrapperData | undefined = undefined;
    public FuzzyMatchRatios: string | undefined = undefined;

}

class BpaaSPayloadWrapperData {
    public Type: string | undefined = undefined;
    public SubType: 'Edgelist' | 'Nodelist' | undefined = undefined;
    public JurisdictionKey: number | undefined = undefined;
    public JurisdictionName: string | undefined = undefined;
    public Jurisdiction: string | undefined = undefined;
    public FileName: string | undefined = undefined;
    public Data: any[] = [];
}
