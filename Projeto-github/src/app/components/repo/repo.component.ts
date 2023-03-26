import { Component, Input } from '@angular/core';

import { Repo } from 'src/app/Repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent {
  @Input() repo!: Repo;
}
