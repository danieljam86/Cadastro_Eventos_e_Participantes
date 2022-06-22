var readlineSync = require('readline-sync');
var _moment = require('moment')
/*Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

Listar participantes e palestrantes por evento.

Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.*/

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
let cadastro = ["Evento", "Participar de um Evento", "Cadastrar Palestrante", "Encerrar"];
let escolha;
let evento = [];
let nomeEvento;
let dataEvento;
let idadeParcicipante;
let listaParcipantes = [];
let qtdadeParticipantes;


console.log("CADASTRO DE EVENTO----------------");
console.log("DATA ATUAL------------------------");
console.log(dataAtual+"------------------------");
console.log("--------------INICIANDO------------------------");

Inicia();


//Função para iniciar o menu do sistema
function Inicia() {

    console.log('[MENU INICIAL] - Escolha o que deseja fazer entre as opcoes abaixo: ');
    for(var i = 0; i < cadastro.length; i++){
        console.log("Opção: " + i +" - " + cadastro[i])
    }
    do{    
        escolha = readlineSync.question('Qual e a sua opcao: ');
        if(escolha < 0 || escolha > 3 || isNaN(escolha) == true || escolha == ""){
            console.log("Ops... opcao invalida, tente novamente");
            Inicia();
        }
        
    }while(escolha < 0 || escolha > 3 || isNaN(escolha) == true || escolha == "")

    if(escolha == 3){
        console.log("--------------ENCERRADO------------------------");
        Inicia();
    }else if(escolha == 0){
        CadastroEvento();
    }else if(escolha == 1){
        CadastroParticipante();
    }
    else if(escolha == 2){
        CadastroPalestrante();
    }
}

function CadastroEvento(){

    do{    
        dataEvento = readlineSync.question('Qual e a data do evento? ');
        let result = checarData(dataEvento)
        if(result == false){
            console.log("Ops... data invalida, tente novamente");
        }
    }while(result == false)

    if(dataEvento <= dataAtual){
        console.log('Data do evento nao permitida. Apenas e permitido cadastrar eventos com data superior a atual.')
        Inicia();
    }else{
        nomeEvento = readlineSync.question('Qual e o nome do Evento? ');
        evento.push(nomeEvento);
        console.log(evento.length)
        console.log(nomeEvento);
        Inicia();
    }
}

function CadastroParticipante(){

    console.log('Escolha um evento informando a opcao(numero)');
    for(var i = 0; i < evento.length; i++){
        console.log("Opção: " + i +" - " + evento[i])
    }
    
}

function CadastroPalestrante(){
    dataEvento = readlineSync.question('Qual e a data do evento? ');

    if(dataEvento <= dataAtual){
        console.log('Data do evento nao permitida. Apenas e permitido cadastrar eventos com data superior a atual.')
        Inicia();
    }else{
        nomeEvento = readlineSync.question('Qual e o nome do Evento? ');
        evento.push(nomeEvento);
        console.log(evento.length)
        console.log(nomeEvento);
        Inicia();
    }
}

function checarData(data) {
    return data instanceof Date && !isNaN(data);
  }




