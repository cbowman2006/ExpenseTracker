import { CoreModule } from './core/core.module';
import { appRoutes } from './route';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    SharedModule,
    CoreModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
