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
import { BlogsComponent } from './Home/blogs/blogs.component';
import { AboutComponent } from './Home/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    NavigationCardRowComponent,
    TrendingComponent,
    HomeComponent,
    CalenderComponent,
    BlogsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
