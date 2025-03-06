import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAlApiComponent } from './busqueda-al-api.component';

describe('BusquedaAlApiComponent', () => {
  let component: BusquedaAlApiComponent;
  let fixture: ComponentFixture<BusquedaAlApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusquedaAlApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaAlApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
