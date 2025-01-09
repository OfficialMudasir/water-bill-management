import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, AfterViewInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Html5Qrcode } from 'html5-qrcode';
import { QRCodeModule } from './qr-module.module';
import * as XLSX from 'xlsx';

interface Bill {
  id: string;
  connectionId: string;
  amount: number;
  dueDate: string;
  status: string;
  imageUrl: string;
}

interface MeterReadings {
  id: string;
  noOfBills: number;
  billingCycle: string;
  totalDemand: number;
  pdfUrl: string;
  status: string;
}

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BillingComponent implements AfterViewInit {

  private html5Qrcode: Html5Qrcode | null = null;
  qrData: string = 'https://example.com'; // Default QR code data
  qrCodeValue: string = '';
  selectedImageUrl: string = 'D:/TestTask/WaterBillManagement/water-bill-management/public/assets/WaterBill.jpg';
  meterReadingFile = {
    name: '',
    filePath: ''
  }

  bills: Bill[] = [
    { id: 'BILL001', connectionId: 'CON001', amount: 1500, dueDate: '2024-02-15', status: 'Pending', imageUrl: 'D:/TestTask/WaterBillManagement/water-bill-management/public/assets/WaterBill.jpg' },
    { id: 'BILL002', connectionId: 'CON002', amount: 2300, dueDate: '2024-02-14', status: 'Paid', imageUrl: 'D:/TestTask/WaterBillManagement/water-bill-management/public/assets/WaterBill.jpg' },
    { id: 'BILL003', connectionId: 'CON003', amount: 1800, dueDate: '2024-02-10', status: 'Overdue', imageUrl: 'D:/TestTask/WaterBillManagement/water-bill-management/public/assets/WaterBill.jpg' }
  ];

  billingData: MeterReadings[] = [
    {
      id: 'BILL001',
      noOfBills: 10,
      billingCycle: 'January 2023',
      totalDemand: 1500, // Total demand in kWh
      pdfUrl: 'path/to/pdf1.pdf', // URL to the PDF
      status: 'Completed'
    },
    {
      id: 'BILL002',
      noOfBills: 15,
      billingCycle: 'February 2023',
      totalDemand: 2000,
      pdfUrl: 'path/to/pdf2.pdf',
      status: 'Pending'
    },
    {
      id: 'BILL003',
      noOfBills: 8,
      billingCycle: 'March 2023',
      totalDemand: 1800,
      pdfUrl: 'path/to/pdf3.pdf',
      status: 'Completed'
    },
    // Add more billing data as needed
  ];

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
  selectedApplications: string[] = [];

  userType: string = localStorage.getItem("userType") ?? '';
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

  initializeMeterReading: MeterReadings = {
    id: '',
    noOfBills: 0,
    billingCycle: '',
    totalDemand: 0,
    pdfUrl: '',
    status: ''
  }

  billEntry = {...this.initializeMeterReading}


  ngAfterViewInit() {

  }


  // Example methods for actions
  editBill(bill: any) {
    // Logic to edit the bill
    console.log('Editing bill:', bill);
  }

  deleteBill(bill: any) {
    // Logic to delete the bill
    console.log('Deleting bill:', bill);
  }



  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.selectedApplications = this.bills.map(app => app.id);
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

  getStatusClassForBillingData(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
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


  // Method to handle file change
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.meterReadingFile.name = file.name;
      // this.meterReadingFile.filePath = file.path;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        this.processExcelData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  }
  // Method to process the Excel data
  processExcelData(data: any) {
    // Assuming the first row contains headers
    const headers = data[0];
    const rows = data.slice(1); // Get all rows except the header

    // Initialize variables to calculate total demand and number of bills
    let totalDemand = 0;
    const billingCycles: Set<string> = new Set();
    // Loop through each row to calculate total demand and number of bills
    rows.forEach((row: any) => {
      debugger;
      const amount = row[2];
      totalDemand += amount;

      // Calculate Date Billing Cycle from all columns by Month year

      const date = new Date(row[3]);

      // Check if the date is valid
      if (!isNaN(date.getTime())) {
        totalDemand += amount; // Accumulate total demand
        // Format the billing cycle as "Month Year"
        const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        billingCycles.add(monthYear); // Add the formatted month/year to the Set
      }
    });

    // Create a new billing entry
    const billEntry = {
      id: `BILL${this.billingData.length + 1}`,
      noOfBills: rows.length,
      // billingCycle: Array.from(billingCycles).join(', '),
      billingCycle: new Date().toDateString(),
      totalDemand: totalDemand,
      pdfUrl: 'path/to/default.pdf',
      status: 'Pending'
    };

    this.billEntry = billEntry;
    
  }

  // Method to generate bills
  generateBills() {
    if(this.billEntry.id !== ''){
      this.billingData.push(this.billEntry);
    }
    this.billEntry = {...this.initializeMeterReading}
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

  /**
   * Ensures the image is fully loaded.
   * @param image - The image element to check
   * @returns A promise that resolves when the image is loaded
   */
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

  printReceipt() {
    const modalContent = document.getElementById('paymentRecieptModal'); // Get the modal content
    if (modalContent) {
      const printWindow = window.open('', '_blank'); // Open a new window
      if (printWindow) {
        printWindow.document.write(`
                <html>
                    <head>
                        <title style="display:none;">Payment Receipt</title>
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
} 