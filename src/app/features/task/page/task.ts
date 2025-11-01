import { Component, computed, inject } from '@angular/core';
import { TaskStore } from '../../../core/service/task-store/task-store';
import { Header } from '../../dashboard/components/header/header';
import { MatTabsModule } from '@angular/material/tabs';
import { Table } from '../components/table/table';

@Component({
  selector: 'app-task',
  imports: [Header, MatTabsModule, Table],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  dataStore = inject(TaskStore);
  listeTasks = this.dataStore.getTaskStore();
  taskInProgress = computed(() =>
    this.listeTasks().filter((element: { status: string }) => element.status === 'En cours')
  );
  taskDoit = computed(() =>
    this.listeTasks().filter((element: { status: string }) => element.status === 'Terminé')
  );
  taskTodo = computed(() =>
    this.listeTasks().filter((element: { status: string }) => element.status === 'À faire')
  );
}
