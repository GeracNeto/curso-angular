import { Component } from '@angular/core';
import { Names } from 'src/app/Names';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css'],
})
export class ListNamesComponent {
  names: Names[] = [];

  constructor(private listService: ListService) {
    this.getNames();
  }

  getNames(): void {
    this.listService.getNamesAPI().subscribe((names) => (this.names = names));
  }
}
