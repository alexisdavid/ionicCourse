import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPagePage } from './grid-page.page';

describe('GridPagePage', () => {
  let component: GridPagePage;
  let fixture: ComponentFixture<GridPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
