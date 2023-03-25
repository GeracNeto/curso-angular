import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  showAnimalDetails: string = '';

  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  onHandleShowAge(animal: Animal) {
    this.showAnimalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((item) => item.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
