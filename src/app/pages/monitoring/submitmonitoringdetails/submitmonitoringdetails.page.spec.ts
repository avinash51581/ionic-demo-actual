import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitmonitoringdetailsPage } from './submitmonitoringdetails.page';

describe('SubmitmonitoringdetailsPage', () => {
  let component: SubmitmonitoringdetailsPage;
  let fixture: ComponentFixture<SubmitmonitoringdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitmonitoringdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitmonitoringdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
