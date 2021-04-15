import { Inject } from "@angular/core";
import { MicrobeTraceData } from './microbetrce-data';

export interface ISectionComponent {
  MicrobeTraceDataSubscription;
  MicrobeTraceData:MicrobeTraceData;
  SaveData();
  ClearData();
  UpdateData();
  BeforeUnloadHandler($event:any);


}
