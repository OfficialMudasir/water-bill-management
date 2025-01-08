import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

interface Application {
  id: string;
  applicant: string;
  type: string;
  estimatedAmount: number;
  status: string;
}

interface SystemLog {
  type: string;
  title: string;
  details: string;
  timestamp: string;
  metadata?: {
    connectionId?: string;
    consumer?: string;
    billId?: string;
    amount?: string;
    backupSize?: string;
    files?: string;
  };
}

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  applications: Application[] = [
    { id: 'APP001', applicant: 'John Doe', type: 'Residential', estimatedAmount: 25000, status: 'Pending' },
    { id: 'APP002', applicant: 'Jane Smith', type: 'Commercial', estimatedAmount: 45000, status: 'Approved' },
    { id: 'APP003', applicant: 'Bob Wilson', type: 'Residential', estimatedAmount: 30000, status: 'Rejected' }
  ];

  isApprovedOrRejected: boolean = false;

  constructor(private toastService: ToastService) { }


  stats = {
    newRequests: 12,
    inProgress: 8,
    readyForFinal: 5,
    averageTime: 2.5,
    completionRate: 75
  };

  searchTerm: string = '';
  selectedStatus: string = '';
  selectedApplications: string[] = [];


  applicationId: string = '';
  pipeLengthKm: string = '';
  estimatedAmount: string = '';
  connectionType: string = '';
  address: string = '';

  userType: string = localStorage.getItem("userType") ?? '';

  systemLogs: SystemLog[] = [
    {
      type: 'connection',
      title: 'New backlog connection added',
      details: 'Connection ID: CON123 | Consumer: John Doe',
      timestamp: '2024-02-10 14:30',
      metadata: {
        connectionId: 'CON123',
        consumer: 'John Doe'
      }
    },
    {
      type: 'billing',
      title: 'Bill correction applied',
      details: 'Bill ID: BILL456 | Amount Updated: ₹1,500',
      timestamp: '2024-02-10 13:15',
      metadata: {
        billId: 'BILL456',
        amount: '₹1,500'
      }
    },
    {
      type: 'system',
      title: 'Monthly data backup completed',
      details: 'Backup size: 256MB | Files: 1,234',
      timestamp: '2024-02-10 12:00',
      metadata: {
        backupSize: '256MB',
        files: '1,234'
      }
    }
  ];

  changeConnectionRequests = [
    {
      connectionId: 'C001',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      type: 'Residential',
      status: 'Pending',
      id: 1 
    },
    {
      connectionId: 'C002',
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      type: 'Commercial',
      status: 'Pending',
      id: 2 
    },
   
  ];

  selectedActivity: string = 'All Activities';


  ngOnInit(): void {

  }

  showSuccess() {
    this.isApprovedOrRejected = true;
    this.toastService.showSuccess('Your application has been sent for next approval!');
  }

  showError() {
    this.isApprovedOrRejected = true;
    this.toastService.showError('Your application has been rejected!');
  }

  hiddenButtons(status: string) {
    this.isApprovedOrRejected = true;
    switch (status) {
      case 'Approved':
        this.applications[0].status = "Approved";
        break;
      case 'Rejected':
        this.applications[0].status = "Rejected";
        break;
      default:
        break;
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-success-subtle text-success rounded-pill px-2 py-1';
      case 'pending':
        return 'bg-warning-subtle text-warning rounded-pill px-2 py-1';
      case 'rejected':
        return 'bg-danger-subtle text-danger rounded-pill px-2 py-1';
      default:
        return '';
    }
  }

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.selectedApplications = this.applications.map(app => app.id);
    } else {
      this.selectedApplications = [];
    }
  }

  toggleSelect(applicationId: string) {
    const index = this.selectedApplications.indexOf(applicationId);
    if (index === -1) {
      this.selectedApplications.push(applicationId);
    } else {
      this.selectedApplications.splice(index, 1);
    }
  }

  isSelected(applicationId: string): boolean {
    return this.selectedApplications.includes(applicationId);
  }

  getLogIcon(type: string): string {
    switch (type) {
      case 'connection':
        return 'bi-plug';
      case 'billing':
        return 'bi-receipt';
      case 'system':
        return 'bi-database';
      default:
        return 'bi-info-circle';
    }
  }


  onSubmit() {

  }

  approveRequest(id: string) {
    const request = this.changeConnectionRequests.find((req) => req.connectionId === id);
    if(request){
      request.status = "Approved";
    }

    this.toastService.showSuccess("Connection Change Request has been Approved and Email has been sent to Consumer's email Id.")
  }

  rejectRequest(id: string) {
    const request = this.changeConnectionRequests.find((req) => req.connectionId === id);
    if(request){
      request.status = "Rejected";
    }
    this.toastService.showError("Connection Change Request has been Rejected and Email has been sent to Consumer's email Id.")
  }

} 