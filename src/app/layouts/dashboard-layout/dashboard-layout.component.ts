import { Component, OnInit, OnDestroy,Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser  } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  username: string = '';
  userType: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  menuItems: { name: string; link: string; icon: string }[] = [];
  allMenus = [
    { name: 'Dashboard', link: '/dashboard', icon: 'bi bi-house-door' },
    { name: 'Consumer', link: '/consumer/consumer', icon: 'bi bi-gear' },
    { name: 'Connections', link: '/connections', icon: 'bi bi-plug' },
    { name: 'Billing', link: '/billing', icon: 'bi bi-receipt' },
    { name: 'Approvals', link: '/approvals', icon: 'bi bi-check2-square' },
    { name: 'Grievances', link: '/bill-grievance', icon: 'bi bi-check2-square' },
    { name: 'Reports', link: '/reports', icon: 'bi bi-file-text' },
    { name: 'Settings', link: '/settings', icon: 'bi bi-gear' },

    { name: 'My Bills', link: '/consumer/my-bills', icon: 'bi bi-gear' },
    { name: 'Register Complaint', link: '/consumer/register-complaint', icon: 'bi bi-receipt' },
    { name: 'Complaint History', link: '/consumer/complaint-history', icon: 'bi bi-file-text' },
    { name: 'Payment Adjustment', link: '/consumer/payment-adjustment', icon: 'bi bi-gear' },




  ];
  topMenuItems = [
    { name: 'Home', link: '/dashboard', Icon: 'fas fa-search' },
    { name: 'Settings', link: '/settings', Icon: 'fas fa-bell' },
    { name: 'Profile', link: '/dashboard', Icon: 'fas fa-user' },
  ];
  selectedMenuItem: string = 'Dashboard';

  isOnline = true; // Tracks internet connectivity
  onlineSubscription!: Subscription;
  offlineSubscription!: Subscription;


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.initializeUserDetails();
    this.configureMenuItems();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check initial online status
      this.isOnline = navigator.onLine;

      // Listen to online and offline events
      this.onlineSubscription = fromEvent(window, 'online').subscribe(() => {
        this.isOnline = true;
      });
      this.offlineSubscription = fromEvent(window, 'offline').subscribe(() => {
        this.isOnline = false;
      });
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe only if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.onlineSubscription.unsubscribe();
      this.offlineSubscription.unsubscribe();
    }
  }

  

  private initializeUserDetails() {
    if (this.isBrowser()) {
      this.username = localStorage.getItem('username') || '';
      this.password = localStorage.getItem('password') || '';
      this.userType = localStorage.getItem('userType') || '';

      // Validate if the user is logged in
      this.isLoggedIn = this.username !== '' && this.password !== '' && this.userType !== '';

      // Append domain to username if user is logged in
      if (this.isLoggedIn) {
        this.username = this.username + '@water.com';
      }
    }
  }

  private configureMenuItems() {
    if (!this.isLoggedIn) return;

    switch (this.userType) {
      case 'Admin':
        this.menuItems = this.allMenus;
        break;
      case 'Executive':
        this.selectedMenuItem = "Approvals";
        this.menuItems = this.allMenus.filter(item => ['Approvals', 'Reports'].includes(item.name));
        break;
      case 'Assistant':
        this.selectedMenuItem = "Approvals";
        this.menuItems = this.allMenus.filter(item => ['Approvals', 'Reports'].includes(item.name));
        break;
      case 'Junior':
        this.selectedMenuItem = "Approvals";
        this.menuItems = this.allMenus.filter(item => ['Approvals', 'Reports', 'Grievances'].includes(item.name));
        break;
      case 'Operator':
        this.selectedMenuItem = "Consumer"
        this.menuItems = this.allMenus.filter(item => ['Consumer', 'Billing', 'Reports', 'Payment Adjustment'].includes(item.name));
        break;
      case 'Consumer':
        this.selectedMenuItem = "My Bills";
        this.menuItems = this.allMenus.filter(item => ['My Bills', 'Register Complaint', 'Complaint History'].includes(item.name));
        break;
      default:
        this.menuItems = this.allMenus.filter(item => item.name === 'Dashboard');
        break;
    }
  }

  private redirectToLogin() {
    this.router.navigate(['/login']);
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  setSelectedMenuItem(menuItemName: string) {
    this.selectedMenuItem = menuItemName;
  }


  onLogout() {
    localStorage.clear();
    this.redirectToLogin();
  }
}
