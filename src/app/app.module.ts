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
          {path: '', component: AuthComponent},
          {path: 'home', component: HomeComponent},
          {path: 'home/todos', component: DriversComponent},
          {path: 'home/documents', component: DocumentsComponent},
        ]),
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule { }
