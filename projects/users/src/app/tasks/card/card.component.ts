import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'isdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('item') task!: Task;
  @Output() onDelete: EventEmitter<number>; // Pueden subir hacia el padre. Hay que siempre ponerle un tipo de lo que va a enviar
  @Output() onChange: EventEmitter<Task>;

  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
  }

  handleDelete() {
    console.log('Borrando...', this.task.id);
    this.onDelete.next(this.task.id); // Cuando alguien haga click en el evento tarjeta emitirá
  }

  handleChange() {
    console.log(this.task.isComplete);
    this.task.isComplete = !this.task.isComplete;
    this.onChange.next(this.task);
  }
}
