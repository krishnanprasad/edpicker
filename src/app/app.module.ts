import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './Home/search-box/search-box.component';
import { NavigationCardRowComponent } from './Home/navigation-card-row/navigation-card-row.component';
import { TrendingComponent } from './Home/trending/trending.component';
import {HomeComponent} from './Home/home.component';
import { from } from 'rxjs';
import { CalenderComponent } from './Home/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    NavigationCardRowComponent,
    TrendingComponent,
    HomeComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
