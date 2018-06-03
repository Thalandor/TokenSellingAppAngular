import { MatSnackBar } from '@angular/material';
import { InvestICOService } from './services/invest-ico.services';
import { WalletDetails } from './../models/wallet.details.interface';
import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest-ico',
  templateUrl: './invest-ico.component.html',
  styleUrls: ['./invest-ico.component.css']
})
export class InvestICOComponent implements OnInit {
 
  public tokenPrice: number;
  public walletDetails: WalletDetails;
  public userAddress: string;
  public investAmount: number;

  constructor(public dashboardService: DashboardService, public investICOService: InvestICOService, public snackBar: MatSnackBar)  { }

  public sendEther(){
    this.investICOService.invest(this.investAmount)
      .subscribe((transaction: string) => {
        this.snackBar.open('Transaction done with the number: ' + transaction, '',{
          duration: 3000
        });
      },
        error => {
          //this.notificationService.printErrorMessage(error);
        });
  }

  ngOnInit() {
    this.dashboardService.getWalletDetails()
      .subscribe((walletDetails: WalletDetails) => {
        this.walletDetails = walletDetails;
      },
        error => {
          //this.notificationService.printErrorMessage(error);
        });

        this.investICOService.getTokenPrice()
      .subscribe((tokenPrice: number) => {
        this.tokenPrice = tokenPrice;
      },
        error => {
          //this.notificationService.printErrorMessage(error);
        });
  }

}
