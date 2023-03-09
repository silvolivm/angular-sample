import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Son los que tienen contenido y pueden transmitirlo
import { Task } from '../models/task.model';
import { getTasks } from './mock.data';

// Decorador especial de los servicios para que se haga la inyeccion Single Tone
@Injectable({
  providedIn: 'root', // El proveedor por defecto es el modulo principal
})
export class TasksService {
  tasks$: BehaviorSubject<Task[]>; // Con el $ indicamos que es un obserbable. Es un proveedor
  constructor() {
    const initialTask: Task[] = [];
    this.tasks$ = new BehaviorSubject(initialTask); // Guarda cosas y cuando algo cambia, le avisa a todos sus suscriptores de que algo cambio
    getTasks().then((tasks) => this.tasks$.next(tasks)); // Mis suscriptores pueden pintar o hacer lo que necesiten con la info
  }

  greetings() {
    console.log('HOLA! :)');
  }

  handleAdd(task: Task) {
    this.tasks$.value.push(task);
    this.tasks$.next(this.tasks$.value); // Este next lo puede escuchar quien sea que se suscriba
    console.log(this.tasks$);
  }
}
