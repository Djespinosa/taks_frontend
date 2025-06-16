import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Agregar Nueva Tarea</h2>
      
      @if (errorMessage) {
        <div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ errorMessage }}
        </div>
      }
      
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          id="title"
          [(ngModel)]="title"
          name="title"
          required
          class="input w-full"
          placeholder="Ingrese el título de la tarea"
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          id="description"
          [(ngModel)]="description"
          name="description"
          rows="3"
          class="input w-full"
          placeholder="Ingrese la descripción de la tarea"
        ></textarea>
      </div>

      <button
        type="submit"
        class="btn btn-primary w-full"
        [disabled]="!title.trim() || isSubmitting"
      >
        {{ isSubmitting ? 'Agregando...' : 'Agregar Tarea' }}
      </button>
    </form>
  `
})
export class AddTaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();
  
  title = '';
  description = '';
  errorMessage = '';
  isSubmitting = false;

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (this.title.trim()) {
      this.isSubmitting = true;
      this.errorMessage = '';
      
      this.taskService.createTask({
        title: this.title,
        description: this.description,
        completed: false
      }).subscribe({
        next: () => {
          this.title = '';
          this.description = '';
          this.taskAdded.emit();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.errorMessage = error.message || 'Error al crear la tarea. Por favor, intente nuevamente.';
          this.isSubmitting = false;
        }
      });
    }
  }
} 