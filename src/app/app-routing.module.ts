import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './sale/main/main.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  // {path: 'sale',  loadChildren: './sale/sale.module#SaleModule'},
  /*{
    path: 'sale',
    component: MainComponent,
    children: [
      {
        path: 'sale',
        loadChildren: './sale/sale.module#SaleModule'
      },
    ],
  },*/
  // {path: 'sale',  loadChildren: './sale/sale.module#SaleModule'},
  // {path: '**', component: LoginComponent}
  {path: 'sale', component: MainComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
