import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Catalog', loadChildren: './catalog/catalog.module#CatalogPageModule' },
  { path: 'Discover', loadChildren: './discover/discover.module#DiscoverPageModule' },
  { path: 'ShoppingCart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartPageModule' },
  { path: 'MyOriflame', loadChildren: './my-oriflame/my-oriflame.module#MyOriflamePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
