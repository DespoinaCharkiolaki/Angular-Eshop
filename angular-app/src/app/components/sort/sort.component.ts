import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output() onSort = new EventEmitter<string>();
  sortType: string;

  constructor() {
  }

  ngOnInit() {
    this.sortType = 'Ascending';
  }

  sort() {
    this.onSort.emit(this.sortType);
    this.sortType = (this.sortType != 'Ascending') ? 'Ascending' : 'Descending';
  }
}
