import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetailsService } from '../movie-details.service';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {
  response:any;
 
  constructor(private movieDetails:MovieDetailsService){  }

  ngOnInit(): void {

    this.response=this.movieDetails.getMovieData();
}
}