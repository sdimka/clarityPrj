import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainForm } from './mainForm/mainForm.component'

const routes: Routes = [
  { path: '', component: MainForm},
  //{ path: 'complete', component: CompleteComponent},
  //{ path: 'completeNew', component: CompleteNewComponent},
  //{ path: '**', component: CompleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
