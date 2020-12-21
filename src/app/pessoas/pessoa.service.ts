import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PessoaFiltro {
  termo: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/projeto-api/pessoas'

  constructor(private http: HttpClient ) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {

    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.termo) {
      params = params.set('termo', filtro.termo);
    }

    return this.http.get(`${this.pessoasUrl}`)
      .toPromise()
      .then(response => {
        const pessoas = response['content'];

        const resultado = {
          pessoas,
          total: response['totalElements']
        };
        return resultado;

      })
  }

}
