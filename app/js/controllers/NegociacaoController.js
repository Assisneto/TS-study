System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this.adiciona = (event) => {
                        event.preventDefault();
                        const negociacao = new index_1.Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagemView.update('Negociação adicionada com sucesso!!!');
                    };
                    this.importaDados = () => {
                        function isOK(res) {
                            if (res.ok) {
                                return res;
                            }
                            else {
                                throw new Error(res.statusText);
                            }
                        }
                        fetch('http://localhost:8080/dados')
                            .then(res => isOK(res))
                            .then(res => res.json())
                            .then((dados) => {
                            dados
                                .map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante))
                                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                            this._negociacoesView.update(this._negociacoes);
                        })
                            .catch(err => console.log(err));
                    };
                    this._inputData = document.querySelector('#data');
                    this._inputQuantidade = document.querySelector('#quantidade');
                    this._inputValor = document.querySelector('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
