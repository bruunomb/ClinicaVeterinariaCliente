import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieDetailsComponent } from './especie-details.component';

describe('EspecieDetailsComponent', () => {
  let component: EspecieDetailsComponent;
  let fixture: ComponentFixture<EspecieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
