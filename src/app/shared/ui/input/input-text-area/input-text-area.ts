import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  imports: [],
  templateUrl: './input-text-area.html',
  styleUrl: './input-text-area.css',
})
export class InputTextArea {
  readonly label = input<string>('Label non défini');
  readonly placehold = input<string>('Placeholder non défini');
  readonly value = input<string>('');
  readonly textArea = output<string>();

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.textArea.emit(val);
  }
}
