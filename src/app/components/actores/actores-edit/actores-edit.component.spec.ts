import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresEditComponent } from './actores-edit.component';

describe('ActoresEditComponent', () => {
  let component: ActoresEditComponent;
  let fixture: ComponentFixture<ActoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
