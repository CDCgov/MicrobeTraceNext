import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectComponent } from './section-select.component';

describe('SectionSelectComponent', () => {
  let component: SectionSelectComponent;
  let fixture: ComponentFixture<SectionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
