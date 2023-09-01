import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioADemandaComponent } from './formulario-a-demanda.component';

describe('FormularioADemandaComponent', () => {
  let component: FormularioADemandaComponent;
  let fixture: ComponentFixture<FormularioADemandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioADemandaComponent]
    });
    fixture = TestBed.createComponent(FormularioADemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
