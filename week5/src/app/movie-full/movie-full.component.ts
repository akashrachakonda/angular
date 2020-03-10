import { Component, OnInit, Input } from '@angular/core';
import { MovieDetailsService } from '../movie-details.service';

@Component({
  selector: 'app-movie-full',
  templateUrl: './movie-full.component.html',
  styleUrls: ['./movie-full.component.css']
})
export class MovieFullComponent implements OnInit {

  response:any;
 
  constructor(private movieDetails:MovieDetailsService){  }

  
  ngOnInit(): void {
      this.response=this.movieDetails.getMovieData();
   
}
}