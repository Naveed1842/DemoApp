import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from './patient-list/patient.service';
import { HttpClientModule } from '@angular/common/http';
//mport { HttpClient } from '@angular/common/http';

@NgModule({
  declarations:[
    AppComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
