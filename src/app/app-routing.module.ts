import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent }  from './compose-message.component';
import { ComposeMsgComponent }  from './compose-msg.component';

import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent,
  //   data: { titleTest: 'Heroes List' } },
  // { path: 'detail/:id', component: HeroDetailComponent,  data: { titleTest: 'Heroes Detail' } },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'composeTest',
    component: ComposeMsgComponent,
    outlet: 'popupTest'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(
      routes,
      {
        // enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )],
    providers: [
      CanDeactivateGuard,
      SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }