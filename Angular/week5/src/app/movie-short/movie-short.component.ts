import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../movie-details.service';
@Component({
  selector: 'app-movie-short',
  templateUrl: './movie-short.component.html',
  styleUrls: ['./movie-short.component.css']
})
export class MovieShortComponent implements OnInit {

   response:any;
 
  constructor(private movieDetails:MovieDetailsService){  }

  ngOnInit(): void {

    this.response=this.movieDetails.getMovieData();
    console.log(this.response);

}
}
