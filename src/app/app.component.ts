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
  /**
   * key to show or hide menu
   */
  blnShowMenu:boolean = true
  /**
   * key to show overview menu
   */
  blnShowOverView:boolean = false


  /**
   * show over view menu
   */
  showOverview(){
    this.blnShowOverView = true
    this.objRouter.navigate(['/overview'])
  }
  /**
   * show hide menu
   */
  showHideMenu(){
    this.blnShowMenu = !this.blnShowMenu
  }
}
