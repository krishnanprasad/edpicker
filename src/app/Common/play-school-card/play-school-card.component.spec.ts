import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySchoolCardComponent } from './play-school-card.component';

describe('PlaySchoolCardComponent', () => {
  let component: PlaySchoolCardComponent;
  let fixture: ComponentFixture<PlaySchoolCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySchoolCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySchoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
