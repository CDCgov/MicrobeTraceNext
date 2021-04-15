import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInvestigationComponent } from './case-investigation.component';

describe('CaseInvestigationComponent', () => {
  let component: CaseInvestigationComponent;
  let fixture: ComponentFixture<CaseInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
