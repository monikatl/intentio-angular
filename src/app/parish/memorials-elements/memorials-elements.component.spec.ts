import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialsElementsComponent } from './memorials-elements.component';

describe('MemorialsElementsComponent', () => {
  let component: MemorialsElementsComponent;
  let fixture: ComponentFixture<MemorialsElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorialsElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemorialsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
