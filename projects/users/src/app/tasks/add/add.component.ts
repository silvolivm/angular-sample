import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  isDisplayForm: boolean;
  newTaskForm: FormGroup; // Lo de gruop es porque los formularios reactivos pueden hacerse muy complejos y tener diferentes grupos
  @Output() onAdd: EventEmitter<Task>;

  constructor(public fb: FormBuilder, public service: TasksService) {
    this.isDisplayForm = false;
    this.newTaskForm = fb.group({
      title: ['Nueva tarea', [Validators.required]], // Cada campo del form es un form control. Le podes poner valores por defecto
      // El validators son todo lo que queremos que valide. Es un array porque pueden ser varias cosas o una sola
      owner: ['', [Validators.required]],
    }); // FormBuilder es un factory. Le pediremos que nos cree un grupo
    this.onAdd = new EventEmitter();
  }

  handleSubmit() {
    const newTask: Task = {
      id: 3, // Es un ejemplo, se haría un random para id's
      title: this.newTaskForm.value.title, // Para acceder al valor ingresado en el form
      owner: this.newTaskForm.value.owner,
      isComplete: false,
    };
    //this.onAdd.next(newTask); Se lo quito para usar el metodo desde el service
    this.service.handleAdd(newTask);
    this.newTaskForm.reset(); // Limpia el formulario
  }
}
