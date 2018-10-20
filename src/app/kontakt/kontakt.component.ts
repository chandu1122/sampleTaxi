import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KontaktComponent {

  constructor(public dialogRef: MatDialogRef<KontaktComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMailData() {

  }

}
