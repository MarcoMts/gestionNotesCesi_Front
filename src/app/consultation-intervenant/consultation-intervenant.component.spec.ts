import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationIntervenantComponent } from './consultation-intervenant.component';

describe('ConsultationIntervenantComponent', () => {
  let component: ConsultationIntervenantComponent;
  let fixture: ComponentFixture<ConsultationIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
