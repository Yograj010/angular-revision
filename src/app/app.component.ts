import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRevision';
  show:boolean = true;
  showVal:String = 'yes';
  color:String = 'blue';
}
