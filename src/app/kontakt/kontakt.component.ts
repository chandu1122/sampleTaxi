import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormService } from  '../form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KontaktComponent {
  myForm: FormGroup;
  resSuccess: String;
  constructor(public snackBar: MatSnackBar, private fb: FormBuilder, public dialogRef: MatDialogRef<KontaktComponent>, private formService: FormService) {
    this.myForm = this.fb.group({
      Name: '',
      Email: '',
      Phone: '',
      Message: ''
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMailData() {
    this.formService.contactData(this.myForm.value).then((res:any)=>{
      if(res.success == false){
        this.openSnackBar(res.message, '');
 
      } else{
        this.openSnackBar(res.message, '');
        this.resSuccess = res.message;
      }
     
       
     })
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
