import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
import {IntermediateService} from '../intermediate.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName:string;
  LastName:string;
  email:string;
  phno:string;
  gender:string;

  constructor(private route:ActivatedRoute,private intermediate:IntermediateService) { }
  
  singleuser:any;
  
  edituser:any;

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;

    console.log(id);  
    this.intermediate.sendSingleData(id);

    

    this.intermediate.getSingleData().subscribe(data => {
      console.log('retreiving single user data...');
      console.log(data);
      this.singleuser=data;

      this.firstName=this.singleuser[0].firstName;
      this.LastName=this.singleuser[0].LastName;
      this.email=this.singleuser[0].email;
      this.phno=this.singleuser[0].phno;
      this.gender=this.singleuser[0].gender;


    });
    
    
  }

  edit(){
    const id_2: string = this.route.snapshot.params.id;

    this.edituser={id:id_2,firstName:this.firstName,LastName:this.LastName,email:this.email,phno:this.phno,gender:this.gender};
    
    this.intermediate.editData(this.edituser);
    alert("Data Updated Successfully...");
  }

}
