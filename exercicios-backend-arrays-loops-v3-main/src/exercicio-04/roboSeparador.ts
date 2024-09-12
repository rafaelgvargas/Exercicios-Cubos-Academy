function solucao(frutaColetada: string, esteira: string[]): number {
  let frutas = 0

    for (let i =0; i <esteira.length; i++) {
        if (esteira[i] === frutaColetada){
            frutas++
        }
    }
        return frutas
}

export default solucao;
