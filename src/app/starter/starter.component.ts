import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../api/api.service';
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  selectValue: string[];
 //  validationform: FormGroup; 
 //  submit1 =false;
 Workform: FormGroup; 
 submit6 =false;
 Materialform: FormGroup; 
 submit7 =false;
 Schemeform: FormGroup; 
 submit8 =false;
 Street_TYform: FormGroup; 
 submit9 =false;
 Work_TYform: FormGroup; 
 submit10 =false;
 ERCform: FormGroup; 
 submit11 =false;
 Constructorform:FormGroup;
 submit12 =false;
 
 form6res: any;
 form7res: any;
 form8res: any;
 form9res: any;
 form10res: any;
 form11res: any;
 form12res: any;
 fetchDetailsRes: any;
 isEdit:boolean = false;
 isEditRes:any;
  constructor(public formBuilder: FormBuilder,private api: ApiService) { }

  ngOnInit() {

   // this.selectValue = ['1', '2','3','4' ];
   this.Workform = this.formBuilder.group({
     reasonfornewwork: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
   });
   this.Materialform = this.formBuilder.group({
     roadmaterial: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
   });
   this.Schemeform = this.formBuilder.group({
     scheme: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
   });
   this.Street_TYform = this.formBuilder.group({
     street_type: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
   });
   this.Work_TYform = this.formBuilder.group({
     workktype: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
   });
   this.ERCform = this.formBuilder.group({
     E_R_C: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
   });
   this.Constructorform = this.formBuilder.group({
     constname: ['', Validators.required],
     constphoneno: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
     constemail: ['',  [Validators.required,Validators.email]],
     constaddress: ['', Validators.required],
     
   });

   this.api.fetchDetails().subscribe(res => {
    this.fetchDetailsRes = res;
    console.log('data response',this.fetchDetailsRes);
  });

   

   

    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Pages', path: '/' }, { label: 'Starter', active: true }];
  }

  
 //  get form() {
 //   return this.validationform.controls;
 //   }
 //    Submit() {
 //     this.submit1 = true;
 //   }
 get form6() {
   return this.Workform.controls;
 }
 
 Submit6() {
   this.submit6 = true;
   if(this.Workform.status == 'VALID'){
    this.api.saveform6(this.Workform.value).subscribe(res => {
      this.form6res = res;
      console.log('data response',this.form6res);
    });
  }
 }
 get form7() {
   return this.Materialform.controls;
 }
 
 Submit7() {
   this.submit7 = true;
   if(this.Materialform.status == 'VALID'){
    this.api.saveform7(this.Materialform.value).subscribe(res => {
      this.form7res = res;
      console.log('data response',this.form7res);
    });
  }
 }
 get form8() {
   return this.Schemeform.controls;
 }
 
 Submit8() {
   this.submit8 = true;
   if(this.Schemeform.status == 'VALID'){
    this.api.saveform8(this.Schemeform.value).subscribe(res => {
      this.form8res = res;
      console.log('data response',this.form8res);
    });
  }
 }
 get form9() {
   return this.Street_TYform.controls;
 }
 
 Submit9() {
   this.submit9 = true;
   if(this.Street_TYform.status == 'VALID'){
    this.api.saveform9(this.Street_TYform.value).subscribe(res => {
      this.form9res = res;
      console.log('data response',this.form9res);
    });
  }
 }
 get form10() {
   return this.Work_TYform.controls;
 }
 
 Submit10() {
   this.submit10 = true;
   if(this.Work_TYform.status == 'VALID'){
    this.api.saveform10(this.Work_TYform.value).subscribe(res => {
      this.form10res = res;
      console.log('data response',this.form10res);
    });
  }
 }
 get form11() {
   return this.ERCform.controls;
 }
 
 Submit11() {
   this.submit11 = true;
   if(this.ERCform.status == 'VALID'){
    this.api.saveform11(this.ERCform.value).subscribe(res => {
      this.form11res = res;
      console.log('data response',this.form11res);
    });
  }
 }
 get form12() {
   return this.Constructorform.controls;
 }
 
 Submit12() {
   this.submit12 = true;
   if(this.Constructorform.status == 'VALID'){
    this.api.saveform12(this.Constructorform.value).subscribe(res => {
      this.form12res = res;
      console.log('data response',this.form12res);
    });
  }
 }
 editDetails(obj){
  this.isEdit = true;
  this.isEditRes = obj;
  this.api.editDetails(obj.id).subscribe(res => {
    this.isEditRes = obj;
    console.log('data response',this.isEditRes);
  });

 }
 deleteDetails(id){
  this.api.deleteDetails(id).subscribe(res => {
    // this.isEditRes = res;
    console.log('data response',res);
  });

 }
   
 
}
