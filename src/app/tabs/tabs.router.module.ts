import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { CatalogPage } from '../catalog/catalog.page';
import { DiscoverPage } from '../discover/discover.page';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart.page';
import { MyOriflamePage } from '../my-oriflame/my-oriflame.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'catalog',
        outlet: 'catalog',
        component: CatalogPage
      },
      {
        path: 'discover',
        outlet: 'discover',
        component: DiscoverPage
      },
      {
        path: 'shopping-cart',
        outlet: 'shopping-cart',
        component: ShoppingCartPage
      },
      {
        path: 'my-oriflame',
        outlet: 'my-oriflame',
        component: MyOriflamePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
