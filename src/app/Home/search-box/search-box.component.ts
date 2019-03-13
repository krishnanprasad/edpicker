import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input() Institution: string;
  public Isdropdown=false;;
  constructor() {
  }
  onSearchChange(searchValue: string) {
    if (searchValue.length > 0) {
      console.log(searchValue);
      this.Isdropdown=true;
    }
    else {
      console.log("NO CHANGE" + searchValue);
      this.Isdropdown=false;
    }
  }
}
