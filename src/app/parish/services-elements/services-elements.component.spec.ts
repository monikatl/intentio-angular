import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesElementsComponent } from './services-elements.component';

describe('ServicesElementsComponent', () => {
  let component: ServicesElementsComponent;
  let fixture: ComponentFixture<ServicesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
