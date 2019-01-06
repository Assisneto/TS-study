import { NegociacaoController } from "./controllers/NegociacaoController";
const controller = new NegociacaoController();

document
  .querySelector('.form')
  .addEventListener('submit',controller.adiciona);
document
  .querySelector('#botao-importa')
  .addEventListener('click',controller.importaDados)