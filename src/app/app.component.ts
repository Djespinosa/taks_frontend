import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskListComponent, HttpClientModule],
  template: `
    <main class="min-h-screen bg-gray-100">
      <app-task-list></app-task-list>
    </main>
  `
})
export class AppComponent {
  title = 'task-manager';
}
