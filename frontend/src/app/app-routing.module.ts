import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TratoresComponent } from './matriz/tratores/tratores.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tratores', component: TratoresComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
