import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanModalComponent } from './boolean-modal.component';

describe('BooleanModalComponent', () => {
  let component: BooleanModalComponent;
  let fixture: ComponentFixture<BooleanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
