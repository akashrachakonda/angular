import { Component, OnInit } from '@angular/core';
import {IntermediateService} from '../intermediate.service';
import {Router} from '@angular/router';
import{Location} from '@angular/common';
@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit{

  constructor(private intermediate:IntermediateService,private route:Router,private loc:Location) { }

  name:string;

  firstName:string;
  LastName:string;
  email:string;
  phno:string;
  gender:string;
  photo:string;
  _id:any;

  studentDetails:any;


   ngOnInit(){
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this.onLoad();
   }
   onLoad():any{
    this.intermediate.getData().subscribe(data => {
      console.log('retreiving users...');
      console.log(data);
      this.studentDetails=data;
    });
   
    
   }
    
  //console.log(this.studentDetails);

  //  console.log(this.studentDetails.firstName);
    
   
    
  
  onClick(id:any){
   this.route.navigateByUrl('allStudents/profile/'+id);

  }
  onDelete(id:any){
      alert("Record is going to be deleted...");
    this.intermediate.onDelete(id).subscribe(
      data=>{
        console.log(data);
      }
    );

    this.onLoad();
   
  }

filteredDetails:any;

  filter()
  {
    this.intermediate.filterData(this.name).subscribe(data => {
      console.log(data);
      this.filteredDetails=data;
    } );
  }


}

