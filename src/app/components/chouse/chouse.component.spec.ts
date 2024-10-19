import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouseComponent } from './chouse.component';

describe('ChouseComponent', () => {
  let component: ChouseComponent;
  let fixture: ComponentFixture<ChouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
