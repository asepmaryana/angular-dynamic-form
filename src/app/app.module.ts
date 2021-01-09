import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFormControlComponent } from './pages/ng-form-control/ng-form-control.component';
import { NgFormArrayComponent } from './pages/ng-form-array/ng-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    NgFormControlComponent,
    NgFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
