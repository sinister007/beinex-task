import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private objRouter:Router
  ){

  }
  title = 'angular-task';
  showFiller = false;
  /**
   * key to show overview menu
   */
  blnShowOverView:boolean = false


  /**
   * show over view menu
   */
  showOverview(){
    debugger
    this.blnShowOverView = true
    this.objRouter.navigate(['/dashboard'])
  }
}
