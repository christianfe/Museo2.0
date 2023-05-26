import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewGuestbookPage } from './new-guestbook.page';

describe('NewGuestbookPage', () => {
  let component: NewGuestbookPage;
  let fixture: ComponentFixture<NewGuestbookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewGuestbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
