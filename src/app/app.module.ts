import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectsComponent} from './projects/projects.component';
import {DetailComponent} from './projects/detail/detail.component';
import {NodeService} from './shared/node.service';
import { AccordionComponent } from './projects/detail/accordion/accordion.component';
import { PropertyTableComponent } from './projects/detail/property-table/property-table.component';
import { PrimaryFieldsComponent } from './projects/detail/primary-fields/primary-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    DashboardComponent,
    ProjectsComponent,
    DetailComponent,
    AccordionComponent,
    PropertyTableComponent,
    PrimaryFieldsComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],

  providers: [NodeService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
