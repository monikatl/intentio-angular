import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesElementsComponent } from './places-elements.component';

describe('PlacesElementsComponent', () => {
  let component: PlacesElementsComponent;
  let fixture: ComponentFixture<PlacesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacesElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
