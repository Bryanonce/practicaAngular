import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresIndexComponent } from './actores-index.component';

describe('ActoresIndexComponent', () => {
  let component: ActoresIndexComponent;
  let fixture: ComponentFixture<ActoresIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
