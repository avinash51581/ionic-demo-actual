import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadprojectsPage } from './downloadprojects.page';

describe('DownloadprojectsPage', () => {
  let component: DownloadprojectsPage;
  let fixture: ComponentFixture<DownloadprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadprojectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
