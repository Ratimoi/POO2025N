import prompt from "prompt-sync";

const teclado = prompt();

export class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number;
    experiencia: number;
    experienciaNext: number;
    vidaAtual: number;
    vidaMax: number;
    manaAtual: number;
    manaMax: number;
    danoFisico: number;
    danoMagico: number;
    resFisica: number;
    resMagica: number;

    constructor(nome: string, classe: string, raca: string) {
        this.nome = nome;
        this.classe = classe;
        this.raca = raca;
        this.nivel = 1;
        this.experiencia = 0;
        this.experienciaNext = 5 + (this.nivel * 5);
        this.vidaAtual = 0;
        this.vidaMax = 0;
        this.manaAtual = 0;
        this.manaMax = 0;
        this.danoFisico = 0;
        this.danoMagico = 0;
        this.resFisica = 0;
        this.resMagica = 0;
    }

    defineClasse(classe: string): void {
        if(classe == "Guerreiro") {
            this.vidaMax = 12;
            this.manaMax = 6;
            this.danoFisico = 2;
            this.danoMagico = 2;
            this.resFisica = 2;
            this.resMagica = 0;
        } else if(classe == "Mago") {
            this.vidaMax = 8;
            this.manaMax = 12;
            this.danoFisico = 1;
            this.danoMagico = 4;
            this.resFisica = 1;
            this.resMagica = 2;
        } else if(classe == "Arqueiro") {
            this.vidaMax = 10;
            this.manaMax = 8;
            this.danoFisico = 4;
            this.danoMagico = 1;
            this.resFisica = 1;
            this.resMagica = 0;
        }
    }

    defineRaca(raca: string): void {
        if(raca == "Humano") {
            this.vidaMax += 2;
            this.manaMax += 2;
            this.danoFisico += 1;
            this.danoMagico += 1;
            this.resFisica += 1;
            this.resMagica += 1;
        } else if(raca == "Elfo") {
            this.vidaMax += 1;
            this.manaMax += 3;
            this.danoFisico += 1;
            this.danoMagico += 2;
            this.resFisica += 0;
            this.resMagica += 2;
        } else if(raca == "Anão") {
            this.vidaMax += 3;
            this.manaMax += 1;
            this.danoFisico += 2;
            this.danoMagico += 0;
            this.resFisica += 2;
            this.resMagica += 0;
        } else if(raca == "Orc") {
            this.vidaMax += 4;
            this.manaMax += 0;
            this.danoFisico += 3;
            this.danoMagico += 0;
            this.resFisica += 1;
            this.resMagica += 1;
        }
        this.vidaAtual = this.vidaMax;
        this.manaAtual = this.manaMax;
    }

    mostrarStatus(): void {
        console.log("\n+-------Status do Personagem-------+");
        console.log(`Nome: ${this.nome}`);
        console.log(`Classe: ${this.classe}`);
        console.log(`Raça: ${this.raca}`);
        console.log(`Nível: ${this.nivel}`);
        console.log(`Experiência: ${this.experiencia}/${this.experienciaNext}`);
        console.log(`Vida: ${this.vidaAtual}/${this.vidaMax}`);
        console.log(`Mana: ${this.manaAtual}/${this.manaMax}`);
        console.log(`Dano Físico: ${this.danoFisico}`);
        console.log(`Dano Mágico: ${this.danoMagico}`);
        console.log(`Resistência Física: ${this.resFisica}`);
        console.log(`Resistência Mágica: ${this.resMagica}`);
        console.log("+----------------------------------+\n");
    }

    mostrarInventario(): void { 
        console.log("\n+-------Inventário do Personagem-------+");
        console.log("| (Função em desenvolvimento)          |");
        console.log("+-------------------------------------+\n");
    }

    mostrarHabilidades(): void {
        console.log("\n+-------Habilidades do Personagem-------+");
        console.log("| (Função em desenvolvimento)           |");
        console.log("+--------------------------------------+\n");
    }
}
