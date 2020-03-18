import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ProfileComponent } from './profile/profile.component';


const register: Routes = [
  {path:'',component:RegFormComponent},
  {path:'allStudents',component:ShowDetailsComponent},
  {path:'allStudents/profile/:id',component:ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(register)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
