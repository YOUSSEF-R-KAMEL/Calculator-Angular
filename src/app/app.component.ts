import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = '';

  getAction(item: string){
    this.result += item
  }

  equalAction(){
    this.result = eval(this.result).toFixed(2)
  }

  resetAction(){
    this.result = ''
  }
}
