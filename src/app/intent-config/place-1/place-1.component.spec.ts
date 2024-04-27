import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Place1Component } from './place-1.component';

describe('Place1Component', () => {
  let component: Place1Component;
  let fixture: ComponentFixture<Place1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Place1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Place1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
