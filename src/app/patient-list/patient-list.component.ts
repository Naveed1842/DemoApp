import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
//import { Patient } from './patient';

@Component({
  selector: 'pm-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patient_results:any;
  constructor(private patientService:PatientService) { }
  ngOnInit() {
    this.getPatient();
  }
  getPatient()
  {
    this.patientService.getPatient('afdf026c-3595-4ebf-907a-0b88e82a4ad2').subscribe(res=>{
     console.log("The method should worked on first call",res);
     this.patient_results = res;
     console.log("The result is in patient of data type Patient",this.patient_results);
   });
  }
}
