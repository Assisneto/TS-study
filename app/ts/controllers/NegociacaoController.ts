import { Negociacao, Negociacoes } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { NegociacaoAPI } from "../services/NegociacaoAPI";

export class NegociacaoController {
  
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');
  private _service = new NegociacaoAPI();

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
      this._service
      .obterNegociacoes((isOK))
      .then((negociacoes: Negociacao[] )=> {
          negociacoes.forEach(negociacao => 
              this._negociacoes.adiciona(negociacao));
          this._negociacoesView.update(this._negociacoes);
      });       
  }
}