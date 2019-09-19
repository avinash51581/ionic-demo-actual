import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakephotosPage } from './takephotos.page';

describe('TakephotosPage', () => {
  let component: TakephotosPage;
  let fixture: ComponentFixture<TakephotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakephotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakephotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
