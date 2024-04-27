import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay6Component } from './pay-6.component';

describe('Pay6Component', () => {
  let component: Pay6Component;
  let fixture: ComponentFixture<Pay6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pay6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
