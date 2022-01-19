import { Component, Output, OnChanges, SimpleChange, EventEmitter, } from '@angular/core';
import { CommonService } from '../../contactTraceCommonServices/common.service';

@Component({
    selector: 'WaterfallComponent',
    templateUrl: './waterfall-plugin.component.html'
})
export class WaterfallComponent {

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

    constructor(private commonService: CommonService) {
    }
   

}
