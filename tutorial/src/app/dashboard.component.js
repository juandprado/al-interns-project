"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const movie_service_1 = require("./movie.service");
const people_service_1 = require("./people.service");
let DashboardComponent = class DashboardComponent {
    constructor(movieService, peopleService) {
        this.movieService = movieService;
        this.peopleService = peopleService;
        this.movies = [];
        this.movieTheaters = [];
        this.movieTop = [];
        this.people = [];
    }
    ngOnInit() {
        this.movieService.getMovies()
            .then(movies => this.movies = movies.slice(0, 4));
        this.movieService.getMoviesTheaters()
            .then(movieTheaters => this.movieTheaters = movieTheaters.slice(0, 4));
        this.movieService.getMoviesTop()
            .then(movieTop => this.movieTop = movieTop.slice(0, 4));
        this.peopleService.getPeople()
            .then(people => this.people = people.slice(0, 4));
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService, people_service_1.PeopleService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map