import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  IsTypedropdown: boolean;
  Type: string;
  City: any;
  IsCitydropdown: boolean;
  IsLocationdropdown: boolean;
  Location: any;

  constructor() { }

  ngOnInit() {
  }
  onTypeSearchChange(searchValue: string) {
    if (searchValue.length > 0) {
      console.log(searchValue);
      this.IsTypedropdown=true;
    }
    else {
      console.log("NO CHANGE in Type" + searchValue);
      this.IsTypedropdown=false;
    }
  }
  onCitySearchChange(searchValue: string) {
    if (searchValue.length > 0) {
      console.log(searchValue);
      this.IsCitydropdown=true;
    }
    else {
      console.log("NO CHANGE in Type" + searchValue);
      this.IsCitydropdown=false;
    }
  }
  onLocationSearchChange(searchValue: string) {
    if (searchValue.length > 0) {
      console.log(searchValue);
      this.IsLocationdropdown=true;
    }
    else {
      console.log("NO CHANGE in Type" + searchValue);
      this.IsLocationdropdown=false;
    }
  }
  onTypeSelect(item){
    this.Type=item;
    this.IsTypedropdown=false;
  }
  onCitySelect(item){
    this.City=item;
    this.IsCitydropdown=false;
  }
  onLocationSelect(item){
    this.Location=item;
    this.IsLocationdropdown=false;
  }
}
