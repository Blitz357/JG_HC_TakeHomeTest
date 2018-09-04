import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchMainComponent } from './search-main/search-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { APP_BASE_HREF } from '@angular/common';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonAddressComponent } from './person-address/person-address.component';
import { PersonImageComponent } from "./person-image/person-image.component";
import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './people-list/people-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchMainComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchMainComponent,
    PageNotFoundComponent,
    AboutComponent,
    PersonInfoComponent,
    PersonAddressComponent,
    PersonImageComponent,
    PeopleListComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
     