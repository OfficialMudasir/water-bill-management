import { Component, Injector, OnInit, EventEmitter, Output, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';

interface Consumer {
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

}
interface NewConsumer {
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
  temporaryFormNo: string; // Add this field
  permanentFormNo: string; // Add this field
  isAlreadyConsumer: string; // Add this field
  firstName: string; // Add this field
  lastName: string; // Add this field
  fatherHusbandName: string; // Add this field
  occupation: string; // Add this field
  presentAddress: string; // Add this field
  mobileNo: string; // Add this field
  formFee: number; // Add this field
  receiptNo: string; // Add this field
  div: string; // Add this field for Div
  collectionCenter: string; // Add this field for Collection Center
  mode: string; // Add this field for Mode
  source: string; // Add this field for Source
  purchaseDate: string;
  submissionDate: string;
}


@Component({
  selector: 'app-consumer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.css'
})
export class ConsumerComponent {

  consumersNew: NewConsumer[] = [
    {
      id: 'CON001',
      consumerName: 'John Doe',
      type: 'Water',
      status: 'Pending',
      phoneNumber: '1234567890',
      email: 'john.doe@example.com',
      streetAddress: '123 Elm St',
      city: 'Springfield',
      state: 'IL',
      pincode: '62701',
      temporaryFormNo: 'TEMP001',
      permanentFormNo: 'PERM001',
      isAlreadyConsumer: 'Yes',
      firstName: 'John',
      lastName: 'Doe',
      fatherHusbandName: 'Mr. Doe',
      occupation: 'Engineer',
      presentAddress: '123 Elm St, Springfield, IL',
      mobileNo: '1234567890',
      formFee: 25,
      receiptNo: 'REC001',
      div: 'Division 1',
      collectionCenter: 'Center 1',
      mode: 'Online',
      source: 'Website',
      purchaseDate: '2024-01-01',
      submissionDate: '2024-01-02'
    },
    {
      id: 'CON002',
      consumerName: 'Jane Smith',
      type: 'Sewer',
      status: 'Active',
      phoneNumber: '2345678901',
      email: 'jane.smith@example.com',
      streetAddress: '456 Oak St',
      city: 'Springfield',
      state: 'IL',
      pincode: '62702',
      temporaryFormNo: 'TEMP002',
      permanentFormNo: 'PERM002',
      isAlreadyConsumer: 'No',
      firstName: 'Jane',
      lastName: 'Smith',
      fatherHusbandName: 'Mr. Smith',
      occupation: 'Business Owner',
      presentAddress: '456 Oak St, Springfield, IL',
      mobileNo: '2345678901',
      formFee: 25,
      receiptNo: 'REC002',
      div: 'Division 2',
      collectionCenter: 'Center 2',
      mode: 'Offline',
      source: 'Referral',
      purchaseDate: '2024-01-01',
      submissionDate: '2024-01-02'
    },
    {
      id: 'CON003',
      consumerName: 'Bob Wilson',
      type: 'Sewer',
      status: 'Disconnected',
      phoneNumber: '3456789012',
      email: 'bob.wilson@example.com',
      streetAddress: '789 Pine St',
      city: 'Springfield',
      state: 'IL',
      pincode: '62703',
      temporaryFormNo: 'TEMP003',
      permanentFormNo: 'PERM003',
      isAlreadyConsumer: 'Yes',
      firstName: 'Bob',
      lastName: 'Wilson',
      fatherHusbandName: 'Mr. Wilson',
      occupation: 'Teacher',
      presentAddress: '789 Pine St, Springfield, IL',
      mobileNo: '3456789012',
      formFee: 25,
      receiptNo: 'REC003',
      div: 'Division 1',
      collectionCenter: 'Center 1',
      mode: 'Online',
      source: 'Website',
      purchaseDate: '2024-01-01',
      submissionDate: '2024-01-02'
    },
    {
      id: 'CON004',
      consumerName: 'Alice Johnson',
      type: 'Water',
      status: 'Active',
      phoneNumber: '4567890123',
      email: 'alice.johnson@example.com',
      streetAddress: '321 Maple St',
      city: 'Springfield',
      state: 'IL',
      pincode: '62704',
      temporaryFormNo: 'TEMP004',
      permanentFormNo: 'PERM004',
      isAlreadyConsumer: 'No',
      firstName: 'Alice',
      lastName: 'Johnson',
      fatherHusbandName: 'Mr. Johnson',
      occupation: 'Nurse',
      presentAddress: '321 Maple St, Springfield, IL',
      mobileNo: '4567890123',
      formFee: 25,
      receiptNo: 'REC004',
      div: 'Division 1',
      collectionCenter: 'Center 1',
      mode: 'Online',
      source: 'Website',
      purchaseDate: '2024-01-01',
      submissionDate: '2024-01-02'
    },
    {
      id: 'CON005',
      consumerName: 'Charlie Brown',
      type: 'Sewer',
      status: 'Pending',
      phoneNumber: '5678901234',
      email: 'charlie.brown@example.com',
      streetAddress: '654 Cedar St',
      city: 'Springfield',
      state: 'IL',
      pincode: '62705',
      temporaryFormNo: 'TEMP005',
      permanentFormNo: 'PERM005',
      isAlreadyConsumer: 'Yes',
      firstName: 'Charlie',
      lastName: 'Brown',
      fatherHusbandName: 'Mr. Brown',
      occupation: 'Artist',
      presentAddress: '654 Cedar St, Springfield, IL',
      mobileNo: '5678901234',
      formFee: 25,
      receiptNo: 'REC005',
      div: 'Division 2',
      collectionCenter: 'Center 2',
      mode: 'Offline',
      source: 'Referral',
      purchaseDate: '2024-01-01',
      submissionDate: '2024-01-02'

    }

  ];

  searchTerm: string = '';
  selectedStatus: string = '';
  selectedType: string = '';
  showModal: boolean = false;


  consumerModalHeader: string = 'New Consumer Registration Application';
  initialConsumer: Consumer = {
    id: '',
    consumerName: '',
    type: '',
    status: '',
    phoneNumber: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    pincode: ''
  };

  todayDate: Date = new Date();
  initialNewConsumer: NewConsumer = {
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

  newconsumer: NewConsumer = { ...this.initialNewConsumer };
  isProcessing: boolean = false;
  consumer: Consumer = { ...this.initialConsumer };
  isConsumerUpdateModalOpen: boolean = false;

  constructor(private injector: Injector, private renderer: Renderer2, private toastService: ToastService) { }
  ngOnInit(): void {
    //this.showModal = true;
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-success-subtle text-success rounded-pill px-2 py-1';
      case 'pending':
        return 'bg-warning-subtle text-warning rounded-pill px-2 py-1';
      case 'disconnected':
        return 'bg-danger-subtle text-danger rounded-pill px-2 py-1';
      case 'new':
        return 'bg-info-subtle text-info rounded-pill px-2 py-1';
      default:
        return '';
    }
  }

  openEditModal(consumer: any) {
    this.isConsumerUpdateModalOpen = true;
    this.consumerModalHeader = 'Update Consumer Registration Application';
    this.newconsumer = { ...consumer };
    this.newconsumer.consumerName = consumer.firstName + ' ' + consumer.lastName;

  }

  updateConsumer() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.newconsumer.consumerName = this.newconsumer.firstName + ' ' + this.newconsumer.lastName;
    if (this.isConsumerUpdateModalOpen) {
      // Logic to update the consumer in the consumers array
      const index = this.consumersNew.findIndex(c => c.id === this.newconsumer.id);
      if (index !== -1) {
        this.consumersNew[index] = { ...this.newconsumer }; // Update the consumer data
      }
    } else {
      // Logic to add a new consumer
      let newConsumer: NewConsumer = { ...this.newconsumer, id: this.generateNewId() };
      newConsumer.status = 'New';
      this.consumersNew.push(newConsumer);
    }

    // Dismiss the modal using Renderer2
    const modalElement = document.getElementById('btn-submit');
    if (modalElement) {
      this.renderer.setAttribute(modalElement, 'data-bs-dismiss', 'modal');
      // Create and dispatch a click event
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      modalElement.dispatchEvent(clickEvent);
    }

    this.toastService.showSuccess(this.isConsumerUpdateModalOpen ? 'Updated Successfully!' : 'Added Successfully!');

    this.resetForm();
    this.isProcessing = false;
  }

  // Helper method to generate a new ID for the consumer
  generateNewId(): string {
    return 'CON' + (this.consumersNew.length + 1).toString().padStart(3, '0'); // Example ID generation logic
  }


  resetForm() {
    this.newconsumer = { ...this.initialNewConsumer };
    this.isConsumerUpdateModalOpen = false;
    this.consumerModalHeader = 'New Consumer Registration Application';
  }

}
