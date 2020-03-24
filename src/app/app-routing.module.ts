import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoniesComponent } from './ponies/ponies.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PonyDetailComponent }  from './pony-detail/pony-detail.component';

const routes: Routes = [
  { path: 'ponies', component: PoniesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PonyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }