'use strict'
/* criar as variaveis dos id*/
const calcular= document.getElementById("calcular");


function imc(){
    /* alert('TESTE CLICK'); testa se esta capturando o click
    criar as variaveis locais dos id   */

    const nome= document.getElementById('nome');
    const altura=document.getElementById('altura');
    const peso= document.getElementById('peso');
    const resultado=document.getElementById('resultado');

    /*ver se os campos estao preenchidos validação*/

    if (nome.value!=='' && altura.value!=='' && peso.value !==''){
       /*alert('NOME PREENCHIDO')*/

       const valorIMC= (peso.value / (altura.value * altura.value)).toFixed(2);
       let classificacao='';

       if(valorIMC< 18.5){
        classificacao='Abaixo do Peso';
       }else if(valorIMC <25){
        classificacao='com peso ideal. Parabéns...';
       }else if(valorIMC <30){
        classificacao='levemente acima do peso.';
       }
       else if(valorIMC<35){
        classificacao='com obesidade grau I';
       }else if(valorIMC<40){
        classificacao='com obesidade grau II';
       }else{
        classificacao='com obesidade grau III, Muito cuidado';
       }
       resultado.textContent= `${nome.value} seu IMC é ${valorIMC} está ${classificacao}`;

    } else{
        /*alert('Preencha todos os campos') o texContent exibe a msg*/
        resultado.textContent='Preencha todos os campos';
    }

}


calcular.addEventListener('click',imc);


