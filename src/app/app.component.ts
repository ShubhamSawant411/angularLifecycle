import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isComponents: boolean = true;
  title = 'lifecycle';

  changeComponent(){
    this.isComponents=!this.isComponents;
  }
}
