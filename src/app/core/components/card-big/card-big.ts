import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, input, TemplateRef } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-card-big',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './card-big.html',
  styleUrl: './card-big.css',
})
export class CardBig {
  readonly titleBigCard = input<string>('Le titre de la big card');
}
