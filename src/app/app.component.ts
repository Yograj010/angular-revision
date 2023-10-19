import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRevision';
  name:string = "Peter";
  isDisabled:boolean=true;
  changeVal(){
    this.isDisabled = !this.isDisabled;
  }
}
