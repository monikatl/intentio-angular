import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content4NamesComponent } from './content-4-names.component';

describe('Content4NamesComponent', () => {
  let component: Content4NamesComponent;
  let fixture: ComponentFixture<Content4NamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Content4NamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Content4NamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
