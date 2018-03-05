import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPiloteComponent } from './consultation-pilote.component';

describe('ConsultationPiloteComponent', () => {
  let component: ConsultationPiloteComponent;
  let fixture: ComponentFixture<ConsultationPiloteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationPiloteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationPiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
