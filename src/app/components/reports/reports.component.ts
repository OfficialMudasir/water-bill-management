import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface ReportCategory {
  title: string;
  icon: string;
  reports: {
    name: string;
    link: string;
  }[];
}

interface RecentReport {
  type: string;
  title: string;
  timestamp: string;
}

interface UserGroup {
  title: string;
  count: number;
}

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],

})
export class ReportsComponent implements OnInit {
  userType: string = localStorage.getItem('userType') || '';
  division: string = localStorage.getItem('operatorDivision') || '';


  reportCategories: ReportCategory[] = [
    {
      title: 'Revenue Reports',
      icon: 'bi-currency-rupee',
      reports: [
        { name: 'Daily Collection', link: '#' },
        { name: 'Monthly Revenue', link: '#' },
        { name: 'Pending Payments', link: '#' },
        { name: 'Total Online Payment Received', link: '#' },
        { name: 'Total Cash Payment Received', link: '#' },

      ]
    },
    {
      title: 'Connection Reports',
      icon: 'bi-plug',
      reports: [
        { name: 'New Connections', link: '#' },
        { name: 'Status Overview', link: '#' },
        { name: 'Ward-wise Analysis', link: '#' },
        { name: 'Total Demand Produced Consumer Vise', link: '#' },
        { name: 'Total Collection Report Consumer Vise', link: '#' },

      ]
    },
    {
      title: 'Billing Reports',
      icon: 'bi-receipt',
      reports: [
        { name: 'Bill Generation', link: '#' },
        { name: 'Payment History', link: '#' },
        { name: 'Defaulters List', link: '#' },
        { name: 'Total Bill Generated Consumer Vise', link: '#' },
        { name: 'Total Demand Generated', link: '#' }
      ]
    },
    {
      title: 'Custom Reports',
      icon: 'bi-file-earmark-text',
      reports: []
    }
  ];

  reportCategoriesByUser: ReportCategory[] = [
    {
      title: 'Revenue Reports',
      icon: 'bi-currency-rupee',
      reports: [
        { name: 'Pending Payments', link: '#' },
        { name: 'Total Online Payment Received', link: '#' },
        { name: 'Total Cash Payment Received', link: '#' },

      ]
    },
    {
      title: 'Connection Reports',
      icon: 'bi-plug',
      reports: [
        { name: 'Total Demand Produced Consumer Vise', link: '#' },
        { name: 'Total Collection Report Consumer Vise', link: '#' },

      ]
    },
    {
      title: 'Billing Reports',
      icon: 'bi-receipt',
      reports: [
        { name: 'Total Bill Generated Consumer Vise', link: '#' }
      ]
    },
    {
      title: 'Custom Reports',
      icon: 'bi-file-earmark-text',
      reports: []
    }
  ];


  recentReports: RecentReport[] = [
    {
      type: 'revenue',
      title: 'Monthly Revenue Report - January',
      timestamp: '2024-02-10 14:30'
    },
    {
      type: 'connection',
      title: 'Connection Status Overview',
      timestamp: '2024-02-10 13:15'
    },
    {
      type: 'billing',
      title: 'Defaulters List - Q1',
      timestamp: '2024-02-10 12:00'
    }
  ];

  userGroups: UserGroup[] = [
    { title: 'Admin', count: 5 },
    { title: 'Executive Engineers', count: 12 },
    { title: 'Assistant Engineers', count: 28 },
    { title: 'Junior Engineers', count: 45 },
    { title: 'Department Users', count: 55 }
  ];

  selectedReportType: string = 'All Types';
  selectedReport: string = 'total-online-payment-received';
  selectedReportName: string = 'Total Online Payment Received';
  selectedReportDateRange: string = 'perDay';
  totalUsers: number = this.userGroups.reduce((sum, group) => sum + group.count, 0);

  totalOnlinePayments: any[] = [
    {
      id: 'CON001',
      userName: 'John Doe',
      amount: 1500,
      paymentDate: '2023-10-01',
      status: 'Paid'
    },
    {
      id: 'CON002',
      userName: 'Jane Smith',
      amount: 2000,
      paymentDate: '2023-10-02',
      status: 'Pending'
    },
    {
      id: 'CON003',
      userName: 'Jane Cane',
      amount: 2000,
      paymentDate: '2023-10-02',
      status: 'Paid'
    },
    {
      id: 'CON004',
      userName: 'White Smith',
      amount: 2000,
      paymentDate: '2023-10-02',
      status: 'Pending'
    },
    // Add more payment records as needed
  ];

  totalCashPayments: any[] = [
    {
      id: 'CON001',
      userName: 'John Doe',
      amount: 1500,
      paymentDate: '2024-10-01',
      status: 'Pending'
    },
    {
      id: 'CON002',
      userName: 'Jane Smith',
      amount: 2000,
      paymentDate: '2024-10-02',
      status: 'Pending'
    },
    {
      id: 'CON003',
      userName: 'White Smith',
      amount: 2000,
      paymentDate: '2023-10-02',
      status: 'Paid'
    },
    {
      id: 'CON004',
      userName: 'Jane Cane',
      amount: 2000,
      paymentDate: '2024-10-02',
      status: 'Paid'
    },
    // Add more payment records as needed
  ];

  totalDemandProduced: any[] = [
    {
      connectionId: 'C001',
      consumerName: 'John Doe',
      demandProduced: 500,
      billingCycle: '2023-10',
      status: 'Active'
    },
    {
      connectionId: 'C002',
      consumerName: 'Jane Smith',
      demandProduced: 300,
      billingCycle: '2023-10',
      status: 'Inactive'
    },
    // Add more records as needed
  ];

  totalCollectionReport: any[] = [
    {
      connectionId: 'C001',
      consumerName: 'John Doe',
      totalCollection: 1500,
      billingCycle: '2023-10',
      status: 'Completed'
    },
    {
      connectionId: 'C002',
      consumerName: 'Jane Smith',
      totalCollection: 2000,
      billingCycle: '2023-10',
      status: 'Pending'
    },
    // Add more records as needed
  ];

  totalBillGenerated: any[] = [
    {
      connectionId: 'C001',
      consumerName: 'John Doe',
      totalBill: 1200,
      billingCycle: '2023-10',
      billDate: '2023-10-01',
      status: 'Paid'
    },
    {
      connectionId: 'C002',
      consumerName: 'Jane Smith',
      totalBill: 1500,
      billingCycle: '2023-10',
      billDate: '2023-10-02',
      status: 'Pending'
    },
    {
      connectionId: 'C003',
      consumerName: 'Alice Johnson',
      totalBill: 800,
      billingCycle: '2023-10',
      billDate: '2023-10-03',
      status: 'Paid'
    },
    {
      connectionId: 'C004',
      consumerName: 'Bob Brown',
      totalBill: 2000,
      billingCycle: '2023-10',
      billDate: '2023-10-04',
      status: 'Failed'
    },
    {
      connectionId: 'C005',
      consumerName: 'Charlie Davis',
      totalBill: 950,
      billingCycle: '2023-10',
      billDate: '2023-10-05',
      status: 'Paid'
    }
  ];

  users: User[] = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-02-10 14:30'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Executive Engineer',
      status: 'Active',
      lastLogin: '2024-02-10 12:15'
    },
    {
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'Junior Engineer',
      status: 'Inactive',
      lastLogin: '2024-02-09 16:45'
    }
  ];

  searchTerm: string = '';
  selectedRole: string = 'All Roles';
  selectedStatus: string = 'Status';

  settingsCategories = [
    {
      title: 'System Settings',
      icon: 'bi-gear',
      items: [
        { name: 'Billing Rates', link: '#' },
        { name: 'Payment Gateway', link: '#' },
        { name: 'Notifications', link: '#' }
      ]
    },
    {
      title: 'Security',
      icon: 'bi-shield-lock',
      items: [
        { name: 'Password Policy', link: '#' },
        { name: 'Login Settings', link: '#' },
        { name: 'Audit Logs', link: '#' }
      ]
    },
    {
      title: 'Data Management',
      icon: 'bi-database',
      items: [
        { name: 'Backup Settings', link: '#' },
        { name: 'Data Retention', link: '#' },
        { name: 'Export Settings', link: '#' }
      ]
    },
    {
      title: 'Preferences',
      icon: 'bi-sliders',
      items: [
        { name: 'Display Settings', link: '#' },
        { name: 'Language', link: '#' },
        { name: 'Notifications', link: '#' }
      ]
    }
  ];

  totalDemandGenerated = [
    {
      connectionId: 'C001',
      consumerName: 'John Doe',
      totalDemand: 1500, // Total demand in kWh
      billingCycle: 'January 2023', // Example billing cycle
      status: 'Completed' // Status of the demand
    },
    {
      connectionId: 'C002',
      consumerName: 'Jane Smith',
      totalDemand: 2000,
      billingCycle: 'January 2023',
      status: 'Completed'
    },
    {
      connectionId: 'C003',
      consumerName: 'Alice Johnson',
      totalDemand: 1800,
      billingCycle: 'February 2023',
      status: 'Pending'
    },
    {
      connectionId: 'C004',
      consumerName: 'Bob Brown',
      totalDemand: 2200,
      billingCycle: 'February 2023',
      status: 'Completed'
    },
    
  ];

  billingRates = {
    residentialRate: '',
    commercialRate: '',
    latePaymentFee: '',
    gracePeriod: ''
  };


  applicationId: string = '';
  pipeLengthKm: string = '';
  estimatedAmount: string = '';
  connectionType: string = '';
  address: string = '';
  dateRange: string = '';
  reportType: string = '';
  format: string = '';
  includeCharts: string = '';
  includeSummary: string = '';
  includeRawData: string = '';


  ngOnInit(): void {
    if (this.userType !== 'Operator') {
      this.reportCategories.forEach((category) => {
        if (category.title === 'Billing Reports') {
          category.reports = category.reports.filter(report => report.name !== 'Total Demand Generated');
        }
      });
    }
  }

  saveChanges() {
    console.log('Saving billing rates:', this.billingRates);
    // Implement save functionality
  }

  getReportIcon(type: string): string {
    switch (type) {
      case 'revenue':
        return 'bi-currency-rupee';
      case 'connection':
        return 'bi-plug';
      case 'billing':
        return 'bi-receipt';
      default:
        return 'bi-file-text';
    }
  }

  exportAll() {
    console.log('Exporting all reports');
    // Implement export functionality
  }

  viewReport(report: RecentReport) {
    console.log(`Viewing report: ${report.title}`);
    // Implement view functionality
  }

  downloadReport(report: RecentReport) {
    console.log(`Downloading report: ${report.title}`);
    // Implement download functionality
  }

  addUser() {
    console.log('Adding new user');
    // Implement add user functionality
  }

  // Add methods for chart functionality when needed
  generateReport(name: string) {
    this.selectedReportName = name;
    this.selectedReport = name.toLowerCase().replaceAll(' ', '-');
    console.log(`Generating report: ${name}`);
    // Implement report generation logic
  }

  createCustomReport() {
    console.log('Creating custom report');
    // Implement custom report creation logic
  }

  viewSavedReports() {
    console.log('Viewing saved reports');
    // Implement saved reports view logic
  }

  getRoleClass(role: string): string {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-purple-100 text-purple-800 rounded-pill px-2 py-1';
      case 'executive engineer':
        return 'bg-blue-100 text-blue-800 rounded-pill px-2 py-1';
      case 'junior engineer':
        return 'bg-yellow-100 text-yellow-800 rounded-pill px-2 py-1';
      default:
        return 'bg-secondary-subtle text-secondary rounded-pill px-2 py-1';
    }
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'active'
      ? 'bg-green-100 text-green-800 rounded-pill px-2 py-1'
      : 'bg-red-100 text-red-800 rounded-pill px-2 py-1';
  }

  getpaymentStatusClass(status: string): string {
    return status.toLowerCase() === 'paid'
      ? 'bg-green-100 text-green-800 rounded-pill px-2 py-1'
      : 'bg-red-100 text-red-800 rounded-pill px-2 py-1';
  }

  getDemandStatusClass(status: string): string {
    return status.toLowerCase() === 'completed'
      ? 'bg-green-100 text-green-800 rounded-pill px-2 py-1'
      : 'bg-red-100 text-red-800 rounded-pill px-2 py-1';
  }

  getCollectionStatusClass(status: string): string {
    return status.toLowerCase() === 'completed'
      ? 'bg-green-100 text-green-800 rounded-pill px-2 py-1'
      : 'bg-red-100 text-red-800 rounded-pill px-2 py-1';
  }

  editUser(user: User) {
    console.log('Editing user:', user);
    // Implement edit functionality
  }

  deleteUser(user: User) {
    console.log('Deleting user:', user);
    // Implement delete functionality
  }

  onSubmit() {

  }
} 