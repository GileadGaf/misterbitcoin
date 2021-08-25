import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HeaderComponent } from './cmps/header/header.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { DebouncePipe } from './pipes/debounce.pipe';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { InputLimitDirective } from './directive/input-limit.directive';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { MoveFilterComponent } from './cmps/move-filter/move-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    HomepageComponent,
    ContactPageComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    HeaderComponent,
    StatisticPageComponent,
    ContactFilterComponent,
    DebouncePipe,
    SignupComponent,
    TransferFundComponent,
    MoveListComponent,
    InputLimitDirective,
    MovePreviewComponent,
    MoveFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
