import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-left-part',
  imports: [CommonModule],
  templateUrl: './left-part.html',
  styleUrl: './left-part.css',
})
export class LeftPart {
  dataTask = input<FormGroup>();

}
