/* ==========================================================
   CONVERSOR UNIVERSAL DE MEDIDAS

   app.js
   Sprint 02

   Responsável por:
   - Controlar interface
   - Eventos da página
   - Atualização dos resultados

   Autor: Johny Viana Pereira
==========================================================*/


"use strict";



/* ==========================================================
   AGUARDAR CARREGAMENTO DA PÁGINA

==========================================================*/


document.addEventListener(

    "DOMContentLoaded",

    iniciarAplicacao

);






/* ==========================================================
   INICIALIZAÇÃO

==========================================================*/


function iniciarAplicacao(){


    console.log(

        "Conversor Universal iniciado."

    );



    configurarEventos();


}







/* ==========================================================
   CONFIGURAR EVENTOS

==========================================================*/


function configurarEventos(){



    const botao =

        document.getElementById(

            "btnConverter"

        );



    if(botao){


        botao.addEventListener(

            "click",

            executarConversao

        );


    }




}







/* ==========================================================
   EXECUTAR CONVERSÃO

==========================================================*/


function executarConversao(){



const valor =

document.getElementById(

    "valor"

).value;





const tipo =

document.querySelector(
    'input[name="unidade"]:checked'
).value;





    const resultado =

        Converter.gerarResumoConversao(

            valor,

            tipo

        );





    if(!resultado.sucesso){



        mostrarErro(

            resultado.mensagem

        );



        return;


    }





    mostrarResultados(

        resultado.dados

    );


}








/* ==========================================================
   MOSTRAR RESULTADOS

==========================================================*/


function mostrarResultados(resultado){



    alterarTexto(

        "resultadoMM",

        resultado.mm + " mm"

    );



    alterarTexto(

        "resultadoDecimal",

        resultado.decimal + '"'

    );



    alterarTexto(

        "resultadoFracao",

        resultado.fracao

    );





    preencherAproximacoes(

        resultado.aproximacoes

    );



}








/* ==========================================================
   PREENCHER APROXIMAÇÕES

==========================================================*/


function preencherAproximacoes(dados){



    if(!dados){

        return;

    }



    alterarTexto(

        "resultado1_8",

        dados.aproximacoes["1/8"].numerador +

        "/" +

        dados.aproximacoes["1/8"].denominador +

        '"'

    );





    alterarTexto(

        "resultado1_16",

        dados.aproximacoes["1/16"].numerador +

        "/" +

        dados.aproximacoes["1/16"].denominador +

        '"'

    );





    alterarTexto(

        "resultado1_32",

        dados.aproximacoes["1/32"].numerador +

        "/" +

        dados.aproximacoes["1/32"].denominador +

        '"'

    );





    alterarTexto(

        "resultado1_64",

        dados.aproximacoes["1/64"].numerador +

        "/" +

        dados.aproximacoes["1/64"].denominador +

        '"'

    );


}







/* ==========================================================
   ALTERAR TEXTO DE ELEMENTO

==========================================================*/


function alterarTexto(id,texto){



    const elemento =

        document.getElementById(id);



    if(elemento){


        elemento.textContent = texto;


    }


}








/* ==========================================================
   MOSTRAR ERROS

==========================================================*/


function mostrarErro(mensagem){



    const elemento =

        document.getElementById(

            "mensagemErro"

        );



    if(elemento){


        elemento.textContent = mensagem;



    }else{



        alert(mensagem);



    }



}







/* ==========================================================
   LIMPAR RESULTADOS

==========================================================*/


function limparResultados(){



    const campos = [


        "resultadoMM",

        "resultadoDecimal",

        "resultadoFracao",

        "resultado1_8",

        "resultado1_16",

        "resultado1_32",

        "resultado1_64"


    ];




    campos.forEach(id => {



        alterarTexto(

            id,

            "--"

        );


    });



}
