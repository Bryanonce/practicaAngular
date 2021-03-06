import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresFormComponent } from './actores-form.component';

describe('ActoresFormComponent', () => {
  let component: ActoresFormComponent;
  let fixture: ComponentFixture<ActoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
