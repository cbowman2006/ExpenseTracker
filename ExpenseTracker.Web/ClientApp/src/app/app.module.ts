import { environment } from './../environments/environment';
import { CategoryService } from './services/category.service';
import { appRoutes } from './route';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
      ExpenseComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    SharedModule,
    CoreModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: "ORIGIN_URL", useValue: environment.apiurl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
