import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasFilterComponent } from './peliculas-filter.component';

describe('PeliculasFilterComponent', () => {
  let component: PeliculasFilterComponent;
  let fixture: ComponentFixture<PeliculasFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
