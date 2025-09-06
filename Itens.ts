import prompt from "prompt-sync"

const teclado = prompt();

export class Itens {
    nome: string;
    tipo: string;
    danoFIsico: number;
    danoMagico: number;
    resFisica: number;
    resMagica: number;
    vidaMax: number;
    custo: number;
    
    constructor(nome: string) {
        this.nome = nome;
        this.tipo = "";
        this.custo = 0;
        this.danoFIsico = 0;
        this.danoMagico = 0;
        this.resFisica = 0;
        this.resMagica = 0;
        this.vidaMax = 0;
    }
}