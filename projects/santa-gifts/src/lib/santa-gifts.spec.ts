import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaGifts } from './santa-gifts';

describe('SantaGifts', () => {
  let component: SantaGifts;
  let fixture: ComponentFixture<SantaGifts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantaGifts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantaGifts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
