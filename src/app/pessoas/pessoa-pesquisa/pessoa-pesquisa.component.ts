import { Component, OnInit } from '@angular/core';
import { PessoaService, PessoaFiltro } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  filtro = new PessoaFiltro();
  pessoas = [];
  totalRegistros = 0;
  pageSizes = ['5', '10', '15', '20', '25'];
  size = 5;

  constructor(private pessoaService: PessoaService) { }

  pesquisar() {
    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
       this.pessoas = resultado.pessoas;
      });
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pageChanged(event: any): void {
    this.filtro.pagina = (event.page);
    this.pesquisar();
  }

  aoMudarPageSize(event: any) {
    this.filtro.pagina = 1;
    this.pesquisar();
  }

}
