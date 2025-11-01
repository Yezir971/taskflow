import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AddTask } from '../../button/add-task/add-task';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { InputText } from '../../input/input-text/input-text';
import { InputSelect } from '../../input/input-select/input-select';
import { STATUS } from '../../input/input-select/models/status.model';
import { PRIORITY } from '../../input/input-select/models/priority.model';
import { InputDataPick } from '../../input/input-data-pick/input-data-pick';
import { InputTextArea } from '../../input/input-text-area/input-text-area';
import { LeftPart } from '../left-part/left-part';
import { MessageErrorFormPipe } from '../../../../core/pipe/message-error-form-pipe';
import { TaskStore } from '../../../../core/service/task-store/task-store';

@Component({
  selector: 'app-add-task-dialog',
  imports: [
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatIcon,
    MatCardModule,
    InputText,
    InputSelect,
    InputDataPick,
    InputTextArea,
    LeftPart,
    MessageErrorFormPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.css',
})
export class AddTaskDialog {
  readonly dialogRef = inject(MatDialogRef<AddTask>);
  taskService = inject(TaskStore);
  status = STATUS;
  priority = PRIORITY;
  textValue = signal<string>('');

  profileForm = new FormGroup({
    title: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    assign: new FormControl('', Validators.required),
    date: new FormControl<{ start?: Date; end?: Date } | ''>('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.profileForm.invalid) return;
    const task = this.profileForm.value;
    this.taskService.addNewItem(task);

    // let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // localStorage.setItem('tasks', JSON.stringify([this.profileForm.value, ...tasks]));
  }

  onTitreChange(value: string) {
    this.profileForm.get('title')?.setValue(value);
  }
  onPriorityChange(value: string) {
    this.profileForm.get('priority')?.setValue(value);
    console.log(this.profileForm.value);
  }
  onStatusChange(value: string) {
    this.profileForm.get('status')?.setValue(value);
  }
  onAsignChange(value: string) {
    this.profileForm.get('assign')?.setValue(value);
  }
  onDateChange(value: { start?: Date; end?: Date }) {
    this.profileForm.get('date')?.setValue(value);
  }
  onDescriptionChange(value: string) {
    this.profileForm.get('description')?.setValue(value);
  }
}
