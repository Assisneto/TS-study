System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
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
          ${model.paraArray().map(negociacao => `
              <tr>
                <th>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</th>
                <th>${negociacao.quantidade}</th>
                <th>${negociacao.valor}</th>
                <th>${negociacao.volume}</th>
              </tr>

            `).join('')}
        </tbody>

        <tfoot>
        </tfoot>
    </table> `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
