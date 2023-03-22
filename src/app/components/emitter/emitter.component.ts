import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {

  myNumber = 0

  onChangeNumber() {
    console.log('Deu certo');
    this.myNumber += 1
  }
}
