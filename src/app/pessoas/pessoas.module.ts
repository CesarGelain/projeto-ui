import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasRoutingModule } from './pessoas-routing.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PessoaPesquisaComponent, PessoaCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    PessoasRoutingModule,
    PaginationModule.forRoot(),
  ],
  exports: [
    PessoaPesquisaComponent
  ]
})
export class PessoasModule { }
