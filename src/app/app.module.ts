import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthenticationService} from './authentication.service';
import {SharedService} from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    KontaktComponent,
  ],
  entryComponents: [KontaktComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpModule,
  ],
  providers: [AuthenticationService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
