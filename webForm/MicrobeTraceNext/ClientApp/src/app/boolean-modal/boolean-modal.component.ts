import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';

@Component({
  selector: 'app-boolean-modal',
  templateUrl: './boolean-modal.component.html',
  styleUrls: ['./boolean-modal.component.css']
})
export class BooleanModalComponent {

  constructor(
    public dialogRef: MatDialogRef<BooleanModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  SetResponseValue(value: boolean): void {
    this.data.Response = value;
  }
}
