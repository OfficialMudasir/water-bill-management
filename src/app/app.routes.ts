import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { BillingComponent } from './components/billing/billing.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { MyBillsComponent } from './components/consumer/my-bills/my-bills.component';
import { ComplaintHistoryComponent } from './components/consumer/complaint-history/complaint-history.component';
import { RegisterComplaintComponent } from './components/consumer/register-complaint/register-complaint.component';
import { ConsumerComponent } from './components/consumer/consumer/consumer.component';
import { PaymentAdjustmentComponent } from './components/consumer/payment-adjustment/payment-adjustment.component';
import { BillGrievanceComponent } from './components/bill-grievance/bill-grievance.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'connections', component: ConnectionsComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'approvals', component: ApprovalsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'consumer/my-bills', component: MyBillsComponent },
      { path: 'consumer/complaint-history', component: ComplaintHistoryComponent },
      { path: 'consumer/register-complaint', component: RegisterComplaintComponent },
      { path: 'consumer/consumer', component: ConsumerComponent },
      { path: 'consumer/payment-adjustment', component: PaymentAdjustmentComponent },
      {path:  'bill-grievance', component: BillGrievanceComponent}




    ]
  },
  { path: '**', redirectTo: '/login' }
];
