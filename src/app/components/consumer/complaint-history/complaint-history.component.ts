import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



interface Complaint {
  userName: string;
  email: string;
  complaint: string;
  status: string; 
}


@Component({
  selector: 'app-complaint-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complaint-history.component.html',
  styleUrl: './complaint-history.component.css'
})
export class ComplaintHistoryComponent {

  searchTerm: string = '';
  selectedComplaintStatus: string = '';
    // Dummy complaint history data
    complaintHistory: Complaint[] = [
      { userName: 'John Doe', email: 'john@example.com', complaint: 'Water leakage in kitchen', status: 'Resolved' },
      { userName: 'Jane Smith', email: 'jane@example.com', complaint: 'Low water pressure', status: 'Pending' },
      { userName: 'Bob Wilson', email: 'bob@example.com', complaint: 'No water supply', status: 'InProgress' },
    ];


    getStatusClass(status: string): string {
      switch (status.toLowerCase()) {
        case 'resolved':
          return 'bg-success-subtle text-success rounded-pill px-2 py-1';
        case 'pending':
          return 'bg-warning-subtle text-warning rounded-pill px-2 py-1';
        case 'inprogress':
          return 'bg-info-subtle text-info rounded-pill px-2 py-1';
        default:
          return '';
      }
    }
}
