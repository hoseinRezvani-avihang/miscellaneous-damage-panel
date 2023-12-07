import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { DossierComponent } from './dossier/dossier/dossier.component';
import { authGuard } from './guards/auth.guard';
import { DossierPageComponent } from './dossier/dossier-page/dossier-page.component';

const routes: Routes = [
  {
    path: "auth", 
    component: AuthComponent,
    canActivate: [
      authGuard
    ]
  }, 
  {
    path: "dossier", 
    component: DossierPageComponent, 
    canActivate: [
      authGuard
    ]
  }, 
  {
    path: "", 
    pathMatch: "full", 
    component: DossierPageComponent, 
    canActivate: [
      authGuard
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
