import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderConfigComponent } from './reminder-config.component';

describe('ReminderConfigComponent', () => {
  let component: ReminderConfigComponent;
  let fixture: ComponentFixture<ReminderConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
