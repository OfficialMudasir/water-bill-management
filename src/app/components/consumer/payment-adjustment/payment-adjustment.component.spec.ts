import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAdjustmentComponent } from './payment-adjustment.component';

describe('PaymentAdjustmentComponent', () => {
  let component: PaymentAdjustmentComponent;
  let fixture: ComponentFixture<PaymentAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAdjustmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
