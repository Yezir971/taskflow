import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'messageErrorForm',
  pure: false,
})
export class MessageErrorFormPipe implements PipeTransform {
  transform(form: FormGroup, types: string[]): string | null {
    const messages: string[] = [];

    types.forEach((name) => {
      const control = form.get(name);
      if (!control) return;
      if (control.errors) {
        messages.push(name);
      }
    });

    if (messages.length === 0) return null;

    if (messages.length > 1) {
      return `Les champs ${messages.join(' et ')} sont vides`;
    }
    return `Le champ ${messages} est vide`;
  }
}
