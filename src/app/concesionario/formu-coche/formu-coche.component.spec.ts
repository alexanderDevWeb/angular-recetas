import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuCocheComponent } from './formu-coche.component';

describe('FormuCocheComponent', () => {
  let component: FormuCocheComponent;
  let fixture: ComponentFixture<FormuCocheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuCocheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
