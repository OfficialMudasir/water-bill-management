// src/app/components/connections/connections.component.ts
import { Component, Injector, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Connection {
  id: string;
  customerName: string;
  type: string;
  status: string;
}

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  @Input() submitConnection = new EventEmitter<any>();
  connections: Connection[] = [
    { id: 'CON001', customerName: 'John Doe', type: 'Residential', status: 'Pending' },
    // { id: 'CON002', customerName: 'Jane Smith', type: 'Commercial', status: 'Pending' },
    // { id: 'CON003', customerName: 'Bob Wilson', type: 'Residential', status: 'Disconnected' }
  ];

  searchTerm: string = '';
  selectedStatus: string = '';
  selectedType: string = '';
  showModal: boolean = false;

  fullName: string = '';
  phoneNumber: string = '';
  email: string = '';
  connectionType: string = 'Residential';
  streetAddress: string = '';
  city: string = '';
  state: string = '';
  pinCode: string = '';

  constructor(private injector: Injector) { }
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
      default:
        return '';
    }
  }

  openModal() {
    debugger;
    this.showModal = true;
    this.submitConnection.emit(this.showModal);
  }

  closeModal() {
    this.showModal = false;
    this.submitConnection.emit();
  }

  onNewConnectionSubmitted(connection: any) {
    debugger;
    // Handle the new connection submission
    console.log('New Connection:', connection);
    this.closeModal();
  }


  onSubmit() {
    debugger;
    const newConnection = {
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      connectionType: this.connectionType,
      streetAddress: this.streetAddress,
      city: this.city,
      state: this.state,
      pinCode: this.pinCode
    };
    this.submitConnection.emit(newConnection);
    this.resetForm();
  }

  resetForm() {
    this.fullName = '';
    this.phoneNumber = '';
    this.email = '';
    this.connectionType = 'Residential';
    this.streetAddress = '';
    this.city = '';
    this.state = '';
    this.pinCode = '';
  }
}