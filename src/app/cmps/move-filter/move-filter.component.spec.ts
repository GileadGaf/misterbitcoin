import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveFilterComponent } from './move-filter.component';

describe('MoveFilterComponent', () => {
  let component: MoveFilterComponent;
  let fixture: ComponentFixture<MoveFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
