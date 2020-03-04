import { Component, OnInit } from '@angular/core';
import{InteractionService} from '../interaction.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
fname:string="";
 lname:string="";
  constructor(private _interactionservice:InteractionService) { }

  sendDetails(){
    console.log(this.fname);
    this._interactionservice.sendUserDetails(this.fname+" "+this.lname);
  }

  ngOnInit(): void {
  }

}
