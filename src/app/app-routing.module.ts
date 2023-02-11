import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamentoComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
