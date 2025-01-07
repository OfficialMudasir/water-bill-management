import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SettingCategory {
  title: string;
  icon: string;
  items: {
    name: string;
    link: string;
    active?: boolean;
  }[];
}

interface PaymentGateway {
  apiKey: string;
  secretKey: string;
  webhookUrl: string;
  mode: 'test' | 'live';
}

interface LoginSettings {
  maxAttempts: number;
  lockoutDuration: number;
  sessionTimeout: number;
  allowMultipleSessions: boolean;
}

interface BackupSettings {
  autoBackup: boolean;
  frequency: string;
  retentionPeriod: number;
  backupLocation: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settingsCategories: SettingCategory[] = [
    {
      title: 'System Settings',
      icon: 'fa-solid fa-cogs',
      items: [
        { name: 'Billing Rates', link: '#', active: true },
        { name: 'Payment Gateway', link: '#' },
        { name: 'Notifications', link: '#' }
      ]
    },
    {
      title: 'Security',
      icon: 'fa-shield-alt',
      items: [
        { name: 'Password Policy', link: '#' },
        { name: 'Login Settings', link: '#' },
        { name: 'Audit Logs', link: '#' }
      ]
    },
    {
      title: 'Data Management',
      icon: 'fa-database',
      items: [
        { name: 'Backup Settings', link: '#' },
        { name: 'Data Retention', link: '#' },
        { name: 'Export Settings', link: '#' }
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

  billingRates = {
    residentialRate: '',
    commercialRate: '',
    latePaymentFee: '',
    gracePeriod: ''
  };

  currentView: string = 'billing-rates'; // Default view
  
  passwordPolicy = {
    minCharacters: false,
    specialCharacters: false,
    numbers: false,
    expiryDays: ''
  };

  paymentGateway: PaymentGateway = {
    apiKey: '',
    secretKey: '',
    webhookUrl: '',
    mode: 'test'
  };

  loginSettings: LoginSettings = {
    maxAttempts: 3,
    lockoutDuration: 30,
    sessionTimeout: 60,
    allowMultipleSessions: false
  };

  backupSettings: BackupSettings = {
    autoBackup: true,
    frequency: 'daily',
    retentionPeriod: 30,
    backupLocation: '/backups'
  };

  changeView(view: string) {
    this.currentView = view;
    // Update active states
    this.settingsCategories.forEach(category => {
      category.items.forEach(item => {
        item.active = false;
        if (
          (view === 'billing-rates' && item.name === 'Billing Rates') ||
          (view === 'password-policy' && item.name === 'Password Policy')
        ) {
          item.active = true;
        }
      });
    });
  }

  savePasswordPolicy() {
    console.log('Saving password policy:', this.passwordPolicy);
    // Implement save functionality
  }

  saveChanges() {
    console.log('Saving billing rates:', this.billingRates);
    // Implement save functionality
  }

  savePaymentGateway() {
    console.log('Saving payment gateway settings:', this.paymentGateway);
  }

  saveLoginSettings() {
    console.log('Saving login settings:', this.loginSettings);
  }

  saveBackupSettings() {
    console.log('Saving backup settings:', this.backupSettings);
  }
} 