class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this.adiciona = (event) => {
            event.preventDefault();
            const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
            this._negociacoes.adiciona(negociacao);
        };
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
}
