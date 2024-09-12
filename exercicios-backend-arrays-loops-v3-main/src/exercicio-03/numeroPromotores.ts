function solucao(notas: number[]): number {    
    let PROMOTORES = 0

    for (let i =0; i <notas.length; i++) {
        if (notas[i] >= 9){
            PROMOTORES++
        }
    }
        return PROMOTORES
}

export default solucao;
