"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const movies_component_1 = require("./movies.component");
const dashboard_component_1 = require("./dashboard.component");
const movie_detail_component_1 = require("./movie-detail.component");
const movie_service_1 = require("./movie.service");
const movie_search_component_1 = require("./movie-search.component");
const people_service_1 = require("./people.service");
const people_detail_component_1 = require("./people-detail.component");
const safe_pipe_1 = require("./safe.pipe");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            movies_component_1.MoviesComponent,
            dashboard_component_1.DashboardComponent,
            movie_detail_component_1.MovieDetailComponent,
            movie_search_component_1.MovieSearchComponent,
            people_detail_component_1.PeopleDetailComponent,
            safe_pipe_1.SafePipe
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [movie_service_1.MovieService, people_service_1.PeopleService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map