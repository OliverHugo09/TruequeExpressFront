import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreetimeComponent } from './add-freetime.component';

describe('AddFreetimeComponent', () => {
  let component: AddFreetimeComponent;
  let fixture: ComponentFixture<AddFreetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFreetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFreetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
