import { Component, input, Signal, AfterViewInit, ViewChild, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TaskStoreModel } from '../../../../core/service/task-store/task-store-models';
import { TaskStore } from '../../../../core/service/task-store/task-store';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatIcon, MatButtonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
})
export class Table implements AfterViewInit {
  taskService = inject(TaskStore);
  displayedColumns: string[] = ['title', 'priority', 'status', 'date', 'assign', 'action'];
  datas = input.required<TaskStoreModel[]>();

  dataSource = new MatTableDataSource<TaskStoreModel>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    // Reactively update MatTableDataSource when signal changes
    effect(() => {
      const tasks = this.datas();
      this.dataSource.data = tasks;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  delete = (item: number) => {
    console.log(item);
    this.taskService.removeItem(item);
  };
}
