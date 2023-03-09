import { Component } from '@angular/core';
import { TasksService } from '../../tasks/services/tasks.service';

@Component({
  selector: 'isdi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  tasksNumber: number;
  constructor(public service: TasksService) {
    this.tasksNumber = 0;
    service.tasks$.subscribe((data) => (this.tasksNumber = data.length));
  }
}
