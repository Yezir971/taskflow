import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataPick } from './input-data-pick';

describe('InputDataPick', () => {
  let component: InputDataPick;
  let fixture: ComponentFixture<InputDataPick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDataPick]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDataPick);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
