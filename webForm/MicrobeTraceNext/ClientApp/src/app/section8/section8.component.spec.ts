import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section8Component } from './section8.component';

describe('Section8Component', () => {
  let component: Section8Component;
  let fixture: ComponentFixture<Section8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
