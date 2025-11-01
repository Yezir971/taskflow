import { Component, input, Signal } from '@angular/core';
import { TaskStoreModel } from '../../../../core/service/task-store/task-store-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  datas = input.required<() => TaskStoreModel[]>();
}
