import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
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

  /**
   * array of services
   */
  arrService = [
    {"strType":"Adservice","strClicks":450,"strValue":"2,50%","strValueStatus":"UP"},
    {"strType":"Adrecord","strClicks":380,"strValue":"2,35%","strValueStatus":"UP"},
    {"strType":"MasOffer","strClicks":920,"strValue":"1,20%","strValueStatus":"DOWN"},
    {"strType":"WealthFront","strClicks":930,"strValue":"","strValueStatus":"CONNECT"},
    {"strType":"Grovia","strClicks":465,"strValue":"","strValueStatus":"CONNECT"},

  ]
  /**
   * tab index to know and render the charts 
   */
  intTabIndex:number = 0

  /**
   * chart 0 options and series
   */
  chart0Options = {
    chart:<any> {
      type: "area",
      height: 70,
      width: 300,
      toolbar:false,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: '2px',
      curve: 'straight',
    }
  };
  chart0Series = [
    {
      name: "over view",
      data: [10,50,35,45,60,40,20,75 ]
    }
  ];
  /**
   * chart 1 options and series
   */
  chart1Options = {
    chart:<any> {
      type: "area",
      height: 350,
      toolbar:false,

    },
  };
  chart1Series = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ];

  /**
   * chart 2 options and series
   */
  chart2Options = {
    chart:<any> {
      type: "area",
      height: 350,
      toolbar:false,

    },
  };

  chart2Series = [
    {
      name: "Series 2",
      data: [11, 32, 45, 32, 34, 52, 41, 55, 67]
    }
  ];
   /**
   * chart 3 options and series
   */
   chart3Options = {
    chart:<any> {
      type: "area",
      height: 350,
      toolbar:false
    },
  };

  chart3Series = [
    {
      name: "Series 3",
      data: [20, 50, 120, 40, 70, 10, 80, 45, 20]
    }
  ];
   /**
   * chart 4 options and series
   */
   chart4Options = {
    chart:<any> {
      type: "area",
      height: 350,
      toolbar:false

    },
  };

  chart4Series = [
    {
      name: "Series 4",
      data: [22, 54, 80, 10, 50, 20, 60, 7, 42]
    }
  ];
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
    
  onTabChange(event: any): void {
    this.intTabIndex = event.index
  }
    
    
   

}
