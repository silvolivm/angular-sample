import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, ListComponent, AddComponent, CardComponent],
  imports: [CommonModule, TasksRoutingModule, ReactiveFormsModule],
})
export class TasksModule {}
