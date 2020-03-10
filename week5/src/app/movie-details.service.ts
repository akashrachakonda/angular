import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor() { }

moviedata:any;
getMovieData(){
  console.log(this.moviedata);
return this.moviedata;
}

sendMovieData(data){
this.moviedata=data;
console.log(this.moviedata);
}

}
