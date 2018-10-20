import { Component, OnInit, ElementRef, TemplateRef  } from '@angular/core';
import {Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, Validators } from '@angular/forms';
import {KontaktComponent} from '../kontakt/kontakt.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import {serviceData} from '../../assets/data';
import {Servicetypes} from '../../assets/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  modalRef: BsModalRef;
  message: string;
  isClassVisible: boolean;
  serviceData: Servicetypes[] = serviceData;

  fileNameDialogRef: MatDialogRef<KontaktComponent>;

    constructor(private modalService: BsModalService, private dialog: MatDialog) {
    }

    service(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

    openModal() {
      const dialogRef = this.dialog.open(KontaktComponent, {hasBackdrop: false});
      this.isClassVisible = true;
      dialogRef.afterClosed().subscribe(result => {
        this.isClassVisible = false;
      });
    }

}
