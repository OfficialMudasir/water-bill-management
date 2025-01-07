import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true, // If using standalone component
  imports: [CommonModule], // Add CommonModule here
  template: `
    <div *ngFor="let toast of toasts" class="toast-container">
      <div [class]="'toast toast-' + toast.type">
        <svg *ngIf="toast.type === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle class="path circle" fill="none" stroke="#198754" stroke-width="6" cx="65.1" cy="65.1" r="62.1" />
          <polyline class="path check" fill="none" stroke="#198754" stroke-width="6" points="100.2,40.2 51.5,88.8 29.8,67.5" />
        </svg>
        <svg *ngIf="toast.type === 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle class="path circle" fill="none" stroke="#db3646" stroke-width="6" cx="65.1" cy="65.1" r="62.1" />
          <line class="path line" fill="none" stroke="#db3646" stroke-width="6" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
          <line class="path line" fill="none" stroke="#db3646" stroke-width="6" x1="95.8" y1="38" x2="34.4" y2="92.2" />
        </svg>
        <p>{{ toast.message }}</p>
      </div>
    </div>
<!-- 

    <div class="modal fade" id="statusSuccessModal" tabindex="-1" role="dialog" data-bs-backdrop="static"
      data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
              <div class="modal-body text-center p-lg-4">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                      <circle class="path circle" fill="none" stroke="#198754" stroke-width="6" stroke-miterlimit="10"
                          cx="65.1" cy="65.1" r="62.1" />
                      <polyline class="path check" fill="none" stroke="#198754" stroke-width="6" stroke-linecap="round"
                          stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                  </svg>
                  <h4 class="text-success mt-3">Approved</h4>
                  <p class="mt-3">Your application has been sent to next approval!</p>
                  <button type="button" class="btn btn-sm mt-3 btn-success" data-bs-dismiss="modal">Ok</button>
              </div>
          </div>
      </div>
    </div> -->
  `,
  styles: [
    `
      .toast-container {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1050;
      }
      .toast {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        color: #fff;
      }
      .toast-success {
        background-color: #198754;
      }
      .toast-error {
        background-color: #db3646;
      }
      svg {
        width: 30px;
        height: 30px;
      }
    `,
  ],
})
export class ToastComponent implements OnInit {
  toasts: { type: 'success' | 'error'; message: string }[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.toast$.subscribe(toast => {
      this.toasts.push(toast);

      // Remove toast after 3 seconds
      setTimeout(() => {
        this.toasts.shift();
      }, 3000);
    });
  }
}
