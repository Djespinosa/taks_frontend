import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <input
          type="checkbox"
          [checked]="task.completed"
          (change)="toggleStatus()"
          class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <div [class.line-through]="task.completed" [class.text-gray-500]="task.completed">
          <h3 class="text-lg font-medium">{{ task.title }}</h3>
          <p class="text-gray-600">{{ task.description }}</p>
        </div>
      </div>
      <button
        (click)="deleteTask()"
        class="btn btn-danger"
      >
        Eliminar
      </button>
    </div>
  `
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() statusChanged = new EventEmitter<void>();
  @Output() taskDeleted = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  toggleStatus(): void {
    this.taskService.updateTaskStatus(this.task.id, !this.task.completed)
      .subscribe(() => {
        this.statusChanged.emit();
      });
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id)
      .subscribe(() => {
        this.taskDeleted.emit();
      });
  }
} 