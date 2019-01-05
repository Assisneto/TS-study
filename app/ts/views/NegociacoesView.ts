class NegociacoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    
    return ` 
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.paraArray().map(negociacao =>
            `
              <tr>
                <th>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</th>
                <th>${negociacao.quantidade}</th>
                <th>${negociacao.valor}</th>
                <th>${negociacao.volume}</th>
              </tr>

            `
          ).join('')}
        </tbody>

        <tfoot>
        </tfoot>
    </table> `;
  }

}