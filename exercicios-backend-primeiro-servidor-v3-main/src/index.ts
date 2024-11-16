import express, { Request, Response } from 'express'
import 'dotenv/config'

const app = express()

const NUM_1 = parseInt(process.env.NUM_1 ?? "", 10)
const NUM_2 = parseInt(process.env.NUM_2 ?? "", 5)

app.get('/somar', (req: Request, res: Response) => {
    const soma = NUM_1 + NUM_2
    res.send(`${soma}`)
})

app.get('/subtrair', (req: Request, res: Response) => {
    const subtracao = NUM_1 - NUM_2
    res.send(`${subtracao}`)
})

app.get('/multiplicar', (req: Request, res: Response) => {
    const multiplicacao = NUM_1 * NUM_2
    res.send(`${multiplicacao}`)
})

app.get('/dividir', (req: Request, res: Response) => {
if (NUM_2 !== 0) {
        const divisao = NUM_1 / NUM_2
        res.send(`${divisao}`)
    } else {
        res.status(400).send('Não é possível dividir por 0')
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})