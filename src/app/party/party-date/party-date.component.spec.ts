import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDateComponent } from './party-date.component';

describe('PartyDateComponent', () => {
  let component: PartyDateComponent;
  let fixture: ComponentFixture<PartyDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
