import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from './movie';
import { MovieService } from './movie.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector:'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit{
  constructor (
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  @Input() movie: Movie;
  @Input() cast: any[];
  @Input() crew: any[];
  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
    .subscribe(movie => this.movie = movie);
    this.route.params
    .switchMap((params: Params) => this.movieService.getCast(+params['id']))
    .subscribe(cast => this.cast = cast.slice(0, 8));
    this.route.params
    .switchMap((params: Params) => this.movieService.getCrew(+params['id']))
    .subscribe(crew => this.crew = crew.slice(0, 8));
  }
  goBack(): void {
    this.location.back();
  }
}
