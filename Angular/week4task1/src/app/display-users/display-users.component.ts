import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{InteractionService} from '../interaction.service'
@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

@Output() public count = new EventEmitter<number>();

  constructor(private _interactionservice:InteractionService) { }

  arr:Array<string>=[];
  limit:number=5;


  ngOnInit(): void {
    this._interactionservice.addedUser$
      .subscribe(
        username=>{
          if(this.arr.length+1>5)
          {
            alert("Limit Exceeded ,Only 5 Users are accepted");
          }
          else{
          this.arr.push(username);
          this.count.emit(this.arr.length);
          }
        });
  }

 deleteUser($event)
  {
   let index=this.arr.indexOf($event);
   this.arr.splice(index,1);
   this.count.emit(this.arr.length);
  }

}
