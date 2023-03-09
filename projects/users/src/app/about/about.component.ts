import { Component } from '@angular/core';
import { TasksService } from '../tasks/services/tasks.service';

@Component({
  selector: 'isdi-about',
  template: ` <p>about works!</p> `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(public service: TasksService) {
    this.service.greetings();
  }
}
