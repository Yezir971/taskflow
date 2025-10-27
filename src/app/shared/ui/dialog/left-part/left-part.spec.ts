import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPart } from './left-part';

describe('LeftPart', () => {
  let component: LeftPart;
  let fixture: ComponentFixture<LeftPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftPart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftPart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
