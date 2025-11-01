import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBig } from './card-big';

describe('CardBig', () => {
  let component: CardBig;
  let fixture: ComponentFixture<CardBig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
