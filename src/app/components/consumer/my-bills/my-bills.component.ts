import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';


interface SettingCategory {
  title: string;
  icon: string;
  items: {
    name: string;
    link: string;
    active?: boolean;
  }[];
}

interface MyBill {
  consumerNumber: string;
  demandNumber: string;
  billNumber: string;
  billDate: string;
  name: string;
  address: string;
  billingPeriod: string;
  dueDate: string;
  detachmentDate: string;
  combinationCategory: string;
  billingType: string;
  monthlyAverage: number;
  sewerage: string;
  waterValue: number;
  currentDemand: number;
  paymentStatus: string;
  branchName: string;
  collectionCenterName: string;
}
interface PaymentMethod {
  name: string;
  description: string;
}

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
  selector: 'app-my-bills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent {


  currentView: string = 'view-current-bill';

  viewCurrentBill = {
    residentialRate: '',
    commercialRate: '',
    latePaymentFee: '',
    gracePeriod: ''
  };

  searchTerm: string = '';
  selectedPaymentStatus: string = '';


  fullName: string = '';
  phoneNumber: string = '';
  email: string = '';
  connectionType: string = 'Residential';
  streetAddress: string = '';
  city: string = '';
  state: string = '';
  pinCode: string = '';

  paymentMethods: PaymentMethod[] = [
    { name: 'Online Payment', description: 'Pay your bill online through our secure portal.' },
    { name: 'Bank Transfer', description: 'Transfer your payment directly to our bank account.' },
  ];


  bills: Bill[] = [
    { id: 'BILL001', connectionId: 'CON001', amount: 1500, dueDate: '2024-02-15', status: 'Pending' },
    { id: 'BILL002', connectionId: 'CON002', amount: 2300, dueDate: '2024-02-14', status: 'Paid' },
    { id: 'BILL003', connectionId: 'CON003', amount: 1800, dueDate: '2024-02-10', status: 'Overdue' }
  ];

  settingsCategories: SettingCategory[] = [
    {
      title: 'Bill Service Basics',
      icon: 'fa-solid fa-cogs',
      items: [
        { name: 'View Current Bill', link: '#', active: true },
        { name: 'View Previous Bill', link: '#' },
        { name: 'Pay Bill', link: '#' },
        // { name: 'Change Connection Request', link: '#' }

      ]
    },
    {
      title: 'Bill Service Advance',
      icon: 'fa-shield-alt',
      items: [
        { name: 'Pay Bill Before Due Date To Avail Discount', link: '#' },
        { name: 'Bill History', link: '#' },
        { name: 'Online Bill Payment Status', link: '#' }
      ]
    },
    {
      title: 'Bill Greviences',
      icon: 'fa-database',
      items: [
        { name: 'Report Incorrect Bill', link: '#' },
        { name: 'Online Payment Problem', link: '#' },
        { name: 'Other Bill Complaint', link: '#' }
      ]
    },
    {
      title: 'Preferences',
      icon: 'fa-sliders-h',
      items: [
        { name: 'Display Settings', link: '#' },
        { name: 'Language', link: '#' },
        { name: 'Notifications', link: '#' }
      ]
    }
  ];

  complaint: string = '';
  userName: string = '';

  paymentReciept: any = {
    todayDate: new Date(),
    receiptNo: '123456',
    billDate: new Date(),
    consumerName: 'John Doe',
    consumerId: 'C123',
    consumerNumber: '12345/D',
    arrears: 333,
    fine: 0,
    advance: 0,
    total: 333,
    discount: 3,
    incentive: 333,
    paymentEffected: 339,
  }

  currentBill: MyBill = {
    consumerNumber: 'NO13RJR01R13C030268379',
    demandNumber: 'RJ1192B',
    billNumber: '2019/4/NO13RJR01R13C030268379',
    billDate: '16-09-2019',
    name: 'Shri Ekansh Anand / Shri SK Anand',
    address: 'Kishanpur Inder Baba Road',
    billingPeriod: '04/2019 to 07/2019',
    dueDate: '26-09-2019',
    detachmentDate: '30-09-2019',
    combinationCategory: 'Low Head / Domestic / 15 MM',
    billingType: 'Drinking Water',
    monthlyAverage: 30000,
    sewerage: '-',
    waterValue: 1444.00,
    currentDemand: 1444.00,
    paymentStatus: 'This bill has not been paid',
    branchName: 'EE North',
    collectionCenterName: 'Rajpur',
  };

  selectedItem: string = 'view-current-bill';

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

  connectionModalHeader:string='New Connection Application';
  newconnection: NewConnection = { ...this.initialNewConnection };
  isProcessing: boolean = false;
  isConsumerUpdateModalOpen: boolean = false;

  connectionsNew: NewConnection[] = [
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

  constructor( private renderer: Renderer2, private toastService: ToastService){}

  changeView(view: string) {
    this.currentView = view;
    debugger;
    this.selectedItem = view;
    // Update active states
    this.settingsCategories.forEach(category => {
      category.items.forEach(item => {
        item.active = false;
        if (
          (view === 'view-current-bill' && item.name === 'View Current Bill') ||
          (view === 'password-policy' && item.name === 'Password Policy')
        ) {
          item.active = true;

        }
      });
    });
  }
  printReceipt() {
    const modalContent = document.getElementById('paymentRecieptModal'); // Get the modal content
    if (modalContent) {
      const printWindow = window.open('', '_blank'); // Open a new window
      if (printWindow) {
        printWindow.document.write(`
                <html>
                    <head>
                         <title>Payment Receipt</title>
                        <style>
                            /* Receipt Styles */
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                            }

                            .modal-header {
                                text-align: center;
                                border-bottom: none;
                                margin-top:80px;
                            }

                            .modal-header h3 {
                                font-size: 1.5rem;
                                margin: 0;
                                font-weight: bold;
                            }

                            .modal-header h6 {
                                font-size: 1rem;
                                margin: 0;
                                color: #555;
                            }

                            .modal-body {
                                padding: 20px;
                            }

                            .receipt-header {
                                margin-bottom: 20px;
                            }

                            .receipt-header .row {
                                display: flex;
                                justify-content: space-between;
                            }

                            .receipt-header .col-md-6 {
                                flex: 0 0 48%;
                            }

                            .receipt-header p {
                                margin: 5px 0;
                                font-size: 0.9rem;
                            }

                            .receipt-details {
                                margin-top: 20px;
                            }

                            .table {
                                width: 100%;
                                border-collapse: collapse;
                                margin: 20px 0;
                            }

                            .table td {
                                padding: 10px;
                                border-bottom: 1px solid #ddd;
                                text-align: left;
                            }

                            .table tr:nth-child(even) {
                                background-color: #f9f9f9;
                            }

                            .table tr:last-child td {
                                font-weight: bold;
                                font-size: 1rem;
                            }

                            .modal-footer {
                                text-align: right;
                                padding: 10px;
                                border-top: none;
                            }
                        </style>
                    </head>
                    <body>
                        ${modalContent.innerHTML} 
                    </body>
                </html>
            `);
        printWindow.document.close(); // Close the document
        printWindow.print(); // Trigger the print dialog
        printWindow.close(); // Close the print window after printing
      }
    }
  }
  async printBill(): Promise<void> {
    const modalContent = document.getElementById('imageModal'); // Get the modal content
    if (modalContent) {
      const image = modalContent.querySelector('img') as HTMLImageElement; // Select the image
      if (image) {
        try {
          // Wait for the image to fully load
          await this.ensureImageLoaded(image);
          this.openPrintWindow(image);
        } catch (error) {
          console.error('Failed to load the image:', error);
        }
      }
    }
  }

  private ensureImageLoaded(image: HTMLImageElement): Promise<void> {
    return new Promise((resolve, reject) => {
      if (image.complete && image.naturalHeight !== 0) {
        resolve(); // Image is already loaded
      } else {
        image.onload = () => resolve(); // Wait for the load event
        image.onerror = () => reject(new Error('Image failed to load.'));
      }
    });
  }

  /**
   * Opens a new print window and prints the given image
   * @param image - The image to be printed
   */
  private openPrintWindow(image: HTMLImageElement): void {
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(image, 0, 0); // Draw the image on the canvas
      const base64Image = canvas.toDataURL('image/png'); // Convert to Base64

      const printWindow = window.open('', '_blank'); // Open a new window
      if (printWindow) {
        printWindow.document.write(`
                <html>
                    <head>
                        <title>Print Bill</title>
                        <style>
                            body { text-align: center; margin: 0; padding: 0; font-family: Arial, sans-serif; }
                            img { max-width: 100%; height: auto; }
                        </style>
                    </head>
                    <body>
                        <h2>Print Current Bill</h2>
                        <img src="${base64Image}" alt="Print Current Bill" />
                    </body>
                </html>
            `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
  }

  saveChanges() {
    console.log('Saving billing rates:', this.viewCurrentBill);
    // Implement save functionality
  }

  exportBill() {
    // Logic to export the bill information
    console.log('Exporting bill information:', this.currentBill);
    // You can implement actual export logic here (e.g., generating a PDF or CSV)
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-success-subtle text-success rounded-pill px-2 py-1';
      case 'pending':
        return 'bg-warning-subtle text-warning rounded-pill px-2 py-1';
      case 'overdue':
        return 'bg-danger-subtle text-danger rounded-pill px-2 py-1';
      default:
        return '';
    }
  }

  onSubmit() {
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
    this.resetForm();
  }

  submitChangeRequest(){
    this.toastService.showSuccess("Your Change Connection Request has been Submitted Successfully.")
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
  updateConnection() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.newconnection.consumerName = this.newconnection.firstName + ' ' + this.newconnection.lastName;
    if (this.isConsumerUpdateModalOpen) {
      // Logic to update the consumer in the consumers array
      const index = this.connectionsNew.findIndex(c => c.id === this.newconnection.id);
      if (index !== -1) {
        this.connectionsNew[index] = { ...this.newconnection }; // Update the consumer data
      }
    } else {
      // Logic to add a new consumer
      let newconnection: NewConnection = { ...this.newconnection, id: this.generateNewId() };
      newconnection.status = 'New';
      this.connectionsNew.push(newconnection);
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
  }

   // Helper method to generate a new ID for the consumer
   generateNewId(): string {
    return 'CON' + (this.connectionsNew.length + 1).toString().padStart(3, '0'); // Example ID generation logic
  }
}
