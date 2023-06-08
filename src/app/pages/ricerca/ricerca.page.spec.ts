import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RicercaPage } from './ricerca.page';

describe('RicercaPage', () => {
  let component: RicercaPage;
  let fixture: ComponentFixture<RicercaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RicercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
