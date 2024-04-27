import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleMassComponent } from './add-schedule-mass.component';

describe('AddScheduleMassComponent', () => {
  let component: AddScheduleMassComponent;
  let fixture: ComponentFixture<AddScheduleMassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddScheduleMassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddScheduleMassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
