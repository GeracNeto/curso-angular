import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MessagesService } from 'src/app/services/messages.service';

import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  btnText: string = 'Compartilhar!';

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    // TODOS

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Momento Adicionado com Sucesso');

    this.router.navigate(['/']);
  }
}
