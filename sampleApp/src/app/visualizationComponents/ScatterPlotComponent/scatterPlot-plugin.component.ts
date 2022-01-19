import { Injector, Component, Output, OnChanges, SimpleChange, EventEmitter, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CommonService } from '../../contactTraceCommonServices/common.service';

/**
 * @title Complex Example
 */
@Component({
    selector: 'ScatterPlotComponent',
    templateUrl: './scatterPlot-plugin.component.html',
})
export class ScatterPlotComponent extends AppComponentBase implements OnInit {

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

    constructor(injector: Injector,
        private commonService: CommonService) {

        super(injector);

    }


    ngOnInit() {

    }

    openSettings() {

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

}
