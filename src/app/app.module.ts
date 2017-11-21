import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CollaborateurService } from './shared/service/collaborateur.service';
import { DepartementService } from './shared/service/departement.service';
import { PosteService } from './shared/service/poste.service';


import { AppComponent } from './app.component';
import { CreerComponent } from './creer/creer.component';
import { ListerComponent } from './lister/lister.component';
import { EditerComponent } from './editer/editer.component';

const appRoutes: Routes = [

  {path:'creer', component: CreerComponent},
  {path: 'lister', component: ListerComponent},
  {path: 'editer/:id', component: EditerComponent},
  {path: '**', redirectTo:'lister'}
]

@NgModule({
  declarations: [
    AppComponent,
    CreerComponent,
    ListerComponent,
    EditerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CollaborateurService, DepartementService, PosteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
