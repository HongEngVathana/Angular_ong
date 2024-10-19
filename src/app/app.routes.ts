import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChouseComponent } from './components/chouse/chouse.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'chouseus',
    component: ChouseComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'contactus',
    component: ContactmeComponent,
  },
];
