import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';




@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})

export class ScanQRPage implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnDestroy() {
    // BarcodeScanner.showBackground();
    // BarcodeScanner.stopScan();
  }

  ngOnInit() {
  }

  // async startScan() {
  //   await BarcodeScanner.checkPermission({ force: true });

  //   BarcodeScanner.hideBackground();
  //   const result = await BarcodeScanner.startScan();

  //   if (result.hasContent) {
  //     let cont: String[] = result.content.split("/")
  //     this.router.navigate(['tabs/' + cont[0] + "/" + cont[1]])
  //     console.log("page Destroyed 2")
  //     BarcodeScanner.showBackground();
  //     BarcodeScanner.stopScan();
  //   } else {
  //     BarcodeScanner.showBackground();
  //     BarcodeScanner.stopScan();
  //   }
  // };

}
