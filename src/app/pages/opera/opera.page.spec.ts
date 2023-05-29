import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperaPage } from './opera.page';

describe('OperaPage', () => {
  let component: OperaPage;
  let fixture: ComponentFixture<OperaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
