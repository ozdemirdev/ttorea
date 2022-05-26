import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPopupFormComponent } from './book-popup-form.component';

describe('BookPopupFormComponent', () => {
  let component: BookPopupFormComponent;
  let fixture: ComponentFixture<BookPopupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPopupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
