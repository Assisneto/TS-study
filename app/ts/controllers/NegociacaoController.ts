import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { MensagemView } from "../views/MensagemView";
import { NegociacoesView } from "../views/NegociacoesView";
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
}