import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsoundsComponent } from './btnsounds.component';

describe('BtnsoundsComponent', () => {
  let component: BtnsoundsComponent;
  let fixture: ComponentFixture<BtnsoundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnsoundsComponent]
    });
    fixture = TestBed.createComponent(BtnsoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
