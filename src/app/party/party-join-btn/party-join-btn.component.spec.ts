import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyJoinBtnComponent } from './party-join-btn.component';

describe('PartyJoinBtnComponent', () => {
  let component: PartyJoinBtnComponent;
  let fixture: ComponentFixture<PartyJoinBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyJoinBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyJoinBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
