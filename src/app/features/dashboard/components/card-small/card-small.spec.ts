import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmall } from './card-small';

describe('CardSmall', () => {
  let component: CardSmall;
  let fixture: ComponentFixture<CardSmall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSmall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSmall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
