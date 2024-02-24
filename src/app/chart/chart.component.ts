import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnChanges {

    @Input() sparkline:boolean = false
    @Input() type:string=""

  constructor(
    private objChRef:ChangeDetectorRef
  ) {}

  ngOnInit() {
    // let options = {
    //     chart: {
    //         height: 70,
    //         width: 300,
    //         type: this.type,
    //         sparkline: {
    //           enabled: true
    //         }
    //       },
      
    // //   title: { text: 'Apex Charts' },
    //   series: [
    //     {
    //       data: [
            
    //         10,
    //         50,
    //         35,
    //         45,
    //         60,
    //         40,
    //         20,
    //         75,
           
    //       ]
    //     },
   
    //   ],
    // //   xaxis: {
    // //     axisTicks: { show: false }
    // //   },
    // //   yaxis: [
    // //     {
    // //       title: {
    // //         text: 'Title1'
    // //       },
    // //       axisBorder: {
    // //         show: false,
    // //         color: '#0f0ffa'
    // //       },
    // //       axisTicks: {
    // //         show: false,
    // //         color: '#0f0ffa'
    // //       },
    // //       labels: {
    // //         formatter: (label: any) => `000${label}`
    // //       }
    // //     },
    // //     {
    // //       title: {
    // //         text: 'Title2'
    // //       },
    // //       axisBorder: {
    // //         show: true,
    // //         color: '#fa0f0f'
    // //       },
    // //       axisTicks: {
    // //         show: true,
    // //         color: '#fa0f0f'
    // //       },
    // //       opposite: true
    // //     }
    // //   ],
    // //   colors: ['#0f0ffa', '#fa0f0f'],
    // //   markers: {
    // //     size: 3
    // //   },
    // //   dataLabels: {
    // //     enabled: true,
    // //     textAnchor: 'middle',
    // //     offsetY: -5
    // //   },
    //   stroke: {
    //     width: 2,
    //     curve: 'straight',
    //   }
    // };

    // let chart = new ApexCharts(document.querySelector('#chart'), options);

    // chart.render();
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.type);
    console.log(this.sparkline);
    
    
    if(this.sparkline){
        let options = {
            chart: {
                height: 70,
                width: 300,
                type: this.type,
                sparkline: {
                  enabled: this.sparkline
                }
              },
          series: [
            {
              data: [
                
                10,
                50,
                35,
                45,
                60,
                40,
                20,
                75,
               
              ]
            },
       
          ],
        //   xaxis: {
        //     axisTicks: { show: false }
        //   },
        //   yaxis: [
        //     {
        //       title: {
        //         text: 'Title1'
        //       },
        //       axisBorder: {
        //         show: false,
        //         color: '#0f0ffa'
        //       },
        //       axisTicks: {
        //         show: false,
        //         color: '#0f0ffa'
        //       },
        //       labels: {
        //         formatter: (label: any) => `000${label}`
        //       }
        //     },
        //     {
        //       title: {
        //         text: 'Title2'
        //       },
        //       axisBorder: {
        //         show: true,
        //         color: '#fa0f0f'
        //       },
        //       axisTicks: {
        //         show: true,
        //         color: '#fa0f0f'
        //       },
        //       opposite: true
        //     }
        //   ],
        //   colors: ['#0f0ffa', '#fa0f0f'],
        //   markers: {
        //     size: 3
        //   },
        //   dataLabels: {
        //     enabled: true,
        //     textAnchor: 'middle',
        //     offsetY: -5
        //   },
          stroke: {
            width: 2,
            curve: 'straight',
          }
        };
    
        let chart = new ApexCharts(document.querySelector('#chart'), options);
    
        chart.render();
    }else{
      setTimeout(() => {
        
        let options = {
            chart: {
                // height: 70,
                // width: 300,
                type: this.type,
                sparkline: {
                  enabled: this.sparkline
                }
              },
          series: [
            {
              data: [
                
                10,
                50,
                35,
                45,
                60,
                40,
                20,
                75,
               
              ]
            },
       
          ],
          xaxis: {
            axisTicks: { show: true }
          },
          yaxis: [
            {
              title: {
                text: 'Title1'
              },
              axisBorder: {
                show: true,
                color: '#0f0ffa'
              },
              axisTicks: {
                show: true,
                color: '#0f0ffa'
              },
              labels: {
                // formatter: (label: any) => `000${label}`
              }
            },
            {
              title: {
                text: 'Title2'
              },
              axisBorder: {
                show: true,
                color: '#fa0f0f'
              },
              axisTicks: {
                show: true,
                color: '#fa0f0f'
              },
              opposite: true
            }
          ],
          colors: ['#0f0ffa', '#fa0f0f'],
          markers: {
            size: 3
          },
          dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            offsetY: -5
          },
          stroke: {
            width: 2,
            curve: 'straight',
          }
        };
    
        let chart = new ApexCharts(document.querySelector('#chart'), options);
    
        chart.render(); 
      }, );
    }
  }
}

