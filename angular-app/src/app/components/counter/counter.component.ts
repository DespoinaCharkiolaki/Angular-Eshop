import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  quantity: number = 1;

  constructor() { }

  ngOnInit() {
  }

  IncrementItem(): void {
    this.quantity = this.quantity + 1;
  }

  DecreaseItem(): void {
    if(this.quantity >=2)
     this.quantity = this.quantity - 1;
     else
     this.quantity=1;
  }
}
