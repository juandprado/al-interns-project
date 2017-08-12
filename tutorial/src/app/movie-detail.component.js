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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const movie_1 = require("./movie");
const movie_service_1 = require("./movie.service");
require("rxjs/add/operator/switchMap");
let MovieDetailComponent = class MovieDetailComponent {
    constructor(movieService, route, location) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.movieService.getMovie(+params['id']))
            .subscribe(movie => this.movie = movie);
        this.route.params
            .switchMap((params) => this.movieService.getCast(+params['id']))
            .subscribe(cast => this.cast = cast.slice(0, 8));
        this.route.params
            .switchMap((params) => this.movieService.getCrew(+params['id']))
            .subscribe(crew => this.crew = crew.slice(0, 8));
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", movie_1.Movie)
], MovieDetailComponent.prototype, "movie", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MovieDetailComponent.prototype, "cast", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MovieDetailComponent.prototype, "crew", void 0);
MovieDetailComponent = __decorate([
    core_1.Component({
        selector: 'movie-detail',
        templateUrl: './movie-detail.component.html',
        styleUrls: ['./movie-detail.component.css']
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.ActivatedRoute,
        common_1.Location])
], MovieDetailComponent);
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map