import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sales-repo',
  templateUrl: './sales-repo.component.html',
  styleUrls: ['./sales-repo.component.scss']
})
export class SalesRepoComponent implements OnInit {
  list: Array<Object> = []
  constructor() { }

  ngOnInit(): void {
    this.list = [
      {
        title: 'Lead In',
        value: 25
      },
      {
        title: 'Contact Made',
        value: 18
      },
      {
        title: 'Needs Defined',
        value: 25
      },
      {
        title: 'Propsals Made',
        value: 8
      },
      {
        title: 'Nagosiations Status',
        value: 5
      },
      {
        title: 'Won',
        value: 3
      },
    ]
  }

}
