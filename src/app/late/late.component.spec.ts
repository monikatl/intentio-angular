import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateComponent } from './late.component';

describe('LateComponent', () => {
  let component: LateComponent;
  let fixture: ComponentFixture<LateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
