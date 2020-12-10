import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sales-repo-card',
  templateUrl: './sales-repo-card.component.html',
  styleUrls: ['./sales-repo-card.component.scss']
})
export class SalesRepoCardComponent implements OnInit {
  @Input() data: any
  gridData: any
  constructor() { }

  ngOnInit(): void {
    this.gridData = this.data.data
    console.log(this.data)
    console.log(this.gridData)
  }

}
