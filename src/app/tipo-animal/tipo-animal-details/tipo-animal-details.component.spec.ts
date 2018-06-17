import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnimalDetailsComponent } from './tipo-animal-details.component';

describe('TipoAnimalDetailsComponent', () => {
  let component: TipoAnimalDetailsComponent;
  let fixture: ComponentFixture<TipoAnimalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAnimalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
