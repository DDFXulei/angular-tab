import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page3Component} from './page3.component';

export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page1的时候显示Page1Component组件
    component: Page3Component
  },
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class Page3RouteModule {
}
