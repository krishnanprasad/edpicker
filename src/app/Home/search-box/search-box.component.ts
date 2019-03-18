import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  private Institution: string;
  private Location:string;

  public IsTypedropdown=false;
  public IsLocationdropdown=false;
  
  constructor() {
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
  onLocationSearchChange(searchValue: string) {
    if (searchValue.length > 0) {
      console.log(searchValue);
      this.IsLocationdropdown=true;
    }
    else {
      console.log("NO CHANGE in Location" + searchValue);
      this.IsLocationdropdown=false;
    }
  }
  onTypeSelect(item){
    this.Institution=item;
    this.IsTypedropdown=false;
  }
  onLocationSelect(item){
    this.Location=item;
    this.IsLocationdropdown=false;
  }
}
