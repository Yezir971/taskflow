import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialog } from '../../dialog/add-task-dialog/add-task-dialog';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTask {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddTaskDialog, {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
