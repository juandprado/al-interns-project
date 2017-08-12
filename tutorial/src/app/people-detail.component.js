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
const people_1 = require("./people");
const people_service_1 = require("./people.service");
require("rxjs/add/operator/switchMap");
let PeopleDetailComponent = class PeopleDetailComponent {
    constructor(peopleService, route, location) {
        this.peopleService = peopleService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.peopleService.getPerson(+params['id']))
            .subscribe(people => this.people = people);
        this.route.params
            .switchMap((params) => this.peopleService.getParticipationCast(+params['id']))
            .subscribe(peopleCast => this.peopleCast = peopleCast);
        this.route.params
            .switchMap((params) => this.peopleService.getParticipationCrew(+params['id']))
            .subscribe(peopleCrew => this.peopleCrew = peopleCrew);
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", people_1.People)
], PeopleDetailComponent.prototype, "people", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PeopleDetailComponent.prototype, "peopleCast", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PeopleDetailComponent.prototype, "peopleCrew", void 0);
PeopleDetailComponent = __decorate([
    core_1.Component({
        selector: 'people-detail',
        templateUrl: './people-detail.component.html',
        styleUrls: ['./people-detail.component.css']
    }),
    __metadata("design:paramtypes", [people_service_1.PeopleService,
        router_1.ActivatedRoute,
        common_1.Location])
], PeopleDetailComponent);
exports.PeopleDetailComponent = PeopleDetailComponent;
//# sourceMappingURL=people-detail.component.js.map