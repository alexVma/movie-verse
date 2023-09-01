import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMedioComponent } from './formulario-medio.component';

describe('FormularioMedioComponent', () => {
  let component: FormularioMedioComponent;
  let fixture: ComponentFixture<FormularioMedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioMedioComponent]
    });
    fixture = TestBed.createComponent(FormularioMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
