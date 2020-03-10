import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MovieDetailsService} from './movie-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'week5';
  movie:string;
  response:any;

  constructor(private http:HttpClient,private movieservice:MovieDetailsService,private router:Router){
    }

  search()
  {
  let obs=this.http.get('http://www.omdbapi.com/?t='+this.movie+'&apikey=fa7e7ef1');
  obs.subscribe((res)=>{
    this.router.navigate(['/']);
  this.response=res;
 this.movieservice.sendMovieData(this.response);
  });
  
setTimeout(()=>{
if(this.response.Error=="Movie not found!")
alert("Movie not found...!");
else
this.router.navigate(['/movieShortDes']);
  },700);
}

}
