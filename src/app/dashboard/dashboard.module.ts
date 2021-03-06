import { DividendService } from './dividend/services/dividend.services';
import { ExchangeService } from './exchange/services/exchange.services';
import { InvestICOService } from './invest-ico/services/invest-ico.services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';

import { routing }  from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { DashboardService } from './services/dashboard.service';

import { AuthGuard } from '../auth.guard';
import { WalletComponent } from './wallet/wallet.component';
import { InvestICOComponent } from './invest-ico/invest-ico.component';
import { ExchangeComponent, CreateOrderDialog } from './exchange/exchange.component';
import { MaterialModule } from '../material.module';
import { DividendComponent } from './dividend/dividend.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    MaterialModule
  ],
  declarations: [RootComponent,WalletComponent, InvestICOComponent, ExchangeComponent, CreateOrderDialog, DividendComponent],
  exports:      [ ],
  entryComponents:[
    CreateOrderDialog
  ],
  providers:    [AuthGuard,DashboardService,InvestICOService, ExchangeService, DividendService]
})
export class DashboardModule { }
