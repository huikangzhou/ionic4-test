import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabsIcon: any = {
    home: {
      active: 'assets/icon/home-1.svg',
      inactive: 'assets/icon/home-0.svg'
    },
    catalog: {
      active: 'assets/icon/catalog-1.svg',
      inactive: 'assets/icon/catalog-0.svg'
    },
    discover: {
      active: 'assets/icon/discover-1.svg',
      inactive: 'assets/icon/discover-0.svg'
    },
    'shopping-cart': {
      active: 'assets/icon/carts-1.svg',
      inactive: 'assets/icon/carts-0.svg'
    },
    'my-oriflame': {
      active: 'assets/icon/me-1.svg',
      inactive: 'assets/icon/me-0.svg'
    }
  };
  currentTabName = 'home';
  constructor() {}

  selectTab(tabName) {
    this.currentTabName = tabName;
  }
}
