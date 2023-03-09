import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { getTasks } from '../services/mock.data';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'isdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[];
  constructor(public service: TasksService) {
    // Inyeccion de dependencia
    this.tasks = []; // Initial State
  }

  async ngOnInit(): Promise<void> {
    // Asi nos suscribimos al elemento y se actualiza la lista
    // Las suscripciones son como el then de una promesa, pero se ejecuta cada vez que los datos cambian
    this.service.tasks$.subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  // Ejemplo sin la suscripción
  handleDelete(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  handleChange(task: Task) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
  }

  handleAdd(task: Task) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
}
