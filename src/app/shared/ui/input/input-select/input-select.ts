import { Component, input, output } from '@angular/core';
import { Status } from './models/status.model';
import { Priority } from './models/priority.model';

@Component({
  selector: 'app-input-select',
  imports: [],
  templateUrl: './input-select.html',
  styleUrl: './input-select.css',
})
export class InputSelect {
  label = input<string>('Aucun');
  option = input<(Status | Priority)[]>([]);
  readonly selectValue = output<string>();

  onSelect(event: Event){
    const val = (event.target as HTMLSelectElement).value;
    this.selectValue.emit(val);
  }

}
