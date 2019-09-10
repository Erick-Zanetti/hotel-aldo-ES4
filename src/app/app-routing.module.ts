import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ApartamentoComponent } from './apartamento/apartamento.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RoutesInterceptor } from './interceptor/routes.interceptor';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [RoutesInterceptor] },
  { path: 'apartamento', component: ApartamentoComponent, canActivate: [RoutesInterceptor] },
  { path: 'categoria', component: CategoriaComponent, canActivate: [RoutesInterceptor] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
