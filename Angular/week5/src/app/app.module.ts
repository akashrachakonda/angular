import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieShortComponent } from './movie-short/movie-short.component';
import { MovieFullComponent } from './movie-full/movie-full.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { RouterModule ,Routes,Router} from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';



export const movies:Routes=[
  {path:'movieShortDes',component:MovieShortComponent},
  {path:'movieFullDes',component:MovieFullComponent},
  {path:'moviePoster',component:MoviePosterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MovieShortComponent,
    MovieFullComponent,
    MoviePosterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(movies),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
