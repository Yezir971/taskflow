import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskStore {
  private taskStore = signal(JSON.parse(localStorage.getItem('tasks') ?? '[]'));

  getTaskStore = () => {
    return this.taskStore;
  };
  private setTaskStore = (item: any) => {
    this.taskStore.update((tasks) => [...tasks, item]);
  };
  private addToLocalStoreage = (item: any) => {
    localStorage.setItem('tasks', JSON.stringify([...this.getTaskStore()(), item]));
  };
  addNewItem = (item: any) => {
    this.setTaskStore(item);
    this.addToLocalStoreage(item);
  };
  removeItem = () => {};
}
