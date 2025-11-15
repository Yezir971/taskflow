import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskStore } from '../../../../core/service/task-store/task-store';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogContent,
  MatDialogClose,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddTask } from '../../button/add-task/add-task';
import { STATUS } from '../../input/input-select/models/status.model';
import { PRIORITY } from '../../input/input-select/models/priority.model';
import { MatDivider } from '@angular/material/divider';
import { LeftPart } from '../left-part/left-part';
import { InputTextArea } from '../../input/input-text-area/input-text-area';
import { MatIcon } from '@angular/material/icon';
import { InputText } from '../../input/input-text/input-text';
import { InputSelect } from '../../input/input-select/input-select';
import { InputDataPick } from '../../input/input-data-pick/input-data-pick';
import { MessageErrorFormPipe } from '../../../../core/pipe/message-error-form-pipe';
import { MatAnchor, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-edit-task-dialog',
  imports: [
    ReactiveFormsModule,
    MatDivider,
    MatDialogActions,
    LeftPart,
    InputTextArea,
    MatIcon,
    MatDialogContent,
    InputText,
    InputSelect,
    InputDataPick,
    MessageErrorFormPipe,
    MatDialogClose,
    MatAnchor,
    MatIconButton,
  ],
  templateUrl: './edit-task-dialog.html',
  styleUrl: './edit-task-dialog.css',
})
export class EditTaskDialog {
  readonly dialogRef = inject(MatDialogRef<AddTask>);
  taskService = inject(TaskStore);
  status = STATUS;
  priority = PRIORITY;
  textValue = signal<string>('');
  public data = inject(MAT_DIALOG_DATA);
  constructor() {
    const task = this.getTaskById(this.data.item);
    if (task) {
      this.profileForm.patchValue({
        title: task.title ?? '',
        priority: task.priority ?? '',
        status: task.status ?? '',
        assign: task.assign ?? '',
        date: task.date ?? '',
        description: task.description ?? '',
      });
    }
  }

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
  getTaskById(id: number) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks.find((task: any) => task.id === id);
  }

  onTitreChange(value: string) {
    this.profileForm.get('title')?.setValue(value);
  }
  onPriorityChange(value: string) {
    this.profileForm.get('priority')?.setValue(value);
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
