import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toppings = new FormControl();
  list: Array<Object> = []
  topList: Array<Object> = []


  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  tableData: any[] = [
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    }, {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    }, 
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    }, 
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    },
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    },
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    },
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    },
    {
      date: '20-1-2020',
      name:"John Doe",
      clientName:"Oberio grops of Hotels",
      contactPerson:"Mahmud Ritelli",
      mettingTitle: "C Level",
      vertical:"Marketting",
      location :"Goto Meeting",
      meetingPurpose:"Understand their Current ecosystem",
      remark:"Send first cut of proposed solutions",
      status:"needs define"

    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.topList = [
      {
        title: "John Doe",
        data: [
          {
          key: "New MMR",
          value: 1023
        },
        {
          key: "New Logos",
          value: 897
        },
        {
          key: "Demo Calls",
          value: 20
        }
      ]
      },
      {
        title: "Jane Smith",
        data: [
          {
          key: "New MMR",
          value: 1023
        },
        {
          key: "New Logos",
          value: 897
        },
        {
          key: "Demo Calls",
          value: 25
        }
      ]
      },
      {
        title: "Ethan Hunt",
        data: [
          {
          key: "New MMR",
          value: 1023
        },
        {
          key: "New Logos",
          value: 897
        },
        {
          key: "Demo Calls",
          value: 25
        }
      ]
      }
    ]
    this.list = [
      {
        key: 'CALLS',
        value: '10/15',
        img: 'ico-calls.png'
      },
      {
        key: 'WINS',
        value: '1/3',
        img: 'ico-wins.png'
      },
      {
        key: 'INCREMENT REVENUE',
        value: '80K/100K',
        img: 'ico-revenue.png'
      }
    ]
  }


}
