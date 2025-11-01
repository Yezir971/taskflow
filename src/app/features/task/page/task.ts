import { Component, computed, inject, input, Signal } from '@angular/core';
import { TaskStore } from '../../../core/service/task-store/task-store';
import { Header } from '../../dashboard/components/header/header';
import { MatTabsModule } from '@angular/material/tabs';
import { Table } from '../components/table/table';
import { TaskStoreModel } from '../../../core/service/task-store/task-store-models';

@Component({
  selector: 'app-task',
  imports: [Header, MatTabsModule, Table],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  dataStore = inject(TaskStore);
  listeTasks: Signal<TaskStoreModel[]> = this.dataStore.getTaskStore();
  taskInProgress: Signal<TaskStoreModel[]> = computed(() =>
    this.listeTasks().filter((element) => element.status === 'En cours')
  );
  taskDoit: Signal<TaskStoreModel[]> = computed(() =>
    this.listeTasks().filter((element) => element.status === 'Terminé')
  );
  taskTodo: Signal<TaskStoreModel[]> = computed(() =>
    this.listeTasks().filter((element) => element.status === 'À faire')
  );
}
