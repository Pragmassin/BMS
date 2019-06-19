import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormasterComponent } from './vendormaster.component';

describe('VendormasterComponent', () => {
  let component: VendormasterComponent;
  let fixture: ComponentFixture<VendormasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendormasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
