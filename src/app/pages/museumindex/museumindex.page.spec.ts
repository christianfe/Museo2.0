import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuseumindexPage } from './museumindex.page';

describe('MuseumindexPage', () => {
  let component: MuseumindexPage;
  let fixture: ComponentFixture<MuseumindexPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MuseumindexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
