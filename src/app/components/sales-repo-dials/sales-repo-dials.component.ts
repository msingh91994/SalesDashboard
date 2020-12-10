import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sales-repo-dials',
  templateUrl: './sales-repo-dials.component.html',
  styleUrls: ['./sales-repo-dials.component.scss']
})
export class SalesRepoDialsComponent implements OnInit {
  @Input() data: any
  constructor() { }
  ngOnInit(): void {
    console.log(this.data)

  }

}
