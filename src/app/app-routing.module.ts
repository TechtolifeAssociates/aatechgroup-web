import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { HomeDetailsComponent }  from './home-details/home-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { NotFoundComponent }    from './not-found/not-found.component';

import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { ServicesComponent } from './services/services.component';
import { CloudServicesComponent } from './services/cloud-services/cloud-services.component';
import { InformationSecurityComponent } from './services/information-security/information-security.component';
import { ItServicesComponent } from './services/it-services/it-services.component';
import { NetworkServicesComponent } from './services/network-services/network-services.component';
import { ProjectManagementComponent } from './services/project-management/project-management.component';
import { StaffingSolutionsComponent } from './services/staffing-solutions/staffing-solutions.component';
/*import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
*/

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent } ,
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'careers', component: JobSearchComponent },
  { path: 'register-candidate', component: RegisterCandidateComponent },
  { path: 'register-employer', component: RegisterEmployerComponent },
  { path: 'services', component: HomeComponent },  
  { path: 'cloudservice', component: CloudServicesComponent }, 
  { path: 'informationsecurity', component: InformationSecurityComponent }, 
  { path: 'itservice', component: ItServicesComponent }, 
  { path: 'networkservice', component: NetworkServicesComponent }, 
  { path: 'projectmanagement', component: ProjectManagementComponent }, 
  { path: 'staffingsolutions', component: StaffingSolutionsComponent }, 
  { path: 'industries', component: HomeComponent },
  { path: 'indexdetails', component:HomeDetailsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false // <-- debugging purposes only
        //preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CanDeactivateGuard,
    //SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/