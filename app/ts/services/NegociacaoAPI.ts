import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoAPI {

  async obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

    return fetch('http://localhost:8080/dados')
        .then(response => handler(response))
        .then(response => response.json())
        .then((dados: NegociacaoParcial[]) => dados
            .map(dado => new Negociacao(new Date(), dado.vezes, parseFloat((dado.montante / dado.vezes).toFixed(2))))
        );
        //.catch(err => console.log(err.message));
  }
};
export interface HandlerFunction{

  (res: Response): Response

}
