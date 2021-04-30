import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MotoristaComponent } from './crud/motorista/motorista.component';
import { ClienteComponent } from './crud/cliente/cliente.component';
import { MotoristalocalizacaoComponent } from './crud/motoristalocalizacao/motoristalocalizacao.component';
import { MotoristacadastroComponent } from './crud/motoristacadastro/motoristacadastro.component';
import { MotoristalistaComponent } from './crud/motoristalista/motoristalista.component';
import { Motorista } from './model/motorista';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'motoristalista', component:MotoristalistaComponent },
  {path: 'motoristacadastro', component:MotoristacadastroComponent},
  {path: 'localizacao', component:MotoristalocalizacaoComponent},
  {path: 'clientelista', component:ClienteComponent},
  {path: 'clientecadastro', component:ClienteComponent},
  {path: 'viagemlista', component:MotoristalistaComponent },
  {path: 'viagemcadastro', component:MotoristacadastroComponent},
  // {path: 'motoristamain', component:MotoristaComponent},
  {path: 'home', redirectTo: '', pathMatch:'full'},

  {path: '', redirectTo: '', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
