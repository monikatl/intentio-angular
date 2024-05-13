import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEditorComponent } from './parish-editor.component';

describe('ParishEditorComponent', () => {
  let component: ParishEditorComponent;
  let fixture: ComponentFixture<ParishEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParishEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParishEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
