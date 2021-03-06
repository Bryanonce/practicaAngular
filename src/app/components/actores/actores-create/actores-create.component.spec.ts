import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresCreateComponent } from './actores-create.component';

describe('ActoresCreateComponent', () => {
  let component: ActoresCreateComponent;
  let fixture: ComponentFixture<ActoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
