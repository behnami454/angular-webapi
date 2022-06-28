import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupsEditComponent } from './cups-edit.component';

describe('CupsEditComponent', () => {
  let component: CupsEditComponent;
  let fixture: ComponentFixture<CupsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
