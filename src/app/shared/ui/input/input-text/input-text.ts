import { Component, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './input-text.html',
  styleUrls: ['./input-text.css'],
})
export class InputText {
  readonly label = input<string>('Label non défini');
  readonly placehold = input<string>('Placeholder non défini');
  readonly value = input<string>('');
  readonly texteValue = output<string>();

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.texteValue.emit(val);
  }
}
