import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './shared/maintenance/maintenance.component';
import { NotFound404Component } from './shared/not-found404/not-found404.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
