import { Personagem } from "./Personagem";
import prompt from "prompt-sync";

const teclado = prompt();

const p: Personagem = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-Vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMax = 100;
p.manaAtual = p.manaMax;
p.vidaMax = 100;
p.vidaAtual = p.vidaMax;
p.poderAtaque = 1;

while(true) {
    console.log("+---------Menu---------+");
    console.log("|1.Treinar Poder de Ataque");
    console.log("|2.Ver status");
    console.log("|9.sair");
    console.log("+----------------------+\n");
    
    const escolha: number = +teclado("Escolha uma opção do menu: ");

    if(escolha == 9) {
        break;
    } 
    switch(escolha) {
        case 1:
            treinarPoderAtaque(p);
            break;
        case 2:
            console.table(p);
            break;
        default:
            console.log("\nOpção inválida!\n");
            break;
    }
}

function treinarPoderAtaque(person: Personagem): void {
    person.treinarPoderAtaque();
}