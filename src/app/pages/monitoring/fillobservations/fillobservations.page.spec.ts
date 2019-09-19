import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillobservationsPage } from './fillobservations.page';

describe('FillobservationsPage', () => {
  let component: FillobservationsPage;
  let fixture: ComponentFixture<FillobservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillobservationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillobservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
