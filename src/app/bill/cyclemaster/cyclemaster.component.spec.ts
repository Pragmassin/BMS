import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclemasterComponent } from './cyclemaster.component';

describe('CyclemasterComponent', () => {
  let component: CyclemasterComponent;
  let fixture: ComponentFixture<CyclemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
