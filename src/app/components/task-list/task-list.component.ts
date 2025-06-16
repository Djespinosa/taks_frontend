import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskFormComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-center">Gestor de Tareas</h1>
      
      <app-add-task-form (taskAdded)="loadTasks()"></app-add-task-form>
      
      <div class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Mis Tareas</h2>
        <div class="space-y-4">
          @for (task of tasks; track task.id) {
            <app-task-item
              [task]="task"
              (statusChanged)="loadTasks()"
              (taskDeleted)="loadTasks()"
            ></app-task-item>
          }
        </div>
      </div>
    </div>
  `
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
} 