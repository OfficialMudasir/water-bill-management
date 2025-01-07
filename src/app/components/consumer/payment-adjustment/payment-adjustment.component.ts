import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-adjustment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-adjustment.component.html',
  styleUrl: './payment-adjustment.component.css'
})
export class PaymentAdjustmentComponent {

  connectionId: string = '';
  amount: number = 0;
  discount: number = 0;
  overdueCharges: number = 0;
  otherCharges: number = 0;
  arrears: number = 0;
  totalAmount: number = 0;

  updateTotal() {
    this.totalAmount = this.amount - this.discount + this.overdueCharges + this.otherCharges + this.arrears;
  }

  updatePayment() {
    // Handle the payment update logic here
    console.log('Payment Updated:', {
      connectionId: this.connectionId,
      totalAmount: this.totalAmount,
      discount: this.discount,
      overdueCharges: this.overdueCharges,
      otherCharges: this.otherCharges,
      arrears: this.arrears,
    });

    // Reset fields after updating
    this.resetFields();
  }

  resetFields() {
    this.connectionId = '';
    this.amount = 0;
    this.discount = 0;
    this.overdueCharges = 0;
    this.otherCharges = 0;
    this.arrears = 0;
    this.totalAmount = 0;
  }

}
