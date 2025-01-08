import { Component, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 


interface Bill {
  id: string;
  connectionId: string;
  amount: number;
  dueDate: string;
  status: string;
}


interface NewConnection {
  id: string;
  consumerName: string;
  type: string;
  status: string;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  pincode: string;
  temporaryFormNo: string;
  permanentFormNo: string;
  isAlreadyConsumer: string;
  firstName: string;
  lastName: string;
  fatherHusbandName: string;
  occupation: string;
  presentAddress: string;
  mobileNo: string;
  formFee: number;
  receiptNo: string;
  div: string;
  collectionCenter: string;
  mode: string;
  source: string;
  purchaseDate: string;
  submissionDate: string;
}

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

  todayDate: Date = new Date();
  initialNewConnection: NewConnection = {
    id: '',
    consumerName: '',
    type: '',
    status: '',
    phoneNumber: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    pincode: '',
    temporaryFormNo: '',
    permanentFormNo: '',
    isAlreadyConsumer: '',
    firstName: '',
    lastName: '',
    fatherHusbandName: '',
    occupation: '',
    presentAddress: '',
    mobileNo: '',
    formFee: 25,
    receiptNo: '',
    div: '',
    collectionCenter: '',
    mode: '',
    source: '',
    purchaseDate: '',
    submissionDate: ''
  };

  connectionModalHeader: string = 'New Connection Application';
  newconnection: NewConnection = { ...this.initialNewConnection };
  isProcessing: boolean = false;
  isConsumerUpdateModalOpen: boolean = false;
  connectionsNew: NewConnection[] = [];
  currentStep: number = 1;
  totalSteps: number = 2;

  constructor(private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object, 
    private renderer: Renderer2, 
    private modalService: NgbModal) { }

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

  goToNextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  resetForm() {
    this.newconnection = { ...this.initialNewConnection }
    this.currentStep = 1;
  }

  updateConnection() {
    debugger;
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.newconnection.consumerName = this.newconnection.firstName + ' ' + this.newconnection.lastName;
    // Logic to add a new consumer
    let newconnection: NewConnection = { ...this.newconnection, id: this.generateNewId() };
    newconnection.status = 'New';
    this.connectionsNew.push(newconnection);
    // this.closeModasl();

    this.modalService.dismissAll();
   
  }

  closeModasl(){
     
  }

  // Helper method to generate a new ID for the consumer
  generateNewId(): string {
    return 'CON' + (this.connectionsNew.length + 1).toString().padStart(3, '0'); // Example ID generation logic
  }


}
