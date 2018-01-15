import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { TasksPage } from '../tasks/tasks';
import { BuyPage } from '../buy/buy';
import { PricesPage } from '../prices/prices';
import { AlertsPage } from '../alerts/alerts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PricesPage;
  tab2Root = TasksPage;
  tab3Root = BuyPage;
  tab4Root = AlertsPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
