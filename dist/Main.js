"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personagem_1 = require("./personagem");
const p = new personagem_1.Personagem();
p.nome = "Edécio";
p.classe = "Monge";
p.raca = "Morto-Vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMax = 100;
p.manaAtual = p.manaMax;
p.vidaMax = 100;
p.vidaAtual = p.vidaMax;
p.poderAtaque = 1;
console.table(p);
//# sourceMappingURL=Main.js.map