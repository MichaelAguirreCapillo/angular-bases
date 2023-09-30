import {Component} from '@angular/core';
@Component({
    selector:'app-counter',
    template:`
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="decrementBy()">-1</button>
    `,
    styleUrls:[]
})

export class CounterComponent{
    public title:string = 'Hola mundo';
    public counter:number = 20;
  
    increaseBy():void{
      this.counter += 1;
    }
  
    decrementBy():void{
      this.counter -= 1;
    }
  
    resetCounter():void{
      this.counter = 20;
    }
}