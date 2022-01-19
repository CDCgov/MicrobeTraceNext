import { Injectable } from "@angular/core";

import { MicrobeTraceNextHomeComponent } from "./microbe-trace-next-plugin.component";
import { FilesComponent } from "./filesComponent/files-plugin.component";
import { TwoDComponent } from "./visualizationComponents/TwoDComponent/twoD-plugin.component";
import { ThreeDComponent } from "./visualizationComponents/ThreeDComponent/threeD-plugin-component";
import { MapComponent } from "./visualizationComponents/MapComponent/map-plugin.component";
import { HistogramComponent } from "./visualizationComponents/HistogramComponent/histogram-plugin.component";
import { TableComponent } from "./visualizationComponents/TableComponent/table-plugin-component";
import { GanttComponent } from "./visualizationComponents/GanttCompnent/gantt-plugin.component";

@Injectable({
    providedIn: 'root',
})
export class MicrobeTraceNextVisuals {
    public microbeTrace: MicrobeTraceNextHomeComponent;
    public filesPlugin: FilesComponent;
    public twoD: TwoDComponent;
    public threeD: ThreeDComponent;
    public gisMap: MapComponent;
    public histogram: HistogramComponent;
    public tableComp: TableComponent;
    public gantt: GanttComponent
}