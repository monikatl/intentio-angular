import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriestComponent } from './add-priest.component';

describe('AddPriestComponent', () => {
  let component: AddPriestComponent;
  let fixture: ComponentFixture<AddPriestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPriestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPriestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
