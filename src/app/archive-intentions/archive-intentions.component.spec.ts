import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveIntentionsComponent } from './archive-intentions.component';

describe('ArchiveIntentionsComponent', () => {
  let component: ArchiveIntentionsComponent;
  let fixture: ComponentFixture<ArchiveIntentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveIntentionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveIntentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
