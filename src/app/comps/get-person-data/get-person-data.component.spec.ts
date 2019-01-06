import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonDataComponent } from './get-person-data.component';

describe('GetPersonDataComponent', () => {
  let component: GetPersonDataComponent;
  let fixture: ComponentFixture<GetPersonDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPersonDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPersonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
