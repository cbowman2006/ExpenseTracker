import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() { }
  isExpanded:boolean[] = [];
  accountHeadings:string[] = ['Checking & Savings', 'Credit Cards', 'Investments', 'Loans','Property' ];


  ngOnInit() {
  }

  expandContent(index:number){
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
