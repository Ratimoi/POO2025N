import prompt from "prompt-sync";
import { Personagem } from "./Personagens";
import { Masmorra } from "./Masmorras";
import { Missao } from "./Missoes";
import { Itens } from "./Itens";
import { Habilidade } from "./Habilidades";

const teclado = prompt();

const personagem: Personagem = new Personagem("", "", "");
const floresta: Masmorra = new Masmorra("", 0);

do {
    console.log("Bem vindo ao RPG de Texto!\n");

    let resposta: string;

    do {
        do {
            personagem.nome = (teclado("Digite o nome do seu personagem: "));
            
            if(personagem.nome == "") {
                console.log("O nome não pode ser vazio! Tente novamente.\n");
            }
        } while(personagem.nome == "");

        resposta = teclado(`Deseja criar o personagem com o nome de '${personagem.nome}' (S/N)? `);
        
        if(resposta.toUpperCase() == "S") {
            console.log(`Nome do personagem definido como '${personagem.nome}'\n`);
        } else if (resposta.toUpperCase() == "N") {
            console.log("Vamos tentar novamente...\n");
        } else {
            console.log("Resposta inválida! Vamos tentar novamente...\n");
        }
    } while(resposta.toUpperCase() != "S");

    do {
        console.log("Escolha uma classe para o seu personagem:");
        console.log("1. Guerreiro");
        console.log("2. Mago");
        console.log("3. Arqueiro");

        resposta = teclado("Insira uma opção: ");

        switch(resposta) {
            case "1":
                personagem.classe = "Guerreiro";
                break;
            case "2":
                personagem.classe = "Mago";
                break;
            case "3":
                personagem.classe = "Arqueiro";
                break;
            default:
                console.log("Classe inválida! Tente novamente.\n");
                continue;
        }
    } while(resposta != "1" && resposta != "2" && resposta != "3");

    console.log(`Classe do personagem definida como '${personagem.classe}'\n`);

    do {
        console.log("Escolha uma raça para o seu personagem:");
        console.log("1. Humano");
        console.log("2. Elfo");
        console.log("3. Anão");
        console.log("4. Orc");

        resposta = teclado("Insira uma opção: ");

        switch(resposta) {
            case "1":
                personagem.raca = "Humano";
                break;
            case "2":
                personagem.raca = "Elfo";
                break;
            case "3":
                personagem.raca = "Anão";
                break;
            case "4":
                personagem.raca = "Orc";
                break;
            default:
                console.log("Raça inválida! Tente novamente.");
        }
    } while(resposta != "1" && resposta != "2" && resposta != "3" && resposta != "4");

    console.log(`Raça do personagem definida como '${personagem.raca}'`);

    personagem.defineClasse(personagem.classe);
    personagem.defineRaca(personagem.raca);

    personagem.mostrarStatus();

    do {
        resposta = teclado("Deseja confirmar a criação do personagem (S/N)? ");
    
        if(resposta.toUpperCase() == "S") {
            console.log("Personagem criado com sucesso! \n");
            break;
        } else if (resposta.toUpperCase() == "N") {
            console.log("Vamos tentar novamente...\n");
            personagem.nome = "";
            personagem.classe = "";
            personagem.raca = "";
        } else {
            console.log("Resposta inválida! Vamos tentar novamente...\n");
        }
    } while(resposta.toUpperCase() != "S" && resposta.toUpperCase() != "N");
} while(personagem.nome == "" || personagem.classe == "" || personagem.raca == "");

do {
    console.log("+-----------Cidade----------+");
    console.log("1.Menu do Personagem");
    console.log("2.Comerciante");
    console.log("3.Armeiro");
    console.log("4.Clérigo");
    console.log("5.Taverna");
    console.log("6.Masmorra");
    console.log("9.Sair do Jogo");
    console.log("+---------------------------+\n");

    const escolha: number = +teclado("Para onde deseja ir: ");

    console.clear();

    if(escolha == 9) {
        break;
    } 
    switch(escolha) {
        case 1:
            menuPersonagem();
            break;
        case 2:
            comerciante();
            break;
        case 3:
            armeiro();
            break;
        case 4:
            clerigo();
            break;
        case 5:
            taverna();
            break;
        case 6:
            masmorra();
            break;
        default:
            console.log("\nOpção inválida!\n");
            break;
    }
} while(true);

function menuPersonagem(): void {
    do {
        let resposta: string;

        console.log("\n+-------Menu do Personagem-------+");
        console.log("1. Ver Status");
        console.log("2. Ver Inventário");
        console.log("3. Ver Habilidades");
        console.log("9. Voltar");
        console.log("+--------------------------------+\n");

        resposta = teclado("Escolha uma opção do menu: ");

        if(resposta == "9") {
            break;
        }
        switch(resposta) {
            case "1":
                personagem.mostrarStatus();
                break;
            case "2":
                inventário();
                break;
            case "3":
                habilidades();
                break;
            default:
                console.log("Opção inválida! Tente novamente.\n");
                break;
        }
    } while(true);
}

function comerciante(): void {
    do {
        let escolha: string;

        console.log("+-------Comerciante-------+");
        console.log("1. Comprar Itens");
        console.log("2. Vender Itens");
        console.log("9. Voltar para a cidade");
        console.log("+-------------------------+\n");

        escolha = teclado("Escolha uma opção: ");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            case "1":
                console.log("Você escolheu comprar itens.");
                break;
            case "2":
                console.log("Você escolheu vender itens.");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (true);
}

function armeiro(): void {
    do {
        let escolha: string;

        console.log("+-------Armeiro-------+");
        console.log("1. Comprar Armas");
        console.log("2. Vender Armas");
        console.log("9. Voltar para a cidade");
        console.log("+---------------------+\n");

        escolha = teclado("Escolha uma opção: ");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            case "1":
                console.log("Você escolheu comprar armas.");
                break;
            case "2":
                console.log("Você escolheu vender armas.");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (true);
}

function clerigo(): void {
    do {
        let escolha: string;

        console.log("+-------Clérigo-------+");
        console.log("1. Aprender Habilidades");
        console.log("2. Melhorar Atributos");
        console.log("9. Voltar para a cidade");
        console.log("+---------------------+\n");

        escolha = teclado("Escolha uma opção: ");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            case "1":
                console.log("Você escolheu aprender habilidades.");
                break;
            case "2":
                console.log("Você escolheu melhorar atributos.");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (true);
}

function taverna(): void {
    do {
        let escolha: string;

        console.log("+--------Taverna--------+");
        console.log("1. Ver missões Atuais");
        console.log("2. Ver Missões disponíveis");
        console.log("3. Entregar Missão");
        console.log("4. Descansar (Recupera Vida e Mana)");
        console.log("9. Voltar para a cidade");
        console.log("+-----------------------+\n");

        escolha = teclado("Escolha uma opção: ");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            case "1":
                console.log("Você escolheu ver missões atuais.");
                break;
            case "2":
                console.log("Você escolheu ver missões disponíveis.");
                break;
            case "3":
                console.log("Você escolheu entregar uma missão.");
                break;
            case "4":
                console.log("Você escolheu descansar.");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (true); 
}

function masmorra(): void {
    do {
        let escolha: string;

        console.log("+------Masmorra------+");
        console.log("1. Floresta (LV 1-3)");
        console.log("2. Caverna (LV 4-6)");
        console.log("3. Castelo Abandonado (LV 7-10)");
        console.log("9. Voltar para a cidade");
        console.log("+--------------------+\n");

        escolha = teclado("Escolha para onde ir:");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            case "1":
                console.log("Você entrou na Floresta.");
                break;
            case "2":
                console.log("Você entrou na Caverna.");
                break;
            case "3":
                console.log("Você entrou no Castelo Abandonado.");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (true);   
}

function inventário(): void {
    do {
        let escolha: string;

        personagem.mostrarInventario();

        escolha = teclado("Escolha uma opção: ");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            default:
                console.log("Opção inválida! Tente novamente.\n");
                break;
        }
    } while(true);
}

function habilidades(): void {
    do {
        let escolha: string;

        personagem.mostrarHabilidades();

        escolha = teclado("Escolha uma opção: ");

        if(escolha == "9") {
            break;
        }
        switch(escolha) {
            default:
                console.log("Opção inválida! Tente novamente.\n");
                break;
        }
    } while(true);
}

console.log("\nObrigado por jogar!");