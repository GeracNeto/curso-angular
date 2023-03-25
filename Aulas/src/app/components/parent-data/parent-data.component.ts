import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent {
  /* Se eu inciar o dado como a variável 'name" sem nada,
     apenas para inicializar funciona. Como também, se eu
     colocar um '!' no final do nome da variável também funciona
  */
  @Input() name: string = '';
  @Input() userData!: { email: string; role: string };
}
