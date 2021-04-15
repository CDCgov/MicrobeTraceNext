import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData, ModalListData } from '../DTO/modal-data';
@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ListModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalListData) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  SetResponseValue(value: boolean): void {
    this.data.Response = value;
  }
}


