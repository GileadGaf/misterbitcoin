import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SelfTransferGuard } from './guards/self-transfer.guard';
import { ContactResolveService } from './services/contact-resolve.service';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

const routes: Routes = [
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    resolve: { contact: ContactResolveService },
  },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact', component: ContactPageComponent,canActivate:[AuthGuard] },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent, canActivate:[AuthGuard,SelfTransferGuard],
    resolve: { contact: ContactResolveService },
  },
  {
    path: 'contact/:id/:backToContacts',
    component: ContactDetailsComponent, canActivate:[AuthGuard,SelfTransferGuard],
    resolve: { contact: ContactResolveService },
  },
  { path: 'statistics', component: StatisticPageComponent },
  { path: 'statistics', component: StatisticPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomepageComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
