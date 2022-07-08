import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyGuestsComponent } from './party-guests.component';

describe('PartyGuestsComponent', () => {
  let component: PartyGuestsComponent;
  let fixture: ComponentFixture<PartyGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyGuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
