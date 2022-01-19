import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../../contactTraceCommonServices/common.service';

/**
 * @title Complex Example
 */
@Component({
    selector: 'TimelineComponent',
    templateUrl: './timeline-plugin.component.html',
})
export class TimelineComponent {

    @Output() DisplayGlobalSettingsDialogEvent = new EventEmitter();

    constructor(private commonService: CommonService) {

    }
}
