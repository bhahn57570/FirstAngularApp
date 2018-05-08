import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AlertService } from './alert.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HeroesComponent } from './hero/heroes/heroes.component';
// import { DashboardComponent } from './hero/dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';


import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';

import { TestBenComponent } from './test-ben/test-ben.component';
import { InputOutputComponent, NameChildComponent, CountdownTimerComponent } from './input-output/input-output.component';
import { MissionService } from './mission.service';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './flying-heroes.pipe';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './flying-heroes.component';
import { PageNotFoundComponent } from './not-found.component';
// import { CrisisCenterModule }      from './crisis-center/crisis-center.module';
import { HeroesModule }     from './hero/heroes.module';
import { DialogService }           from './dialog.service';
import { ComposeMessageComponent } from './compose-message.component';
// import { AdminModule }             from './admin/admin.module';
import { ComposeMsgComponent } from './compose-msg.component';

import { LoginRoutingModule }      from './login-routing.module';


import { Router } from '@angular/router';

import { APP_CONFIG, HERO_DI_CONFIG }    from './app.config';

import { Logger } from './logger.service';

import { HeroOfTheMonthComponent }      from './hero-of-the-month.component';
import { ObservableComponent } from './observable-test.component'

import { HttpClientModule } from '@angular/common/http';

import { ConfigComponent }      from './config/config.component';

import { HttpErrorHandler }     from './http-error-handler.service';

import * as totor from '../assets/config';

import { BrandsComponent } from './brands/brands.component'

import { BrowserXhr } from '@angular/http';
import {CustExtBrowserXhr} from './cust-ext-browser-xhr';

import { PackageSearchComponent } from './package-search/package-search.component';

import { httpInterceptorProviders } from './http-interceptors/index';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { HeroFormComponent } from './hero-form/hero-form.component';
import { ListTemplateComponent } from './list-template/list-template.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // DashboardComponent,
    MessagesComponent,

    TestBenComponent,
    InputOutputComponent,
    NameChildComponent,
    CountdownTimerComponent,
    AstronautComponent,
    MissionControlComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    HighlightDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    ComposeMsgComponent,
    LoginComponent,
    HeroOfTheMonthComponent,
    ObservableComponent,
    ConfigComponent,
    BrandsComponent,
    PackageSearchComponent,
    HeroFormComponent,
    ListTemplateComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HeroesModule,
    // CrisisCenterModule,
    // AdminModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    MessageService,
    MissionService,
    HttpErrorHandler,
    AdService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
    { provide: BrowserXhr, useClass:CustExtBrowserXhr },
    { provide: RequestCache, useClass: RequestCacheWithMap },
    Logger,
    httpInterceptorProviders,
    DialogService,
    AlertService,
    UserService
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 // Diagnostic only: inspect router configuration
 constructor(router: Router) {
  console.log(totor);
  console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
}

}
