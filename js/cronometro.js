// declarando a variável temporizador
let temporizador = document.getElementById("temporizador");

let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;

/*funçaões em js são em camelCase*/
function iniciar() {
                 // "setInterval" é uma função que executa outra função internamente.
    cronometro = setInterval(() => {
        _timer();
    }, 1000);
}

function pausar() {
    // Parando o cronometro, dando como parâmetro a função "cronometro". "clearInterval" é uma função do próprio JS.
    clearInterval(cronometro);
}

function zerar() {
    pausar();
    horas = 0;
    minutos = 0;
    segundos = 0;
    _atualizarTempoNaTela();
}

//função que não pode ser chamada, por conveção, tem que ter o "_" antes de sua descrição.
//O "_" não impede que a versão seja chamada, mas diz para o desenvolvedor que ela não deve ser chamada.
function _timer() {
    
    segundos++;

    if (segundos == 60) {
        minutos++;
        segundos = 0;
    } 
    
    if (minutos ==60) {
        horas++;
        minutos = 0;
    }

    _atualizarTempoNaTela();
}

function _atualizarTempoNaTela() {

    /* Se a condição for verdade, executão o que estiver depois do "?",
       se não, executa o que estiver depois dos ":".*/
    //Aqui incrementa um zero na frente se o número for menor que dez
    let ss = (segundos < 10) ? "0" + segundos: segundos;
    let mm = (minutos < 10) ? "0" + minutos: minutos;
    let hh = (horas < 10) ? "0" + horas: horas;

    // Usar '' ou "" para texto e o `` quando houver um intervalo.
    // Aqui estou fazendo uma interpolação de string utilizando crases.
    temporizador.textContent = `${hh}:${mm}:${ss}`;
}