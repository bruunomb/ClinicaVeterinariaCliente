import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieCadastrarComponent } from './especie-cadastrar.component';

describe('EspecieCadastrarComponent', () => {
  let component: EspecieCadastrarComponent;
  let fixture: ComponentFixture<EspecieCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecieCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
