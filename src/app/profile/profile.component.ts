import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  // bread crumb items
  breadCrumbItems: Array<{}>;
  selectValue_Des: string[];
  DesignationForm: FormGroup; 
  submit1 =false;
  Departmentform: FormGroup; 
  submit2 =false;
  selectValue_Str: string[];
  selectValue1_Str:string[];
  Streetform: FormGroup; 
  submit3 =false;
  Zoneform: FormGroup; 
  submit4 =false;
  selectValue_War: string[];
  Wardform: FormGroup; 
  submit5 =false;
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
  form1res: any;
  form2res: any;
  form3res: any;
  form4res: any;
  form5res: any;
  form6res: any;
 
  constructor(public formBuilder: FormBuilder,private api: ApiService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Pages', path: '/' }, { label: 'Profile', active: true }];

    this.selectValue_Des = ['1', '2','3','4' ];
    this.DesignationForm = this.formBuilder.group({
      department_name:['',Validators.required],
      designation: ['', Validators.required],
      description: ['', Validators.required]
      
    });

    this.Departmentform = this.formBuilder.group({
      department_name: ['', Validators.required],
      description: ['', Validators.required],
      
    });

    this.selectValue_Str = ['1','2','3','4'];
    this.selectValue1_Str = ['1','2','3','4'];
    this.Streetform = this.formBuilder.group({
      
      // Street: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      description: ['',Validators.required],
      ward_name:['',Validators.required],
      zone_name:['',Validators.required]
      
    });
    
    this.Zoneform = this.formBuilder.group({
      zone_name: ['', Validators.required],
      description: ['', Validators.required],
      
    });
    this.selectValue_War = ['1','2','3','4'];
    this.Wardform = this.formBuilder.group({
      ward_name: ['',Validators.required],
      description: ['',Validators.required],
      zone_name:['',Validators.required]
      
    });
    // this.Workform = this.formBuilder.group({
    //   Reason: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    //   Description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    // });
    this.Materialform = this.formBuilder.group({
      RoadMaterial: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      Description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    });
    this.Schemeform = this.formBuilder.group({
      Scheme: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      Description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    });
    this.Street_TYform = this.formBuilder.group({
      Street_Type: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      Description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    });
    this.Work_TYform = this.formBuilder.group({
      Work_Type: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      Description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    });
    this.ERCform = this.formBuilder.group({
      E_R_C: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      Description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    });
    this.Constructorform = this.formBuilder.group({
      Constructor_Name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      Phone_No: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      Email: ['',  [Validators.required,Validators.email]],
      Address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
    });
    
    
  }

  

  get form1() {
    return this.DesignationForm.controls;
  }
  

  Submit1() {
    this.submit1 = true;
    if(this.DesignationForm.status == 'VALID'){
      this.api.saveform1(this.DesignationForm.value).subscribe(res => {
        this.form1res = res;
        console.log('data response',this.form1res);
      });
    }
    
  }
  get form2() {
    return this.Departmentform.controls;
  }
  Submit2() {
    this.submit2 = true;
    if(this.Departmentform.status == 'VALID'){
      this.api.saveform2(this.Departmentform.value).subscribe(res => {
        this.form2res = res;
        console.log('data response',this.form2res);
      });
    }
  }
  get form3() {
    return this.Streetform.controls;
    }
  Submit3() {
    this.submit3 = true;
    if(this.Streetform.status == 'VALID'){
      this.api.saveform3(this.Streetform.value).subscribe(res => {
        this.form3res = res;
        console.log('data response',this.form3res);
      });
    }
    }
  get form4() {
    return this.Zoneform.controls;
  }
  
  Submit4() {
    this.submit4 = true;
    if(this.Zoneform.status == 'VALID'){
      this.api.saveform4(this.Zoneform.value).subscribe(res => {
        this.form4res = res;
        console.log('data response',this.form4res);
      });
    }
    }
  

  get form5() {
    return this.Wardform.controls;
  }
  Submit5() {
    this.submit5 = true;
    if(this.Wardform.status == 'VALID'){
      this.api.saveform5(this.Wardform.value).subscribe(res => {
        this.form5res = res;
        console.log('data response',this.form5res);
      });
    }
  }
  get form6() {
    return this.Workform.controls;
  }
  
  Submit6() {
    this.submit6 = true;
  }
  get form7() {
    return this.Materialform.controls;
  }
  
  Submit7() {
    this.submit7 = true;
  }
  get form8() {
    return this.Schemeform.controls;
  }
  
  Submit8() {
    this.submit8 = true;
  }
  get form9() {
    return this.Street_TYform.controls;
  }
  
  Submit9() {
    this.submit9 = true;
  }
  get form10() {
    return this.Work_TYform.controls;
  }
  
  Submit10() {
    this.submit10 = true;
  }
  get form11() {
    return this.ERCform.controls;
  }
  
  Submit11() {
    this.submit11 = true;
  }
  get form12() {
    return this.Constructorform.controls;
  }
  
  Submit12() {
    this.submit12 = true;
  }
  changeItem(e) {
    console.log(e.value);
    // this.form.controls.zone.setValue('test')
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }
 
  
  
}

