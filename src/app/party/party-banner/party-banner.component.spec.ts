import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyBannerComponent } from './party-banner.component';

describe('PartyBannerComponent', () => {
  let component: PartyBannerComponent;
  let fixture: ComponentFixture<PartyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
