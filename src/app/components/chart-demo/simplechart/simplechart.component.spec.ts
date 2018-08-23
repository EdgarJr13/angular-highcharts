import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplechartComponent } from './simplechart.component';

describe('SimplechartComponent', () => {
  let component: SimplechartComponent;
  let fixture: ComponentFixture<SimplechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
