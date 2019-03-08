import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCardRowComponent } from './navigation-card-row.component';

describe('NavigationCardRowComponent', () => {
  let component: NavigationCardRowComponent;
  let fixture: ComponentFixture<NavigationCardRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
