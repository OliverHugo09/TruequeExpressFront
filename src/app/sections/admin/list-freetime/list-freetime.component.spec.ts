import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFreetimeComponent } from './list-freetime.component';

describe('ListFreetimeComponent', () => {
  let component: ListFreetimeComponent;
  let fixture: ComponentFixture<ListFreetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFreetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFreetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
