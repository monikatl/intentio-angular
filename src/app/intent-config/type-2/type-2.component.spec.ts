import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2Component } from './type-2.component';

describe('Type2Component', () => {
  let component: Type2Component;
  let fixture: ComponentFixture<Type2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Type2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Type2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
