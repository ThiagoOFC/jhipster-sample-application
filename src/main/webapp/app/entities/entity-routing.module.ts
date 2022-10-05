import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'produto',
        data: { pageTitle: 'jhipsterSampleApplicationApp.produto.home.title' },
        loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule),
      },
      {
        path: 'armazenamento',
        data: { pageTitle: 'jhipsterSampleApplicationApp.armazenamento.home.title' },
        loadChildren: () => import('./armazenamento/armazenamento.module').then(m => m.ArmazenamentoModule),
      },
      {
        path: 'entrada-saida-produto',
        data: { pageTitle: 'jhipsterSampleApplicationApp.entradaSaidaProduto.home.title' },
        loadChildren: () => import('./entrada-saida-produto/entrada-saida-produto.module').then(m => m.EntradaSaidaProdutoModule),
      },
      {
        path: 'produto-cadastrado',
        data: { pageTitle: 'jhipsterSampleApplicationApp.produtoCadastrado.home.title' },
        loadChildren: () => import('./produto-cadastrado/produto-cadastrado.module').then(m => m.ProdutoCadastradoModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
