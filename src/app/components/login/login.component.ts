import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = 'admin';
  password: string = 'admin';
  userType: string = 'Admin';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  errorMessage: string = '';
  operatorDivision: string = 'CHD';
  showModal: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (this.isBrowser()) {
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        this.username = savedUsername;
        this.password = savedPassword;
        this.rememberMe = true;
      }
    }
  }

  checkUserType() {
    if (this.userType === 'Operator' && isPlatformBrowser(this.platformId)) {
      this.showModal = true; // Show the modal
      document.body.classList.add('modal-open'); // Add Bootstrap's modal-open class to the body
    }
  }

  closeModal() {
    this.showModal = false; // Hide the modal
    document.body.classList.remove('modal-open'); // Remove Bootstrap's modal-open class from the body
  }

  onSubmit() {
    debugger;
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    if (this.username !== '' && this.password !== '' && this.userType !== '') {
      this.errorMessage = '';

      if (this.isBrowser()) {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        localStorage.setItem('userType', this.userType);

        if (this.userType === 'Operator') {
          localStorage.setItem('operatorDivision', this.operatorDivision);
        }
      }



      switch (this.userType) {
        case 'Admin':
          this.router.navigate(['/dashboard']);
          break;
        case 'Executive':
          this.router.navigate(['/approvals']);
          break;
        case 'Assistant':
          this.router.navigate(['/approvals']);
          break;
        case 'Junior':
          this.router.navigate(['/approvals']);
          break;
        case 'Operator':
          this.router.navigate(['/consumer/consumer']);
          break;
        case 'Consumer':
          this.router.navigate(['/consumer/my-bills']);
          break;
        default:
          this.router.navigate(['/dashboard']);
          break;
      }



    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }


}
