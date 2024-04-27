import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summary5Component } from './summary-5.component';

describe('Summary5Component', () => {
  let component: Summary5Component;
  let fixture: ComponentFixture<Summary5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Summary5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Summary5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
