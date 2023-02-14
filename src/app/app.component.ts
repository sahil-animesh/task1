import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag=false;
  res={};
  val="stretch"
  onClick() {
    if(this.val=="stretch")
    {
      this.val="collapse"
      this.flag=true;
    }
    else
    {
      this.val="stretch"
      this.flag=false
    }
  }

}
