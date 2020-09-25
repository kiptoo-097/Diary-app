import { Component } from '@angular/core';
import { Input } from './input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  numCount: number = 0;
  myInput: Input = new Input();
  diaryInput: Input[]=[];

  save(){
    this.myInput.id = this.numCount++;
    this.diaryInput.push(this.myInput);
    this.myInput = new Input()
  }

  remove(input){
      this.diaryInput = this.diaryInput.filter(x=>x.id!==input.id);
  }

  get entries(){
    return this.diaryInput;
  }
}
