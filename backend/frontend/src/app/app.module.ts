import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingStatisticsComponent } from './landing-statistics/landing-statistics.component';
import { LandingEventComponent } from './landing-event/landing-event.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { StudentApplicationsComponent } from './student-applications/student-applications.component';
import { EligibilityFormComponent } from './eligibility-form/eligibility-form.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { Pipe } from '@angular/core/src/metadata/directives';
import { TempComponent } from './temp/temp.component';

// { path: 'hero/:id',      component: HeroDetailComponent },
const appRoutes: Routes = [
  { path: '',         component: LandingPageComponent,  data: { title: 'Home Page' }  },
  { path: 'temp',     component: TempComponent, data: { title: 'Temp' }  },
  { path: 'company',  component: CompanyPageComponent, data: { title: 'Company' } },
  // { path: 'company',  component: TempComponent, data: { title: 'Company' } },
  
];
//   { path: '**', component: PageNotFoundComponent }

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingStatisticsComponent,
    LandingEventComponent,
    NoticeBoardComponent,
    SlotBookingComponent,
    CompanyPageComponent,
    StudentApplicationsComponent,
    EligibilityFormComponent,
    StudentPageComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
