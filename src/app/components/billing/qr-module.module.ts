import { NgModule } from '@angular/core';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [QrCodeModule],
  exports: [QrCodeModule] // Export it so it can be used in other modules
})
export class QRCodeModule {}