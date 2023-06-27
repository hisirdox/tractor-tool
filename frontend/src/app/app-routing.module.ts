import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TratoresComponent } from './matriz/principal/tratores.component';
import { ProprietarioComponent } from './proprietario/principal/proprietario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tratores', component: TratoresComponent },
  { path: 'proprietario', component: ProprietarioComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
