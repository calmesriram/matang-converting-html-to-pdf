import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { MypdfComponent } from './mypdf/mypdf.component';
import { TablegraphicsComponent } from './tablegraphics/tablegraphics.component';
import { TablepdfComponent } from './tablepdf/tablepdf.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'nav',
    component:NavComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'pdf',
    component:MypdfComponent
  },
  {
    path:'graphictable',
    component:TablegraphicsComponent
  },
  {
    path:'tablepdf',
    component:TablepdfComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
