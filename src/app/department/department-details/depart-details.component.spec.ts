import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsComponent } from './depart-details.component';

describe('DepartDetailsComponent', () => {
  let component: DepartmentDetailsComponent;
  let fixture: ComponentFixture<DepartmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
