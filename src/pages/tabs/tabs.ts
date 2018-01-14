import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { TasksPage } from '../tasks/tasks';
import { PricesPage } from '../prices/prices';
import { AlertsPage } from '../alerts/alerts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PricesPage;
  tab2Root = TasksPage;
  tab3Root = AlertsPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
