import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesCreateComponent } from './cines-create.component';

describe('CinesCreateComponent', () => {
  let component: CinesCreateComponent;
  let fixture: ComponentFixture<CinesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
