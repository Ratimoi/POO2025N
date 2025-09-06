import prompt from "prompt-sync";

const teclado = prompt();

/* Usar de exemplo para fazer o sistema de missões */

export class Missao {
    titulo: string;
    descricao: string;
    experienciaRecompensa: number;
    ouroRecompensa: number;
    concluida: boolean;

    constructor(titulo: string, descricao: string, experienciaRecompensa: number, ouroRecompensa: number) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.experienciaRecompensa = experienciaRecompensa;
        this.ouroRecompensa = ouroRecompensa;
        this.concluida = false;
    }

    mostrarMissao(): void {
        console.log(`Missão: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Recompensa: ${this.experienciaRecompensa} XP, ${this.ouroRecompensa} Ouro`);
        console.log(`Status: ${this.concluida ? "Concluída" : "Pendente"}`);
    }

    completarMissao(): void {
        if (!this.concluida) {
            this.concluida = true;
            console.log(`Parabéns! Você completou a missão: ${this.titulo}`);
            console.log(`Você ganhou ${this.experienciaRecompensa} XP e ${this.ouroRecompensa} Ouro.`);
        } else {
            console.log("Esta missão já foi concluída.");
        }
    }
}