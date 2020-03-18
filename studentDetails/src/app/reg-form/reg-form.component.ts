import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import {IntermediateService} from '../intermediate.service';

@Component({
  selector: 'reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent  {

  //studentDetails:FormGroup;
  constructor(private fb:FormBuilder,private intermediate:IntermediateService){  }

  // ngOnInit(): void {
  //   this.studentDetails=this.fb.group({
  //     firstName:[''],
  //     LastName:[''],
  //     email:[''],
  //     phno:[''],
  //     gender:[''],
  //     photo:['']
  //   });

  // }


  firstName:string;
  LastName:string;
  email:string;
  phno:string;
  gender:string;
  photo:string;


  formDetails:any;
  onSubmit(value:any){
    this.firstName=value.firstName;
    this.LastName=value.LastName;
    this.email=value.email;
    this.phno=value.phno;
    this.gender=value.gender;
    this.photo=value.photo;

    console.log(this.firstName,this.LastName,this.email,this.phno,this.gender,this.photo);

    this.formDetails={firstName:this.firstName,LastName:this.LastName,email:this.email,phno:this.phno,gender:this.gender,photo:this.photo};

    this.intermediate.postData(this.formDetails);
    
    alert("Data submitted...");

    
  }

    
}