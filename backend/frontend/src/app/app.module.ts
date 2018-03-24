import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingStatisticsComponent } from './landing-statistics/landing-statistics.component';
import { LandingEventComponent } from './landing-event/landing-event.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingStatisticsComponent,
    LandingEventComponent,
    NoticeBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }