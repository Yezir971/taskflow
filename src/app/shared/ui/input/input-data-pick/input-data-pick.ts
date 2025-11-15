import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-input-data-pick',
  templateUrl: './input-data-pick.html',
  styleUrl: './input-data-pick.css',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDataPick {
  readonly label = input<string>('aucun label défini');
  readonly range = input<{ start?: Date; end?: Date } | null>(null);
  readonly dataPickValue = output<{ start?: Date; end?: Date }>();

  
  
  private selectedRange: { start?: Date; end?: Date } = {};
  onDataPickChange(event: MatDatepickerInputEvent<Date>, type: 'start' | 'end') {
    this.selectedRange[type] = event.value ?? undefined;

    this.dataPickValue.emit(this.selectedRange);
  }
}
