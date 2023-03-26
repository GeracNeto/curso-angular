import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Repo } from 'src/app/Repo';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  repos: Repo[] = [];

  userForm!: FormGroup;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.userForm.get('name')!;
  }

  async submit() {
    if (this.userForm.invalid) {
      return;
    }

    const { name } = this.userForm.value;

    await this.githubService
      .search(name)
      .subscribe((repos) => (this.repos = repos));

  }
}
