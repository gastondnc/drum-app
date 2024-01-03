import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDrumComponent } from './start-drum.component';

describe('StartDrumComponent', () => {
  let component: StartDrumComponent;
  let fixture: ComponentFixture<StartDrumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartDrumComponent]
    });
    fixture = TestBed.createComponent(StartDrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
