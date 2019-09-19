import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectsPage } from './viewprojects.page';

describe('ViewprojectsPage', () => {
  let component: ViewprojectsPage;
  let fixture: ComponentFixture<ViewprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprojectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
