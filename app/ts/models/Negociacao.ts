export class Negociacao {

  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

  get volume(): number{
    return (this.quantidade * this.valor)
  }



}