import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title="my-first-app";
  username="";


onUpdateUserName(event:Event){
  this.username=(<HTMLInputElement>event.target).value;

}
}