import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 30;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Nadar'];
  car = {
    name: 'Polo',
    year: 2019,
  };
}
