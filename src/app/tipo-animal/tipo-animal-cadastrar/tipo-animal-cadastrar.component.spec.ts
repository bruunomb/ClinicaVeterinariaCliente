import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnimalCadastrarComponent } from './tipo-animal-cadastrar.component';

describe('TipoAnimalCadastrarComponent', () => {
  let component: TipoAnimalCadastrarComponent;
  let fixture: ComponentFixture<TipoAnimalCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAnimalCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnimalCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
