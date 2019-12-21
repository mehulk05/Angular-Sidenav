import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';



const routes: Routes = [

  { path: '', component: AppComponent},
  { path: 'link1', component: Sidebar2Component},
  { path: 'link2', component: Sidebar2Component}


 
];
   





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
