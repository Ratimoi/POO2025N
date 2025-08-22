export class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number;
    arma: string;
    manaAtual: number;
    manaMax: number;
    vidaAtual: number;
    vidaMax: number;
    poderAtaque: number;

    constructor(nome: string) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.arma = "";
        this.manaAtual = 0;
        this.manaMax = 0;
        this.vidaAtual = 0;
        this.vidaMax = 0;
        this.poderAtaque = 0;
    }

    treinarPoderAtaque(): void {
        this.poderAtaque += 3 + this.poderAtaque * 1.1;
    }
}
