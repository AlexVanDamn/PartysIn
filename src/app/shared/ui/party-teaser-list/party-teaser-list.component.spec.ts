import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyTeaserListComponent } from './party-teaser-list.component';

describe('PartyTeaserListComponent', () => {
  let component: PartyTeaserListComponent;
  let fixture: ComponentFixture<PartyTeaserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyTeaserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyTeaserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
