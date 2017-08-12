import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { MoviesComponent} from './movies.component';
import { DashboardComponent} from './dashboard.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from './movie.service';
import { MovieSearchComponent } from './movie-search.component'

import { PeopleService } from './people.service';
import { PeopleDetailComponent } from './people-detail.component';

import { SafePipe } from './safe.pipe';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    DashboardComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    PeopleDetailComponent,
    SafePipe
  ],
  bootstrap:    [ AppComponent ],
  providers: [ MovieService, PeopleService ]
})
export class AppModule { }
