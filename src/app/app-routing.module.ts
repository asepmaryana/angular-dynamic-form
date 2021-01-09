import { NgFormControlComponent } from './pages/ng-form-control/ng-form-control.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgFormArrayComponent } from './pages/ng-form-array/ng-form-array.component';

const routes: Routes = [
  {
    path: "",
    component: NgFormControlComponent
  },
  {
    path: "array",
    component: NgFormArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
