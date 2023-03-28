import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent {
  baseApiUrl = environment.baseApiUrl;
  moment?: Moment;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }
}
