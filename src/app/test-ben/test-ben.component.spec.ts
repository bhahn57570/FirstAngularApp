import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBenComponent } from './test-ben.component';

describe('TestBenComponent', () => {
  let component: TestBenComponent;
  let fixture: ComponentFixture<TestBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
