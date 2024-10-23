type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}


type Endereco = {
    CEP: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    tipoTransacao: 'credito' | 'Debito',
    endereco: Endereco
}