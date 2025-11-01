import { Injectable, signal, WritableSignal } from '@angular/core';
import { TaskStoreModel } from './task-store-models';

@Injectable({
  providedIn: 'root',
})
export class TaskStore {
  private taskStore = signal(JSON.parse(localStorage.getItem('tasks') ?? '[]'));

  getTaskStore = (): WritableSignal<TaskStoreModel[]> => {
    return this.taskStore;
  };
  private setTaskStore = (item: any) => {
    this.taskStore.update((tasks) => [...tasks, item]);
  };
  private addToLocalStoreage = (item: any) => {
    localStorage.setItem('tasks', JSON.stringify([...this.getTaskStore()(), item]));
  };
  addNewItem = (item: any) => {
    this.setTaskStore({ ...item, id: this.taskStore().length });
    this.addToLocalStoreage({ ...item, id: this.taskStore().length });
  };
  private updateTaskStore = (item: any) => {
    this.taskStore.set(item);
  };
  removeItem = (item: number) => {
    let listeArr = this.taskStore();
    let newList = listeArr.filter((element: any) => element.id !== item);
    localStorage.setItem('tasks', JSON.stringify(newList));
    this.updateTaskStore(newList);
  };
}
