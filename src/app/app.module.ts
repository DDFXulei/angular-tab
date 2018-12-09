import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {AppRouterModule} from './app-route.module';
import {RouteReuseStrategy} from '@angular/router';
import {SimpleReuseStrategy} from './services/SimpleReuseStrategy';
import { TabComponent } from './tab/tab.component';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRouterModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
