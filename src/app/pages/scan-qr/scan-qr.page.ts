import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


  

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})

export class ScanQRPage implements OnInit, OnDestroy{

  

  constructor(private router: Router) {}
  
  
  ngOnDestroy() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  ngOnInit() {
    
   this.askUser();

  }



  
  
  askUser = () => {
    const c = confirm('Vuoi scansionare un QR code?');

    if (c) {
      this.startScan();
    }
  };

  startScan = async () => {
    await BarcodeScanner.checkPermission({ force: true });
 
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan(); 

  
    if (result.hasContent) {

      this.router.navigate(['tabs/',result.content])
    }
  };

}
