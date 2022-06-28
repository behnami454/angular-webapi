import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsEditComponent } from './legends-edit.component';

describe('LegendsEditComponent', () => {
  let component: LegendsEditComponent;
  let fixture: ComponentFixture<LegendsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
