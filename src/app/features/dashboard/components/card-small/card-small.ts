import { Component, input, InputSignal } from '@angular/core';
import { InfoCardSmall } from './models/info-card-small';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-small',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, NgClass],
  templateUrl: './card-small.html',
  styleUrl: './card-small.css'
})
export class CardSmall {
  itemCollection: InputSignal<InfoCardSmall> = input.required<InfoCardSmall>();
  

}
