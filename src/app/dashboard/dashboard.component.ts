import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * array of cards to display
   */
  arrCards = [
    {strName:"Pageviews",intValue:"540.280",strPercentage:"2,15%",blnEpc:true,strEpcValue:"308.20 USD",blnUp:true},
    {strName:"Clicks",intValue:1010,strPercentage:"1,10%",blnEpc:false,strEpcValue:"24.5%"},
    {strName:"Conversations",intValue:1010,strPercentage:"2,15%",blnEpc:false,strEpcValue:"28.6%",blnUp:true},
    {strName:"Comission",intValue:1010,strPercentage:"0,24%",blnEpc:true,strEpcValue:"14 USD",blnUp:true},

  ]

  arrService = [
    {"strType":"Adservice","strClicks":450,"strValue":"2,50%","strValueStatus":"UP"},
    {"strType":"Adrecord","strClicks":380,"strValue":"2,35%","strValueStatus":"UP"},
    {"strType":"MasOffer","strClicks":920,"strValue":"1,20%","strValueStatus":"DOWN"},
    {"strType":"WealthFront","strClicks":930,"strValue":"","strValueStatus":"CONNECT"},
    {"strType":"Grovia","strClicks":465,"strValue":"","strValueStatus":"CONNECT"},

  ]

  /**
   * table header
   */
  cols = [
    { field: 'strType', header: 'Type' },
    { field: 'strClicks', header: 'Clicks' },
    { field: 'strValue', header: '' },
];

  constructor() {
   
   }

  ngOnInit(): void {

  }

}
