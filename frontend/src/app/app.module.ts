import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TratoresComponent } from './matriz/principal/tratores.component';
import { ProprietarioComponent } from './proprietario/principal/proprietario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TratoresComponent,
    ProprietarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
