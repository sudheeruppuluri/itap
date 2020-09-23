import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselParticularsComponent } from './vessel-particulars.component';

describe('VesselParticularsComponent', () => {
  let component: VesselParticularsComponent;
  let fixture: ComponentFixture<VesselParticularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselParticularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselParticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
