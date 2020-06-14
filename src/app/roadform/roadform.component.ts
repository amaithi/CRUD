import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-roadform',
  templateUrl: './roadform.component.html',
  styleUrls: ['./roadform.component.css']
})
export class RoadformComponent implements OnInit {
  validationform: FormGroup;
  submit: boolean;
  zonelist: any[];
  wardlist: any[];
  streetnamelist: any[];
  typeofworklist: any[];
  tenderlist:  any[];
  yearlist: any[];
  constructor(public formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.zonelist =  ["Zone 1","Zone 2","Zone 3"];
    this.wardlist =  ["Ward 1","Ward 2","Ward 3"];
    this.streetnamelist =  ["streetnamelist 1","streetnamelist 2","streetnamelist 3"];
    this.typeofworklist = ["Type 1","Type 2","Type 3"];
    this.tenderlist = ["Tender 1","Tender 2","Tender 3"];
    this.yearlist = ["1991","1992","1993"];
    
 
    this.validationform = this.formBuilder.group({
      zone: ['', Validators.required],
      ward: ['', Validators.required],
      streetname: ['', Validators.required],
      significantlandmark: ['', Validators.required],
      segment: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      totallength: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      segno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      lengthmtr: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      startcoodinates: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      endcoodinates: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      fromlandmark: ['', Validators.required],
      tolandmark: ['', Validators.required],
      nameofwork: ['', Validators.required],
      typeofwork: ['', Validators.required],
      otherworktype: ['', Validators.required],
      tender: ['', Validators.required],
      estimatedamount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      sanctionedyear: ['', Validators.required],
      year: ['', Validators.required],
      workorderno: ['', Validators.required],
      workcode: ['', Validators.required],
      workorderdate: ['', Validators.required],
      periodfrom: ['', Validators.required],
      periodto: ['', Validators.required],
      periodofestention: ['', Validators.required],
      workdetails: ['', Validators.required],
      nameofcontractor: ['', Validators.required],
      contractorregno: ['', Validators.required],
      expenditurebooked: ['', Validators.required],
      phoneno: ['',[Validators.required, Validators.pattern('[0-9]+')]],
      emailid: [''],
     });
     
  }
  
  get form() {
    return this.validationform.controls;
  }
  
  changeItem(e) {
    console.log(e.value);
    // this.form.controls.zone.setValue('test')
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }
  validSubmit() {
    this.submit = true;
  }

}
