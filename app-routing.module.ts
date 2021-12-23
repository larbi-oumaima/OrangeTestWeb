import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ChoixComponent } from './components/choix/choix.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InscriptionComponent } from './components/inscription/inscription.component';


const routes: Routes = [
  {path : '' , component : ChoixComponent},
  {path : 'dashboardUsers' , component : DashboardComponent},
  {path : 'authentification' , component : AuthentificationComponent},
  {path : 'inscription' , component : InscriptionComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
