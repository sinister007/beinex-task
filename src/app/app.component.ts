import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    this.blnShowOverView = true
  }
}
