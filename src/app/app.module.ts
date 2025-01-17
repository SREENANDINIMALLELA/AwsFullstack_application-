import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { DocumentsComponent } from './documents/documents.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, en_US, en_GB } from 'ng-zorro-antd';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthGuard } from './auth.guard';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    DocumentsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    RouterModule.forRoot([
          {path: 'login', component: AuthComponent},
          {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
          {path: 'home/todos', component: DriversComponent,canActivate: [AuthGuard]},
          {path: 'home/documents', component: DocumentsComponent, canActivate: [AuthGuard]},
          {
              path: '**',
              redirectTo: 'login',
              pathMatch: 'full'
            }
        ]),
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AmplifyAngularModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB },
  AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
