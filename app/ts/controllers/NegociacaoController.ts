import { Negociacao, Negociacoes } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { NegociacaoParcial } from "../models/NegociacaoParcial";

export class NegociacaoController {
  
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor(){
    this._inputData       = <HTMLInputElement> document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
    this._inputValor      = <HTMLInputElement> document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona = (event: Event):void =>{

    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g,',')),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value),
    );
    
    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!!!')

  }
  importaDados = ()=>{

    function isOK(res:Response) {
      if(res.ok){
        return res
      }else{
        throw new Error(res.statusText);
        
      }

    }

    fetch('http://localhost:8080/dados')
      .then(res => isOK(res))
      .then(res => res.json())
      .then((dados:NegociacaoParcial[]) => {
        dados
          .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
          .forEach(negociacao =>  this._negociacoes.adiciona(negociacao))
        this._negociacoesView.update(this._negociacoes);
      })
      .catch(err => console.log(err))
  }
}