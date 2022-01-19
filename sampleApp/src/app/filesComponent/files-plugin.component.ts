import { Injector, Component, Output, OnChanges, SimpleChange, EventEmitter, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AppUiCustomizationService } from '@shared/common/ui/app-ui-customization.service';
import { CommonService } from '../contactTraceCommonServices/common.service';
import * as XLSX from 'xlsx';
import * as Papa from 'papaparse';
import * as saveAs from 'file-saver';
import * as fileto from 'fileto';
import * as JSZip from 'jszip';
import * as alignmentViewer from 'alignment-viewer';
import * as tn93 from 'tn93';
import * as patristic from 'patristic';
import { window } from 'ngx-bootstrap';
import * as _ from 'lodash';
import { MicrobeTraceNextVisuals } from '../microbe-trace-next-plugin-visuals';


@Component({
    selector: 'FilesComponent',
    templateUrl: './files-plugin.component.html',
    styleUrls: ['./files-plugin.component.less']
})

export class FilesComponent extends AppComponentBase implements OnInit {

    @Output() LoadDefaultVisualizationEvent = new EventEmitter();


    SelectedDefaultDistanceMetricVariable: string = "tn93";
    SelectedAmbiguityResolutionStrategyVariable: string = "AVERAGE";
    SelectedAmbiguityThresholdVariable: any = 0.015;
    SelectedDefaultDistanceThresholdVariable: any = 0.015;
    SelectedDefaultViewVariable: string = "2D Network";
    SelectedGenerateNumberVariable: any = 100;

    DirectionalityTypes: any = [
        { label: 'Off', value: 'Off' },
        { label: 'Inferred', value: 'Inferred' }
    ];
    SelectedDirectionalityTypeVariable: string = "Off";

    TriangulationTypes: any = [
        { label: 'Off', value: 'Off' },
        { label: 'On', value: 'On' }
    ];
    SelectedTriangulationTypeVariable: string = "Off";

    AutostashingTypes: any = [
        { label: 'Off', value: 'Off' },
        { label: 'On', value: 'On' }
    ];
    SelectedAutostashingTypeVariable: string = "Off";


    AlignTypes: any = [
        { label: 'None', value: 'None' },
        { label: 'Smith-Waterman', value: 'Smith-Waterman' }
    ];
    SelectedAlignTypeVariable: string = "None";


    ReferenceTypes: any = [
        { label: 'LoadFrom FASTA', value: 'LoadFrom FASTA' },
        { label: 'First Sequence', value: 'First Sequence' },
        { label: 'Consensus', value: 'Consensus' }
    ];
    SelectedReferenceTypeVariable: string = "LoadFrom FASTA";

    SelectedRefSeqFileLoadVariable: string = "";


    RefSeqIDTypes: any = [

    ];
    SelectedRefSeqIDVariable: string = "";

    SelectedAlignerMatchVariable: any = "1";
    SelectedAlignerMismatchVariable: any = 1;
    SelectedAlignerGapOVariable: any = 5;
    SelectedAlignerGapEVariable: any = 2;

    IsReferenceSourceSelected: boolean = false;
    IsReferenceOptionsSelected: boolean = true;
    SelectedAuditEmptyVariable: boolean = true;
    SelectedAuditGapsVariable: boolean = true;
    SelectedAuditRNAVariable: boolean = true;
    SelectedAuditAminoAcidsVariable: boolean = true;
    SelectedAuditCIGARVariable: boolean = true;
    SelectedAuditMalformedVariable: boolean = true;

    IsDataAvailable: boolean = false;
    messages: any[];
    displayFileSettings: boolean = false;
    displaySequenceSettings: boolean = false;
    displayloadingInformationModal: boolean = false;

    nodeIds: { fileName: string; ids: string[] }[] = [];
    edgeIds: { fileName: string; ids: { source: string; target: string }[] }[] = [];

    uniqueNodes: string[] = [];
    uniqueEdgeNodes: string[] = [];

    private visuals: MicrobeTraceNextVisuals;

    constructor(
        injector: Injector,
        public commonService: CommonService) {

        super(injector);

        this.visuals = commonService.visuals;
        this.visuals.filesPlugin = this;
    }

    ngOnInit() {

        this.RefSeqIDTypes.push(
            { label: 'Pol', value: this.commonService.HXB2.substr(2000, 2100) });

        this.RefSeqIDTypes.push(
            { label: 'Complete', value: this.commonService.HXB2 });


        this.commonService.LoadViewEvent.subscribe((v) => { this.loadDefaultVisualization(v); });
        this.commonService.session.data.reference = this.commonService.HXB2.substr(2000, 2100);


        $('.alignConfigRow').hide();

        $('#align-sw').parent().on('click', () => {

            this.commonService.session.style.widgets['align-sw'] = true;
            this.commonService.session.style.widgets['align-none'] = false;
            $('.alignConfigRow, #reference-file-row').slideDown();
            $('#alignment-preview').slideUp(function () {

                //debugger;

                $(this).empty().show();
            });
        });

        $('#align-none').parent().on('click', () => {

            this.commonService.session.style.widgets['align-sw'] = false;
            this.commonService.session.style.widgets['align-none'] = true;
            $('.alignConfigRow, #reference-file-row').slideUp();
            $('#alignment-preview').slideUp(function () {

                //debugger;

                $(this).empty().show();
            });
        });

        $('#reference-source-file').parent().on('click', () => {

            //debugger;

            this.commonService.session.style.widgets['reference-source-file'] = true;
            this.commonService.session.style.widgets['reference-source-first'] = false;
            this.commonService.session.style.widgets['reference-source-consensus'] = false;
            this.commonService.session.data.reference = $('#refSeqID').val().toString();

            //debugger;

            if (!this.commonService.session.style.widgets['align-none']) $('#reference-file-row').slideDown();
        });

        $('#reference-source-first').parent().on('click', () => {
            this.commonService.session.style.widgets['reference-source-file'] = false;
            this.commonService.session.style.widgets['reference-source-first'] = true;
            this.commonService.session.style.widgets['reference-source-consensus'] = false;
            $('#reference-file-row').slideUp();
        });

        $('#reference-source-consensus').parent().on('click', () => {
            this.commonService.session.style.widgets['reference-source-file'] = false;
            this.commonService.session.style.widgets['reference-source-first'] = false;
            this.commonService.session.style.widgets['reference-source-consensus'] = true;
            $('#reference-file-row').slideUp();
        });

        $('#reference-file-row').hide();

        $('#refSeqFileLoad').on('change', () => {

            //debugger;

            const file = this.commonService.session.files[0];   //this.files[0];
            let reader = new FileReader();
            reader.onloadend = (e: any) => {
                if (e.target.readyState == FileReader.DONE) {
                    this.commonService.parseFASTA(e.target.result).then(nodes => {
                        $('#refSeqID')
                            .html(nodes.map((d, i) => `
                                <option value="${this.commonService.filterXSS(d.seq)}" ${i == 0 ? "selected" : ""}>${this.commonService.filterXSS(d.id)}</option>
                              `))
                            .trigger('change');
                    });
                    $('label[for="refSeqFileLoad"]').text(this.commonService.filterXSS(file.name));
                }
            };
            reader.readAsText(file);
        });

        $('#refSeqID').html(`
          <option value="${this.commonService.HXB2.substr(2000, 2100)}" selected>Pol</option>
          <option value="${this.commonService.HXB2}">Complete</option>
        `).on('change', (e) => {

            //debugger;
            this.commonService.session.data.reference = e.data;// this.value;

        });

        $('#alignment-preview').on('click', () => {
            this.readFastas().then(data => {
                if (this.commonService.session.style.widgets['reference-source-first']) {

                    //debugger;

                    this.commonService.session.data.reference = ""; //nodes[0].seq;
                }
                if (this.commonService.session.style.widgets['reference-source-consensus']) {
                    this.commonService.computeConsensus().then(consensus => this.commonService.session.data.reference = consensus);
                }
                this.updatePreview(data);
            });
        });

        let auditBlock = $('#audited-sequences');

        const logAudit = (parentContext, id, type) => {
            let match = auditBlock.find(`[data-id="${id}"]`);
            let button = $(`<button class="btn btn-warning btn-sm audit-exclude" data-id="${id}">Exclude</button>`).on('click', function () {
                let thi$ = $(this);
                const id = thi$.data('id');
                if (thi$.text() == 'Exclude') {
                    parentContext.commonService.session.data.nodeExclusions.push(id);
                    thi$.removeClass('btn-warning').addClass('btn-success').text('Include');
                } else {
                    parentContext.commonService.session.data.nodeExclusions.splice(parentContext.commonService.session.data.nodeExclusions.indexOf(id), 1);
                    thi$.removeClass('btn-success').addClass('btn-warning').text('Exclude');
                }
            });
            let row = $(`<div class="alert alert-warning w-100 d-flex justify-content-between" role="alert"><span>${id} appears to be ${type}.</span></div>`);
            row.append(button);
            auditBlock.append(row);
        };

        $('#audit-launcher').on('click', () => {
            this.readFastas().then(data => {
                const start = Date.now();
                const isGaps = /^-+$/;
                const isRNA = /^[ACGURYMKWSBDHVN-]+$/;
                const isAA = /^[ARNDCQEGHILKMFPSTWYVBZN]+$/;
                const isDNA = /^[ACGTRYMKWSBDHVN-]+$/;
                const isCIGAR = /^[0-9MIDNSHP=X]+$/;
                const isMalformed = /[^ACGTURYMKWSBDHVNQEILFPZX0-9-]+/;
                const checkEmpty = $('#audit-empty').is(':checked');
                const checkGaps = $('#audit-gaps').is(':checked');
                const checkRNA = $('#audit-RNA').is(':checked');
                const checkAA = $('#audit-amino-acids').is(':checked');
                const checkCIGAR = $('#audit-CIGAR').is(':checked');
                const checkMalformed = $('#audit-malformed').is(':checked');
                let any = false;
                data.forEach(d => {
                    const seq = d.seq, id = d.id;
                    if (checkEmpty && seq == '') logAudit(this, id, 'empty');
                    if (checkGaps && isGaps.test(seq)) logAudit(this, id, 'all gaps')
                    if (checkRNA && isRNA.test(seq) && !isGaps.test(seq)) logAudit(this, id, 'RNA');
                    if (checkAA && isAA.test(seq) && !isDNA.test(seq)) logAudit(this, id, 'amino acids');
                    if (checkCIGAR && isCIGAR.test(seq)) logAudit(this, id, 'a CIGAR');
                    if (checkMalformed && isMalformed.test(seq)) logAudit(this, id, 'malformed');
                });
                console.log('Sequence Auditing time:', (Date.now() - start).toLocaleString(), 'ms');
            });
        });

        $('#audit-toggle-all').on('click', () => {
            $('.audit-exclude').trigger('click');
        });

        $('#default-distance-metric').change((e) => {

            //debugger;

            const lsv = e.data; //this.value;
            this.commonService.localStorageService.setItem('default-distance-metric', lsv);
            $('#default-distance-metric').val(lsv);
            if (lsv == 'snps') {
                $('#ambiguities-row').slideUp();
                $('#default-distance-threshold, #link-threshold')
                    .attr('step', 1)
                    .val(16);
                this.commonService.session.style.widgets["link-threshold"] = 16;
            } else {
                $('#ambiguities-row').slideDown();
                $('#default-distance-threshold, #link-threshold')
                    .attr('step', 0.001)
                    .val(0.015);
                this.commonService.session.style.widgets["link-threshold"] = 0.015;
            }
            this.commonService.session.style.widgets['default-distance-metric'] = lsv;
        });

        let cachedLSV = "";
        this.commonService.localStorageService.getItem('default-distance-metric', (result) => {
            cachedLSV = result;

            if (cachedLSV) {
                $('#default-distance-metric').val(cachedLSV).trigger('change');
            }
        });



        $('#ambiguity-resolution-strategy').on('change', (e) => {

            //debugger;

            const v = e.data; //this.value;
            this.commonService.session.style.widgets['ambiguity-resolution-strategy'] = v;
            if (v == 'HIVTRACE-G') {
                $('#ambiguity-threshold-row').slideDown();
            } else {
                $('#ambiguity-threshold-row').slideUp();
            }
        }).change();

        $('#ambiguity-threshold').on('change', (e) => {

            //debugger;

            const v = e.data; //this.value;
            this.commonService.session.style.widgets['ambiguity-threshold'] = v;
        });

        let cachedView = "";
        this.commonService.localStorageService.getItem('default-view', (result) => {
            cachedView = result;
        });

        $('#default-view')
            .on('change', (e) => {

                //debugger;

                const v = e.data;// this.value;
                this.commonService.localStorageService.setItem('default-view', v);
                this.commonService.session.style.widgets['default-view'] = v;
                this.commonService.session.layout.content[0].type = v;
            })
            .val(cachedView ? cachedView : this.commonService.session.style.widgets['default-view'])
            .trigger('change');

        //$('#generate-sequences').on('click', () => {
        //    $('#file-prompt').remove();
        //    $('#launch').prop('disabled', false).focus();
        //    this.processFile(new File([Papa.unparse(this.commonService.generateSeqs('gen-' + this.commonService.session.meta.readyTime + '-', parseFloat($('#generate-number').val().toString()), 20))], 'generatedNodes.csv'));
        //});

        $('#infer-directionality-false').parent().on('click', () => {

            //debugger;

            this.commonService.session.style.widgets['infer-directionality-false'] = true;
        });

        $('#infer-directionality').parent().on('click', () => {

            //debugger;

            this.commonService.session.style.widgets['infer-directionality-false'] = false;
        });

        $('#triangulate-false').parent().on('click', () => {

            //debugger;

            this.commonService.session.style.widgets['triangulate-false'] = true;
        });

        $('#triangulate').parent().on('click', () => {

            //debugger;

            this.commonService.session.style.widgets['triangulate-false'] = false;
        });

        $('#stash-auto-yes').parent().on('click', () => {

            //debugger;

            this.commonService.localStorageService.setItem('stash-auto', 'true');
        });

        if (localStorage.getItem('stash-auto') == 'true') {
            $('#stash-auto-yes').parent().trigger('click');
        }

        $('#stash-auto-no').parent().on('click', () => {

            //debugger;

            if (this.commonService.temp.autostash) clearInterval(this.commonService.temp.autostash.interval);
            this.commonService.localStorageService.setItem('stash-auto', 'false');
        });

    }


    toglleAll() {

        this.SelectedAuditEmptyVariable = !this.SelectedAuditEmptyVariable;
        this.SelectedAuditGapsVariable = !this.SelectedAuditGapsVariable;
        this.SelectedAuditRNAVariable = !this.SelectedAuditRNAVariable;
        this.SelectedAuditAminoAcidsVariable = !this.SelectedAuditAminoAcidsVariable;
        this.SelectedAuditCIGARVariable = !this.SelectedAuditCIGARVariable;
        this.SelectedAuditMalformedVariable = !this.SelectedAuditMalformedVariable;
    }

    run() {

    }


    InitView() {
        this.IsDataAvailable = (this.commonService.session.data.nodes.length == 0 ? false : true);
    }


    changeDefaultView(e) {

        const v = e.target.selectedOptions[0].innerText;
        this.commonService.localStorageService.setItem('default-view', v);
        this.commonService.session.style.widgets['default-view'] = v;
        this.commonService.session.layout.content[0].type = v;
    }

    openSettings() {
        this.displayFileSettings = !this.displayFileSettings;
    }

    openExport() {

    }

    openCenter() {

    }

    openPinAllNodes() {


    }

    openRefreshScreen() {

    }

    openSelectDataSetScreen() {

    }


    showSequenceSettings() {
        this.displaySequenceSettings = !this.displaySequenceSettings;
    }

    loadDefaultVisualization(e: String) {

        setTimeout(() => {

            this.commonService.session.messages = [];
            this.messages = [];
            $('#loading-information').html('');
            $('#launch').prop('disabled', false).focus();

            this.displayloadingInformationModal = false;

        }, 1000);

        this.LoadDefaultVisualizationEvent.emit(e);
    }

    showMessage(msg) {

        this.messages.push(msg);
        this.commonService.session.messages.push(msg);
        $('#loading-information').html(this.commonService.session.messages.join('<br>'));
    }

    launchClick() {

        this.commonService.resetData();
        this.commonService.session.messages = [];
        this.messages = [];

        this.displayloadingInformationModal = true;

        this.showMessage("Starting...");

        setTimeout(() => {
            /*/
             * Process the data files loaded.
            /*/
            this.creatLaunchSequences();
        }, 1000);
    }


    creatLaunchSequences() {


        this.commonService.session.meta.startTime = Date.now();
        $('#launch').prop('disabled', true);

        $('#loading-information').html('');

        this.commonService.temp.messageTimeout = setTimeout(() => {
            $('#loadCancelButton').slideDown();
            abp.notify.warn('If you stare long enough, you can reverse the DNA Molecule\'s spin direction');
        }, 20000);

        const nFiles = this.commonService.session.files.length - 1;
        const check = nFiles > 0;

        const hierarchy = ['newick', 'matrix', 'link', 'node', 'fasta'];
        this.commonService.session.files.sort((a, b) => hierarchy.indexOf(a.format) - hierarchy.indexOf(b.format));


        this.commonService.session.meta.anySequences = this.commonService.session.files.some(file => (file.format == "fasta") || (file.format == "node" && file.field2 !== "None"));

        this.commonService.session.files.forEach((file, fileNum) => {
            const start = Date.now();
            const origin = [file.name];

            if (file.format == 'fasta') {

                this.showMessage(`Parsing ${file.name} as FASTA...`);
                let newNodes = 0;
                this.commonService.parseFASTA(file.contents).then(seqs => {
                    const n = seqs.length;
                    for (let i = 0; i < n; i++) {
                        let node = seqs[i];
                        if (!node) continue;
                        newNodes += this.commonService.addNode({
                            _id: this.commonService.filterXSS(node.id),
                            seq: this.commonService.filterXSS(node.seq),
                            origin: origin
                        }, check);
                    }

                    console.log('FASTA Merge time:', (Date.now() - start).toLocaleString(), 'ms');
                    this.showMessage(` - Parsed ${newNodes} New, ${seqs.length} Total Nodes from FASTA.`);
                    if (fileNum == nFiles) this.processData();
                });

            } else if (file.format == 'link') {

                this.showMessage(`Parsing ${file.name} as Link List...`);
                let l = 0;

                let forEachLink = link => {
                    const keys = Object.keys(link);
                    const n = keys.length;
                    let safeLink = {};
                    for (let i = 0; i < n; i++) {
                        let key = this.commonService.filterXSS(keys[i]);
                        safeLink[key] = this.commonService.filterXSS(link[key]);
                        if (!this.commonService.includes(this.commonService.session.data.linkFields, key)) {
                            this.commonService.session.data.linkFields.push(key);
                        }
                    }
                    l += this.commonService.addLink(Object.assign({
                        source: '' + safeLink[file.field1],
                        target: '' + safeLink[file.field2],
                        origin: origin,
                        visible: true,
                        distance: file.field3 == 'None' ? 0 : parseFloat(safeLink[file.field3])
                    }, safeLink), check);
                };

                if (file.extension == 'xls' || file.extension == 'xlsx') {

                    let workbook = XLSX.read(file.contents, { type: 'array' });
                    let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                    data.map(forEachLink);
                    this.showMessage(` - Parsed ${l} New, ${data.length} Total Links from Link Excel Table.`);
                    let n = 0, t = 0;
                    let nodeIDs = [];
                    const k = data.length;
                    for (let i = 0; i < k; i++) {
                        const l = data[i];
                        const f1 = l[file.field1];
                        if (nodeIDs.indexOf(f1) == -1) {
                            t++;
                            nodeIDs.push(f1);
                            n += this.commonService.addNode({
                                _id: '' + f1,
                                origin: origin
                            }, true);
                        }
                        const f2 = l[file.field2];
                        if (nodeIDs.indexOf(f2) == -1) {
                            t++;
                            nodeIDs.push(f2);
                            n += this.commonService.addNode({
                                _id: '' + f2,
                                origin: origin
                            }, true);
                        }
                    }

                    console.log('Link Excel Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                    this.showMessage(` - Parsed ${n} New, ${t} Total Nodes from Link Excel Table.`);
                    if (fileNum == nFiles) this.processData();

                } else
                    if (file.extension == 'json') {
                        const results = JSON.parse(file.contents);
                        if (!results || results.length == 0) return;

                        let data = results;
                        data.map(forEachLink);
                        this.showMessage(` - Parsed ${l} New, ${data.length} Total Links from Link JSON.`);
                        if (data.length > 0)
                            Object.keys(data[0]).forEach(key => {
                                const safeKey = this.commonService.filterXSS(key);

                                if (!this.commonService.includes(this.commonService.session.data.linkFields, safeKey)) {
                                    this.commonService.session.data.linkFields.push(safeKey);
                                }
                            });
                        let newNodes = 0, totalNodes = 0;
                        const n = data.length;
                        let nodeIDs = [];
                        for (let i = 0; i < n; i++) {

                            const l = data[i];
                            const f1 = l[file.field1];
                            if (nodeIDs.indexOf(f1) == -1) {
                                totalNodes++;
                                newNodes += this.commonService.addNode({
                                    _id: '' + f1,
                                    origin: origin
                                }, true);
                            }
                            const f2 = l[file.field2];
                            if (nodeIDs.indexOf(f2) == -1) {
                                totalNodes++;
                                newNodes += this.commonService.addNode({
                                    _id: '' + f2,
                                    origin: origin
                                }, true);
                            }
                        }

                        console.log('Link JSON Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                        this.showMessage(` - Parsed ${newNodes} New, ${totalNodes} Total Nodes from Link JSON.`);
                        if (fileNum == nFiles) this.processData();
                    } else {

                        Papa.parse(file.contents, {
                            header: true,
                            dynamicTyping: true,
                            skipEmptyLines: true,
                            complete: results => {
                                let data = results.data;
                                data.map(forEachLink);
                                this.showMessage(` - Parsed ${l} New, ${data.length} Total Links from Link CSV.`);
                                results.meta.fields.forEach(key => {
                                    const safeKey = this.commonService.filterXSS(key);

                                    if (!this.commonService.includes(this.commonService.session.data.linkFields, safeKey)) {
                                        this.commonService.session.data.linkFields.push(safeKey);
                                    }
                                });
                                let newNodes = 0, totalNodes = 0;
                                const n = data.length;
                                let nodeIDs = [];
                                for (let i = 0; i < n; i++) {

                                    const l = data[i];
                                    const f1 = l[file.field1];
                                    if (nodeIDs.indexOf(f1) == -1) {
                                        totalNodes++;
                                        newNodes += this.commonService.addNode({
                                            _id: '' + f1,
                                            origin: origin
                                        }, true);
                                    }
                                    const f2 = l[file.field2];
                                    if (nodeIDs.indexOf(f2) == -1) {
                                        totalNodes++;
                                        newNodes += this.commonService.addNode({
                                            _id: '' + f2,
                                            origin: origin
                                        }, true);
                                    }
                                }

                                console.log('Link CSV Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                                this.showMessage(` - Parsed ${newNodes} New, ${totalNodes} Total Nodes from Link CSV.`);
                                if (fileNum == nFiles) this.processData();
                            }
                        });
                    }
            } else if (file.format == 'node') {

                this.showMessage(`Parsing ${file.name} as Node List...`);

                let m = 0, n = 0;

                if (file.extension == 'xls' || file.extension == 'xlsx') {

                    let workbook = XLSX.read(file.contents, { type: 'array' });
                    let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                    data.forEach(node => {
                        let safeNode = {
                            _id: this.commonService.filterXSS('' + node[file.field1]),
                            seq: (file.field2 == 'None') ? '' : this.commonService.filterXSS(node[file.field2]),
                            origin: origin
                        };
                        Object.keys(node).forEach(key => {
                            let safeKey = this.commonService.filterXSS(key);
                            if (!this.commonService.includes(this.commonService.session.data.nodeFields, safeKey)) {
                                this.commonService.session.data.nodeFields.push(safeKey);
                            }
                            safeNode[safeKey] = this.commonService.filterXSS(node[key]);
                        });
                        m += this.commonService.addNode(safeNode, check);
                    });

                    console.log('Node Excel Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                    this.showMessage(` - Parsed ${m} New, ${n} Total Nodes from Node Excel Table.`);
                    if (fileNum == nFiles) this.processData();

                } else
                    if (file.extension == 'json') {
                        const results = JSON.parse(file.contents);
                        if (!results || results.length == 0) return;
                        results.forEach(data => {

                            let node = data;//data[0]             

                            if (node[file.field1] && node[file.field1].toString().trim()) {

                                let safeNode = {
                                    _id: this.commonService.filterXSS('' + node[file.field1]),
                                    seq: (file.field2 == 'None') ? '' : this.commonService.filterXSS(node[file.field2]),
                                    origin: origin
                                };

                                Object.keys(node).forEach(key => {
                                    let safeKey = this.commonService.filterXSS(key);
                                    if (!this.commonService.includes(this.commonService.session.data.nodeFields, safeKey)) {
                                        this.commonService.session.data.nodeFields.push(safeKey);
                                    }
                                    safeNode[safeKey] = this.commonService.filterXSS(node[key]);
                                });
                                m += this.commonService.addNode(safeNode, check);
                            }
                        })

                        console.log('Node JSON Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                        this.showMessage(` - Parsed ${m} New, ${n} Total Nodes from Node JSON.`);

                        if (fileNum == nFiles) this.processData();

                    } else {

                        Papa.parse(file.contents, {
                            header: true,
                            dynamicTyping: true,
                            skipEmptyLines: true,
                            step: data => {

                                let node = data.data;//data[0]             

                                if (node[file.field1] && node[file.field1].toString().trim()) {

                                    let safeNode = {
                                        _id: this.commonService.filterXSS('' + node[file.field1]),
                                        seq: (file.field2 == 'None') ? '' : this.commonService.filterXSS(node[file.field2]),
                                        origin: origin
                                    };

                                    Object.keys(node).forEach(key => {
                                        let safeKey = this.commonService.filterXSS(key);
                                        if (!this.commonService.includes(this.commonService.session.data.nodeFields, safeKey)) {
                                            this.commonService.session.data.nodeFields.push(safeKey);
                                        }
                                        safeNode[safeKey] = this.commonService.filterXSS(node[key]);
                                    });
                                    m += this.commonService.addNode(safeNode, check);
                                }
                            },
                            complete: () => {

                                console.log('Node CSV Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                                this.showMessage(` - Parsed ${m} New, ${n} Total Nodes from Node CSV.`);

                                if (fileNum == nFiles) this.processData();
                            }
                        });
                    }

            } else if (file.format == 'matrix') {

                this.showMessage(`Parsing ${file.name} as Distance Matrix...`);

                if (file.extension == 'xls' || file.extension == 'xlsx') {

                    let workbook = XLSX.read(file.contents, { type: 'array' });
                    let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });
                    let nodeIDs = [], nn = 0, nl = 0;
                    data.forEach((row: any, i) => {
                        if (i == 0) {
                            nodeIDs = row;
                            nodeIDs.forEach((cell, k) => {
                                if (k > 0) {
                                    nn += this.commonService.addNode({
                                        _id: this.commonService.filterXSS('' + cell),
                                        origin: origin
                                    }, check);
                                }
                            });
                        } else {
                            const source = this.commonService.filterXSS('' + row[0]);
                            row.forEach((cell, j) => {
                                if (j == 0) return;
                                const target = this.commonService.filterXSS('' + nodeIDs[j]);
                                if (source == target) return;
                                nl += this.commonService.addLink({
                                    source: source,
                                    target: target,
                                    origin: origin,
                                    distance: parseFloat(cell)
                                }, check);
                            });
                        }
                    });

                    console.log('Distance Matrix Excel Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                    this.showMessage(` - Parsed ${nn} New, ${data.length - 1} Total Nodes from Excel Distance Matrix.`);
                    this.showMessage(` - Parsed ${nl} New, ${((data.length - 1) ** 2 - (data.length - 1)) / 2} Total Links from Excel Distance Matrix.`);
                    if (fileNum == nFiles) this.processData();

                } else {

                    this.commonService.parseCSVMatrix(file).then((o: any) => {
                        this.showMessage(` - Parsed ${o.nn} New, ${o.tn} Total Nodes from Distance Matrix.`);
                        this.showMessage(` - Parsed ${o.nl} New, ${o.tl} Total Links from Distance Matrix.`);
                        if (fileNum == nFiles) this.processData();
                    });
                }

            } else { // if(file.format == 'newick'){

                let links = 0;
                let newLinks = 0;
                let newNodes = 0;
                const tree = patristic.parseNewick(file.contents);
                let m = tree.toMatrix(), matrix = m.matrix, labels = m.ids.map(this.commonService.filterXSS), n = labels.length;
                for (let i = 0; i < n; i++) {
                    const source = labels[i];
                    newNodes += this.commonService.addNode({
                        _id: source,
                        origin: origin
                    }, check);
                    for (let j = 0; j < i; j++) {
                        newLinks += this.commonService.addLink({
                            source: source,
                            target: labels[j],
                            origin: origin,
                            distance: parseFloat(matrix[i][j])
                        }, check);
                        links++;
                    }
                }


                console.log('Newick Tree Parse time:', (Date.now() - start).toLocaleString(), 'ms');
                this.showMessage(` - Parsed ${newNodes} New, ${n} Total Nodes from Newick Tree.`);
                this.showMessage(` - Parsed ${newLinks} New, ${links} Total Links from Newick Tree.`);
                if (fileNum == nFiles) this.processData();
            }
        });

    }

    processData() {
        let nodes = this.commonService.session.data.nodes;
        this.commonService.session.data.nodeFilteredValues = nodes;

        //Add links for nodes with no edges
        this.uniqueNodes.forEach(x => {
            this.commonService.addLink(Object.assign({
                source: '' + x,
                target: '' + x,
                origin: origin,
                visible: true,
                distance: 0,
            }, 'generated'));
        })

        this.processSequence()
    }

    async processSequence() {

        if (!this.commonService.session.meta.anySequences) return this.commonService.runHamsters();
        this.commonService.session.data.nodeFields.push('seq');
        let subset = [];
        let nodes = this.commonService.session.data.nodes;
        const n = nodes.length;
        const gapString = '-'.repeat(this.commonService.session.data.reference.length);
        for (let i = 0; i < n; i++) {
            const d = nodes[i];
            if (!d.seq) {
                d.seq = gapString;
            } else {
                subset.push(d);
            }
        }
        if (this.commonService.session.style.widgets['align-sw']) {
            this.showMessage('Aligning Sequences...');
            let output = await (this.commonService.session as any).align({
                reference: this.commonService.session.data.reference,
                isLocal: $('#localAlign').is(':checked'),
                match: [$('#alignerMatch').val(), $('#alignerMismatch').val()].map(parseFloat),
                gap: [$('#alignerGapO').val(), $('#alignerGapE').val()].map(parseFloat),
                nodes: subset
            });
            const start = Date.now();
            const m = subset.length;
            for (let j = 0; j < m; j++) {
                Object.assign(subset[j], output[j]);
            }
            console.log("Alignment Merge time: ", (Date.now() - start).toLocaleString(), "ms");
        }
        const start = Date.now();
        for (let k = 0; k < n; k++) {
            let node = nodes[k];
            node['_seqInt'] = tn93.toInts(node['seq']);
        }
        console.log("Integer Sequence Translation time: ", (Date.now() - start).toLocaleString(), "ms");

        (this.commonService.session.data as any).consensus = await this.commonService.computeConsensus();
        await this.commonService.computeConsensusDistances();
        subset.sort((a, b) => a['_diff'] - b['_diff']);
        if (this.commonService.session.style.widgets['ambiguity-resolution-strategy']) {
            await this.commonService.computeAmbiguityCounts();
        }
        this.showMessage('Computing Links based on Genomic Proximity...');
        const k = await this.commonService.computeLinks(subset);
        this.showMessage(` - Found ${k} New Links from Genomic Proximity`);
        this.commonService.runHamsters();


        this.showMessage("Finishing...");

    };



    processFiles(files: FileList) {

        if (Array.from(files).length > 0) {

            Array.from(files).map(file => {
                this.processFile(file);
            });
        }
    };

    processFile(rawfile) {

        $('#loading-information').html('');

        const extension = rawfile.name.split('.').pop().toLowerCase();
        if (extension == 'zip') {
            //debugger;
            let new_zip = new JSZip();
            new_zip
                .loadAsync(rawfile)
                .then(zip => {
                    zip.forEach((relativePath, zipEntry) => {
                        zipEntry.async("text").then(c => {
                            this.commonService.processJSON(c, zipEntry.name.split('.').pop())
                        });
                    });
                });
            return;
        }
        if (extension == 'microbetrace' || extension == 'hivtrace') {
            //debugger;
            let reader = new FileReader();
            reader.onloadend = out => this.commonService.processJSON(out.target, extension);
            reader.readAsText(rawfile, 'UTF-8');
            return;
        }
        if (extension == 'svg') {
            //debugger;
            let reader = new FileReader();
            reader.onloadend = out => this.commonService.processSVG(out.target);
            reader.readAsText(rawfile, 'UTF-8');
            return;
        }
        fileto.promise(rawfile, (extension == 'xlsx' || extension == 'xls') ? 'ArrayBuffer' : 'Text').then(file => {
            //debugger;
            file.name = this.commonService.filterXSS(file.name);
            file.extension = file.name.split('.').pop().toLowerCase();
            this.commonService.session.files.push(file);
            this.addToTable(file);
        });
    }

    removeAllFiles() {
        const fileTableRows = $(".file-table-row");
        fileTableRows.slideUp(() => fileTableRows.remove());

        this.commonService.session.files = [];
        this.nodeIds = [];
        this.edgeIds = [];

        this.nodeEdgeCheck();
    }

    addToTable(file) {

        //debugger;
        const extension = file.extension ? file.extension : this.commonService.filterXSS(file.name).split('.').pop().toLowerCase();
        const isFasta = extension.indexOf('fas') > -1;
        const isNewick = extension.indexOf('nwk') > -1 || extension.indexOf('newick') > -1;
        const isXL = (extension == 'xlsx' || extension == 'xls');
        const isJSON = (extension == 'json');
        const isNode = this.commonService.includes(file.name.toLowerCase(), 'node');
        if (isXL) {
            let workbook = XLSX.read(file.contents, { type: 'array' });
            let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            let headers = [];
            data.forEach(row => {
                Object.keys(row).forEach(key => {
                    const safeKey = this.commonService.filterXSS(key);
                    if (!this.commonService.includes(headers, safeKey)) headers.push(safeKey);
                });
            });
            addTableTile(headers, this);
        } else
            if (isJSON) {
                const data = JSON.parse(file.contents);

                addTableTile(Object.keys(data[0]).map(this.commonService.filterXSS), this);

                if (!isFasta && !isNewick && isNode) {
                    this.loadNodes(file.name, data, true);
                }
                if (!isFasta && !isNewick && !isNode) {
                    this.loadEdges(file.name, data, true);
                }

                this.nodeEdgeCheck();

            } else {
                Papa.parse(file.contents, {
                    header: true,
                    skipEmptyLines: true,
                    complete: output => {
                        addTableTile(output.meta.fields.map(this.commonService.filterXSS), this);

                        if (!isFasta && !isNewick && isNode) {
                            this.loadNodes(file.name, output, false);
                        }
                        if (!isFasta && !isNewick && !isNode) {
                            this.loadEdges(file.name, output, false);
                        }

                        this.nodeEdgeCheck();
                    }
                });
            }

        //For the love of all that's good...
        //TODO: Rewrite this as a [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) or [something](https://reactjs.org/docs/react-component.html) or something.
        function addTableTile(headers, context) {

            let parentContext = context;
            let root = $('<div class="file-table-row"></div>').data('filename', file.name);
            let fnamerow = $('<div class="row w-100"></div>');
            $('<div class="file-name col"></div>')
                .append($('<a href="javascript:void(0);" class="far flaticon-delete-1 align-middle p-1" title="Remove this file"></a>').on('click', () => {
                    parentContext.commonService.session.files.splice(parentContext.commonService.session.files.findIndex(f => f.name == file.name), 1);
                    context.visuals.filesPlugin.removeFile(file.name);
                    root.slideUp(() => root.remove());
                }))
                .append($('<a href="javascript:void(0);" class="far flaticon2-download-1 align-middle p-1" title="Resave this file"></a>').on('click', () => {
                    saveAs(new Blob([file.contents], { type: file.type || 'text' }), file.name);
                }))
                .append('<span class="p-1">' + file.name + '</span>')
                .append(`
                    <div class="btn-group btn-group-toggle btn-group-sm float-right" data-toggle="buttons">
                      <label class="btn btn-light${!isFasta && !isNewick && !isNode ? ' active' : ''}">
                        <input type="radio" name="options-${file.name}" data-type="link" autocomplete="off"${!isFasta && !isNewick && !isNode ? ' checked' : ''}>Link
                      </label>
                      <label class="btn btn-light${!isFasta && !isNewick && isNode ? ' active' : ''}">
                        <input type="radio" name="options-${file.name}" data-type="node" autocomplete="off"${!isFasta && !isNewick && isNode ? ' checked' : ''}>Node
                      </label>
                      <label class="btn btn-light">
                        <input type="radio" name="options-${file.name}" data-type="matrix" autocomplete="off">Matrix
                      </label>
                      <label class="btn btn-light${isFasta ? ' active' : ''}">
                        <input type="radio" name="options-${file.name}" data-type="fasta" autocomplete="off"${isFasta ? ' checked' : ''}>FASTA
                      </label>
                      <label class="btn btn-light${isNewick ? ' active' : ''}">
                        <input type="radio" name="options-${file.name}" data-type="newick" autocomplete="off"${isNewick ? ' checked' : ''}>Newick
                      </label>
                    </div>`).appendTo(fnamerow);

            fnamerow.appendTo(root);
            let optionsrow = $('<div class="row w-100"></div>');
            let options = '<option>None</option>' + headers.map(h => `<option value="${h}">${parentContext.commonService.titleize(h)}</option>`).join('\n');
            optionsrow.append(`
                  <div class='col-4 '${isFasta || isNewick ? ' style="display: none;"' : ''} data-file='${file.name}'>
                    <label for="file-${file.name}-field-1">${isNode ? 'ID' : 'Source'}</label>
                    <select id="file-${file.name}-field-1" class="form-control form-control-sm">${options}</select>
                  </div>
                  <div class='col-4 '${isFasta || isNewick ? ' style="display: none;"' : ''} data-file='${file.name}'>
                    <label for="file-${file.name}-field-2">${isNode ? 'Sequence' : 'Target'}</label>
                    <select id="file-${file.name}-field-2" class="form-control form-control-sm">${options}</select>
                  </div>
                  <div class='col-4 '${isFasta || isNewick ? ' style="display: none;"' : ''} data-file='${file.name}'>
                    <label for="file-${file.name}-field-3">Distance</label>
                    <select id="file-${file.name}-field-3" class="form-control form-control-sm">${options}</select>
                  </div>`);

            optionsrow.appendTo(root);

            function matchHeaders(type) {

                const these = $(`[data-file='${file.name}'] select`);
                const a = type == 'node' ? ['ID', 'Id', 'id'] : ['SOURCE', 'Source', 'source'],
                    b = type == 'node' ? ['SEQUENCE', 'SEQ', 'Sequence', 'sequence', 'seq'] : ['TARGET', 'Target', 'target'],
                    c = ['length', 'Length', 'distance', 'Distance', 'snps', 'SNPs', 'tn93', 'TN93'];
                [a, b, c].forEach((list, i) => {
                    $(these.get(i)).val("None");
                    list.forEach(title => {
                        if (parentContext.commonService.includes(headers, title)) $(these.get(i)).val(title);
                    });
                    if ($(these.get(i)).val() == 'None' &&
                        !(i == 1 && type == 'node') && //If Node Sequence...
                        !(i == 2 && type == 'link')) { //...or Link distance...
                        //...don't match to a variable in the dataset, leave them as "None".
                        $(these.get(i)).val(headers[i]);
                        //Everything else, just guess the next ordinal column.
                    }
                });
            }

            root.appendTo('#file-table');
            matchHeaders($(`[name="options-${file.name}"]:checked`).data('type'));

            function refit(e: any = null) {
                const type = $(e ? e.target : `[name="options-${file.name}"]:checked`).data('type'),
                    these = $(`[data-file='${file.name}']`),
                    first = $(these.get(0)),
                    second = $(these.get(1)),
                    third = $(these.get(2));
                if (type == 'node') {
                    first.slideDown().find('label').text('ID');
                    second.slideDown().find('label').text('Sequence');
                    third.slideUp();
                    matchHeaders(type);
                } else if (type == 'link') {
                    first.slideDown().find('label').text('Source');
                    second.slideDown().find('label').text('Target');
                    third.slideDown();
                    matchHeaders(type);
                } else {
                    these.slideUp();
                }
                parentContext.updateMetadata(file);

                $('#launch').prop('disabled', false).focus();
            };

            $(`#file-${file.name}-field-1`).change(() => parentContext.updateMetadata(file));
            $(`#file-${file.name}-field-2`).change(() => parentContext.updateMetadata(file));
            $(`#file-${file.name}-field-3`).change(() => parentContext.updateMetadata(file));
            $(`[name="options-${file.name}"]`).change(refit);
            refit();
        }
    };

    updateMetadata(file) {
        $('#file-panel .file-table-row').each((i, el) => {
            const $el = $(el);
            const fname = $el.data('filename');
            const selects = $el.find('select');
            const f = this.commonService.session.files.find(file => file.name == fname);
            f.format = $el.find('input[type="radio"]:checked').data('type');
            f.field1 = selects.get(0).value;
            f.field2 = selects.get(1).value;
            f.field3 = selects.get(2).value;
        });

    }

    loadNodes(fileName: any, output: any, isJson: boolean) {
        if (isJson) {
            const data: any[] = output;
            const firstField = Object.keys(data[0])[0];
            if (this.nodeIds.find(x => x.fileName === fileName)) {
                this.nodeIds.find(x => x.fileName === fileName).ids.push(
                    output.map((x: any) => x[firstField])
                );
            } else {
                this.nodeIds.push(
                    {
                        fileName: fileName, ids: output.map((x: any) => ('' + x[firstField]))
                    });
            }

        }
        else {
            if (this.nodeIds.find(x => x.fileName === fileName)) {
                this.nodeIds.find(x => x.fileName === fileName).ids.push(
                    output.data.map((x: any) => x[output.meta.fields[0]])
                );
            } else {
                this.nodeIds.push(
                    {
                        fileName: fileName, ids: output.data.map((x: any) => ('' + x[output.meta.fields[0]]))
                    });
            }
        }
    }

    loadEdges(fileName: any, output: any, isJson: boolean) {
        if (isJson) {
            const data: any[] = output;
            const fields = Object.keys(data[0]);
            if (this.edgeIds.find(x => x.fileName === fileName)) {
                this.edgeIds.find(x => x.fileName === fileName).ids.push(
                    output.map((x: any) => ({
                        source: '' + x[fields[0]],
                        target: '' + x[fields[1]]
                    }))
                );
            } else {
                this.edgeIds.push({
                    fileName: fileName,
                    ids: output.map((x: any) => ({
                        source: '' + x[fields[0]],
                        target: '' + x[fields[1]]
                    }))
                })

            }

        }
        else {
            if (this.edgeIds.find(x => x.fileName === fileName)) {
                this.edgeIds.find(x => x.fileName === fileName).ids.push(
                    output.data.map((x: any) => ({
                        source: '' + x[output.meta.fields[0]],
                        target: '' + x[output.meta.fields[1]]
                    }))
                );
            } else {
                this.edgeIds.push({
                    fileName: fileName,
                    ids: output.data.map((x: any) => ({
                        source: '' + x[output.meta.fields[0]],
                        target: '' + x[output.meta.fields[1]]
                    }))
                })

            }
        }

    }

    nodeEdgeCheck() {
        let allNodesListNodes: string[] = [];
        this.nodeIds.forEach(x => {
            x.ids.forEach(y => allNodesListNodes.push(y));
        });
        allNodesListNodes = _.uniq(allNodesListNodes);
        let allEdgeListNodes: string[] = [];
        this.edgeIds.forEach(x => x.ids.forEach(y => {
            allEdgeListNodes.push(y.source);
            allEdgeListNodes.push(y.target);
        }));
        allEdgeListNodes = _.uniq(allEdgeListNodes);

        this.uniqueNodes = allNodesListNodes.filter(x => x && !allEdgeListNodes.some(y=>y==x));
        this.uniqueEdgeNodes = allEdgeListNodes.filter(x => x && !allNodesListNodes.some(y=>y==x));
    }

    removeFile(fileName) {
        this.nodeIds = this.nodeIds.filter(x => x.fileName != fileName);
        this.edgeIds = this.edgeIds.filter(x => x.fileName != fileName);
        this.nodeEdgeCheck();
    }

    async readFastas() {
        const fastas = this.commonService.session.files.filter(f => this.commonService.includes(f.extension, 'fas'));
        const nodeCSVsWithSeqs = this.commonService.session.files.filter(f => f.format == "node" && f.field2 != "None" && f.field2 != "");
        if (fastas.length == 0 && nodeCSVsWithSeqs.length == 0) return [];
        let data = [];
        for (let i = 0; i < fastas.length; i++) {
            let fasta = fastas[i];
            let nodes = await this.commonService.parseFASTA(fasta.contents);
            data = data.concat(nodes);
        }
        // TODO: Cannot presently preview sequences in Node CSV/XLSX tables.
        // for(let j = 0; j < nodeCSVsWithSeqs.length; j++){
        //   let csv = nodeCSVsWithSeqs[j];
        //   await MT.parseNodeCSV(csv.contents).then(nodes => {
        //     data = data.concat(nodes);
        //   });
        // }
        return data;
    }

    async updatePreview(data) {


        $('#alignment-preview').empty().append('<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>');
        if ($('#align-sw').is(':checked')) {
            data = await this.commonService.align({
                nodes: data,
                reference: this.commonService.session.data.reference,
                match: [parseFloat($('#alignerMatch').val().toString()), -parseFloat($('#alignerMismatch').val().toString())],
                gap: [-parseFloat($('#alignerGapO').val().toString()), -parseFloat($('#alignerGapE').val().toString())]
            })
        }
        alignmentViewer(data, { showID: false })
            .then(canvas => $('#alignment-preview').empty().append(canvas));

    }


}



