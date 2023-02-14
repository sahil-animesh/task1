import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './forms/form.component';
import { OutputComponent } from './output/output.component';
import { FormModule } from './forms/forms.module';
import {FormsModule } from '@angular/forms'
import { OutputModule } from './output/output.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormModule,
    OutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
