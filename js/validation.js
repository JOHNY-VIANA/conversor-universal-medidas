/* ==========================================================
   CONVERSOR UNIVERSAL DE MEDIDAS

   validation.js
   Sprint 02

   Responsável por:
   - Validar entradas do usuário
   - Detectar erros
   - Normalizar valores

   Autor: Johny Viana Pereira
==========================================================*/


"use strict";



/* ==========================================================
   VERIFICAR CAMPO VAZIO
==========================================================*/


function campoVazio(valor){


    return (

        valor === null ||

        valor === undefined ||

        valor.trim() === ""

    );


}





/* ==========================================================
   VALIDAR NÚMERO DECIMAL

Ex:

25.4
0.375
12,7

==========================================================*/


function validarDecimal(valor){



    valor = String(valor)

        .replace(",", ".")

        .trim();



    if(campoVazio(valor)){


        return {


            valido:false,


            mensagem:"Digite um valor."


        };


    }



    const numero = Number(valor);



    if(isNaN(numero)){


        return {


            valido:false,


            mensagem:"Valor decimal inválido."


        };


    }



    return {


        valido:true,


        valor:numero


    };


}







/* ==========================================================
   VALIDAR FRAÇÃO SIMPLES

Ex:

3/8

11/16

==========================================================*/


function validarFracaoSimples(valor){



    valor = valor.trim();



    const regex = /^\d+\s*\/\s*\d+$/;



    if(!regex.test(valor)){


        return {


            valido:false,


            mensagem:"Formato de fração inválido."


        };


    }



    const partes = valor.split("/");



    const numerador = Number(partes[0]);

    const denominador = Number(partes[1]);




    if(denominador === 0){


        return {


            valido:false,


            mensagem:"O denominador não pode ser zero."


        };


    }



    return {


        valido:true,


        numerador,

        denominador


    };


}








/* ==========================================================
   VALIDAR FRAÇÃO MISTA

Ex:

1 1/2

2 3/8

==========================================================*/


function validarFracaoMista(valor){



    const regex =

        /^\d+\s+\d+\s*\/\s*\d+$/;



    if(!regex.test(valor)){


        return {


            valido:false,


            mensagem:"Formato de fração mista inválido."


        };


    }



    return {


        valido:true


    };


}







/* ==========================================================
   VALIDAR POLEGADA FRACIONÁRIA

Aceita:

3/8

1 1/2

2 3/4

==========================================================*/


function validarFracionaria(valor){



    valor = valor.trim();



    if(

        validarFracaoSimples(valor).valido

    ){


        return {


            valido:true,


            tipo:"simples"


        };


    }




    if(

        validarFracaoMista(valor).valido

    ){


        return {


            valido:true,


            tipo:"mista"


        };


    }




    return {


        valido:false,


        mensagem:

        "Digite uma fração válida. Exemplo: 3/8 ou 1 1/2"


    };


}







/* ==========================================================
   VALIDAR MILÍMETROS

Ex:

25.4

10

38,1

==========================================================*/


function validarMilimetros(valor){



    const resultado = validarDecimal(valor);



    if(!resultado.valido){


        return resultado;


    }



    if(resultado.valor < 0){


        return {


            valido:false,


            mensagem:"A medida não pode ser negativa."


        };


    }



    return resultado;


}







/* ==========================================================
   VALIDAR POLEGADA DECIMAL

Ex:

0.375

1.25

==========================================================*/


function validarPolegadaDecimal(valor){



    const resultado = validarDecimal(valor);



    if(!resultado.valido){


        return resultado;


    }



    if(resultado.valor < 0){


        return {


            valido:false,


            mensagem:"A medida não pode ser negativa."


        };


    }



    return resultado;


}







/* ==========================================================
   VALIDAR ENTRADA COMPLETA

Recebe:

valor

tipo escolhido

==========================================================*/


function validarEntrada(valor,tipo){



    if(campoVazio(valor)){


        return {


            valido:false,


            mensagem:"Informe uma medida."


        };


    }




    switch(tipo){



        case "mm":



            return validarMilimetros(valor);




        case "decimal":



            return validarPolegadaDecimal(valor);




        case "fracionaria":



            return validarFracionaria(valor);




        default:



            return {


                valido:false,


                mensagem:"Tipo de medida desconhecido."


            };


    }


}







/* ==========================================================
   EXPORTAÇÃO GLOBAL

==========================================================*/


window.Validation = {


    campoVazio,

    validarDecimal,

    validarFracaoSimples,

    validarFracaoMista,

    validarFracionaria,

    validarMilimetros,

    validarPolegadaDecimal,

    validarEntrada


};