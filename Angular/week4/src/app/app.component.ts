import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user:any;
  title = 'week4';
  num:number=10;
  colour:string="blue";
  arr2:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  constructor()
  {
    this.user={
      arr:[1,2,3,4,5,6,7,8,9,10]
      };
  }
}
