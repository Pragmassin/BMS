import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillScheduleComponent } from './bill-schedule.component';

describe('BillScheduleComponent', () => {
  let component: BillScheduleComponent;
  let fixture: ComponentFixture<BillScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
