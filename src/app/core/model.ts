export class Contato {

  id: number;
  nome: string;
  telefone: string;
  email: string;

}


export class Pessoa {

  id: number;
  nome: string;
  cpf: string;
  contatos = new Contato();

}
