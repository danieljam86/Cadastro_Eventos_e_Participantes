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
let cadastro = ["Cadastrar Evento", "Participar de um Evento", "Cadastrar Palestrante", "Encerrar"];
let escolha;

let listaEventos = [];
let nomeEvento;
let dataEvento;

let listaPartipantes = [];
let nomeParticipante;
let idadeParticipante;

let listaPalestrantes = [];
let nomePalestrante;


let listaEventosPalestrantesParticipantes = new Object();


//Intrução do inicio do sistema
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
            console.log('==================================================');
            console.log("Ops... opcao invalida, tente novamente");
            console.log('==================================================');
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
    let result;

    do{    
        dataEvento = readlineSync.question('Qual e a data do evento? ');
        result = ValidaData(dataEvento)
        if(result == false){
            console.log('==================================================');
            console.log("Ops... data invalida, tente novamente");
            console.log('==================================================');
        }
    }while(result == false)

    if(dataEvento <= dataAtual){
        console.log('=============================================================================================');
        console.log('Data do evento nao permitida. Apenas e permitido cadastrar eventos com data superior a atual.');
        console.log('=============================================================================================');
        Inicia();
    }else{
        nomeEvento = readlineSync.question('Qual e o nome do Evento? ');
        let novoEvento = new Object();
        novoEvento.nomeEvento = nomeEvento;
        novoEvento.dataEvento = dataEvento;
        listaEventos.push(novoEvento);
        listaEventosPalestrantesParticipantes.listaEventos = listaEventos;
        console.log(listaEventos.length)
        Inicia();
    }
}

function CadastroParticipante(){

    if(listaEventos.length == 0){
        console.log('======================================================================');
        console.log('Não existe evento disponível. Pelo menos um evento deve ser cadastrado');
        console.log('======================================================================');
        Inicia();
    }
    nomeParticipante = readlineSync.question('Qual e o seu nome? ');
    idadeParticipante = readlineSync.question('Qual e a sua idade? ');
    if(idadeParticipante <18){
        console.log('==================================================');
        console.log('O cadastro não e permitido para menores de 18 anos');
        console.log('==================================================');
        Inicia();
    }else{
        
        console.log('Escolha um evento informando a opcao(numero)');
        
        for(var i = 0; i < listaEventos.length; i++){
            console.log("Opção: " + i +" - " + listaEventos[i].nomeEvento)
        }
        do{
            escolha = readlineSync.question('Digite a opcao desejada? ');
            if(listaEventosPalestrantesParticipantes.listaEventos.nomeEvento < 0 || listaEventosPalestrantesParticipantes.listaEventos.nomeEvento > listaEventos.length -1){
                console.log('==================================================');
                console.log("Ops... opcao invalida, tente novamente");
                console.log('==================================================');
            }
        }while(listaEventosPalestrantesParticipantes.listaEventos < 0 || listaEventosPalestrantesParticipantes.listaEventos > listaEventos.length -1)
        //listaEventosPalestrantesParticipantes.nomeEvento = listaEventos[listaEventosPalestrantesParticipantes.nomeEvento];
        //listaEventosPalestrantesParticipantes.dataEvento = listaEventos[listaEventosPalestrantesParticipantes.dataEvento];
        let novoParticipante = new Object();
        novoParticipante.nomeParticipante = nomeParticipante;
        novoParticipante.idadeParticipante = idadeParticipante;
        listaEventos[escolha].listaPartipantes = listaPartipantes.push(novoParticipante);
        listaEventosPalestrantesParticipantes.listaEventos[escolha] = listaPartipantes;
        console.log('==================================================');
        console.log("Participante cadastrado com sucesso no evento!!");
        console.log('==================================================');

        for(var i = 0; i < listaEventos.length; i++){
            console.log("Eventos: " + i +" - " + listaEventos[i].nomeEvento)
        }

        Inicia();
    }
    
}

function CadastroPalestrante(){
    if(listaEventos.length == 0){
        console.log('======================================================================');
        console.log('Não existe evento disponível. Pelo menos um evento deve ser cadastrado');
        console.log('======================================================================');
        Inicia();
    }
    nomePalestrante = readlineSync.question('Qual e o nome do palestrante? ');
    console.log('Escolha um evento informando a opcao(numero)');
    
    for(var i = 0; i < listaEventos.length; i++){
        console.log("Opção: " + i +" - " + listaEventos[i])
    }
    do{
        eventoPalestrantesEParticipantes.eventoID = readlineSync.question('Digite a opcao desejada? ');
        if(eventoPalestrantesEParticipantes.eventoID < 0 || eventoPalestrantesEParticipantes.eventoID > listaEventos.length -1){
            console.log('==================================================');
            console.log("Ops... opcao invalida, tente novamente");
            console.log('==================================================');
        }
    }while(eventoPalestrantesEParticipantes.eventoID < 0 || eventoPalestrantesEParticipantes.eventoID > listaEventos.length -1)
    ParticipanteEvento.nomePalestrante = nomePalestrante
    eventoPalestrantesEParticipantes.eventoID = evento[eventoPalestrantesEParticipantes.eventoID];
    eventoPalestrantesEParticipantes.nomeEvento = evento[eventoPalestrantesEParticipantes.eventoID];
    eventoPalestrantesEParticipantes.ParticipanteEvento = ParticipanteEvento;
    console.log('==================================================');
    console.log("Palestrante cadastrado com sucesso no evento!!");
    console.log('==================================================');
    Inicia();
    }

function ValidaData(data){
    reg = /[^\d\/\.]/gi;                  // Mascara = dd/mm/aaaa | dd.mm.aaaa
    var valida = data.replace(reg,'');    // aplica mascara e valida só numeros
    if (valida && valida.length == 10) {  // é válida, então ;)
      var ano = data.substr(6),
        mes = data.substr(3,2),
        dia = data.substr(0,2),
        M30 = ['04','06','09','11'],
        v_mes = /(0[1-9])|(1[0-2])/.test(mes),
        v_ano = /(19[1-9]\d)|(20\d\d)|2100/.test(ano),
        rexpr = new RegExp(mes),
        fev29 = ano % 4? 28: 29;

      if (v_mes && v_ano) {
        if (mes == '02') return (dia >= 1 && dia <= fev29);
        else if (rexpr.test(M30)) return /((0[1-9])|([1-2]\d)|30)/.test(dia);
        else return /((0[1-9])|([1-2]\d)|3[0-1])/.test(dia);
      }
    }
    return false                           // se inválida :(
  }



