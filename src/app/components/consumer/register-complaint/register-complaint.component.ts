import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-register-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class RegisterComplaintComponent {


  complaint: string = '';
  userName: string = '';
  email: string = '';
  formSubmitted = false;

  onSubmit() {
    // Handle the form submission logic here
    console.log('Complaint Registered:', {
      userName: this.userName,
      email: this.email,
      complaint: this.complaint,
    });

    this.formSubmitted = true;
    setTimeout(() => {
      this.formSubmitted = false;
      alert('Complaint submitted successfully!');
    }, 1500);
    
    this.resetForm();
  }

  resetForm() {
    this.complaint = '';
    this.userName = '';
    this.email = '';
  }
}
