import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { CatalogPageModule } from '../catalog/catalog.module';
import { DiscoverPageModule } from '../discover/discover.module';
import { ShoppingCartPageModule } from '../shopping-cart/shopping-cart.module';
import { MyOriflamePageModule } from '../my-oriflame/my-oriflame.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    CatalogPageModule,
    DiscoverPageModule,
    ShoppingCartPageModule,
    MyOriflamePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
