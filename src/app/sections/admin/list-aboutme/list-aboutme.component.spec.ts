import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAboutmeComponent } from './list-aboutme.component';

describe('ListAboutmeComponent', () => {
  let component: ListAboutmeComponent;
  let fixture: ComponentFixture<ListAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
