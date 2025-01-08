import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

interface Grievance {
  id: number;
  consumerId: string; // New field
  consumerName: string; // New field
  billId: string;
  billDate: string; // New field
  grievanceDate: string; // New field
  description: string; // Grievance description
  status: string; // e.g., 'Pending', 'Resolved'
  assignedTo: string; // e.g., 'Admin', 'Junior Engineer'
}

@Component({
  selector: 'app-bill-grievance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-grievance.component.html',
  styleUrls: ['./bill-grievance.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class BillGrievanceComponent {
  grievances: Grievance[] = [
    {
      id: 1,
      consumerId: 'C001',
      consumerName: 'John Doe',
      billId: 'Bill001',
      billDate: '2023-01-15',
      grievanceDate: '2023-01-20',
      description: 'Issue with bill amount',
      status: 'Pending',
      assignedTo: 'Junior Engineer'
    },
    {
      id: 2,
      consumerId: 'C002',
      consumerName: 'Jane Smith',
      billId: 'Bill002',
      billDate: '2023-01-10',
      grievanceDate: '2023-01-18',
      description: 'Late payment notice',
      status: 'Resolved',
      assignedTo: 'Admin'
    },
    {
      id: 3,
      consumerId: 'C003',
      consumerName: 'Alice Johnson',
      billId: 'Bill003',
      billDate: '2023-02-01',
      grievanceDate: '2023-02-05',
      description: 'Incorrect billing amount',
      status: 'Rejected',
      assignedTo: 'Junior Engineer'
    },
    {
      id: 4,
      consumerId: 'C004',
      consumerName: 'Bob Brown',
      billId: 'Bill004',
      billDate: '2023-02-10',
      grievanceDate: '2023-02-12',
      description: 'Service interruption complaint',
      status: 'Resolved',
      assignedTo: 'Admin'
    },
    {
      id: 5,
      consumerId: 'C005',
      consumerName: 'Charlie Davis',
      billId: 'Bill005',
      billDate: '2023-02-15',
      grievanceDate: '2023-02-20',
      description: 'Late fee charged incorrectly',
      status: 'Pending',
      assignedTo: 'Junior Engineer'
    },
    {
      id: 6,
      consumerId: 'C006',
      consumerName: 'Diana Evans',
      billId: 'Bill006',
      billDate: '2023-02-25',
      grievanceDate: '2023-02-28',
      description: 'Billing for unutilized services',
      status: 'Rejected',
      assignedTo: 'Admin'
    },
    {
      id: 7,
      consumerId: 'C007',
      consumerName: 'Ethan Foster',
      billId: 'Bill007',
      billDate: '2023-03-01',
      grievanceDate: '2023-03-02',
      description: 'Dispute over payment terms',
      status: 'Pending',
      assignedTo: 'Junior Engineer'
    }
  ];

  selectedGrievances: string[] = [];

  resolveGrievance(id: number) {
    const grievance = this.grievances.find(g => g.id === id);
    if (grievance) {
      grievance.status = 'Resolved';
      // Additional logic for resolving the grievance can be added here
    }
  }

  rejectGrievance(id: number) {
    const grievance = this.grievances.find(g => g.id === id);
    if (grievance) {
      grievance.status = 'Rejected';
      // Additional logic for resolving the grievance can be added here
    }
  }

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.selectedGrievances = this.grievances.map(app => app.consumerId);
    } else {
      this.selectedGrievances = [];
    }
  }

  toggleSelect(applicationId: string) {
    const index = this.selectedGrievances.indexOf(applicationId);
    if (index === -1) {
      this.selectedGrievances.push(applicationId);
    } else {
      this.selectedGrievances.splice(index, 1);
    }
  }

  isSelected(applicationId: string): boolean {
    return this.selectedGrievances.includes(applicationId);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'bg-success-subtle text-success rounded-pill px-2 py-1';
      case 'pending':
        return 'bg-warning-subtle text-warning rounded-pill px-2 py-1';
      case 'rejected':
        return 'bg-danger-subtle text-danger rounded-pill px-2 py-1';
      default:
        return '';
    }
  }
}