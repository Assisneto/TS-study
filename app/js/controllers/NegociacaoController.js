System.register(["../models/index", "../views/index", "../services/NegociacaoAPI"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoAPI_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (NegociacaoAPI_1_1) {
                NegociacaoAPI_1 = NegociacaoAPI_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._service = new NegociacaoAPI_1.NegociacaoAPI();
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
                        this._service
                            .obterNegociacoes((isOK))
                            .then((negociacoes) => {
                            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                            this._negociacoesView.update(this._negociacoes);
                        });
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
