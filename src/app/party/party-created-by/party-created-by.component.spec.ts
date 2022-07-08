import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCreatedByComponent } from './party-created-by.component';

describe('PartyCreatedByComponent', () => {
  let component: PartyCreatedByComponent;
  let fixture: ComponentFixture<PartyCreatedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyCreatedByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyCreatedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
