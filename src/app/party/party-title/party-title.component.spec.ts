import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyTitleComponent } from './party-title.component';

describe('PartyTitleComponent', () => {
  let component: PartyTitleComponent;
  let fixture: ComponentFixture<PartyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
