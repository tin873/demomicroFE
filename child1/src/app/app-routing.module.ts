import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [{
    // path: 'child1',
    // children: [
    //   /**
    //    * All routes specific to this app go here.
    //    */
    //   {
    //     path: 'page1',
    //     component: Page1Component
    //   }, {
    //    path: 'page2',
    //    component: Page2Component
    //   }]
    // }, {
    path: '**',
    component: EmptyRouteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
