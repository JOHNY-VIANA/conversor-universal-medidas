/* ==========================================================
   CONVERSOR UNIVERSAL DE MEDIDAS
   fractions.js - Versão 2.0
   Sprint 02

   Módulo responsável por:
   - Polegadas fracionárias
   - Frações simples
   - Frações mistas
   - Conversões matemáticas

   Autor: Johny Viana Pereira
==========================================================*/


"use strict";


/* ==========================================================
   CONSTANTES
==========================================================*/


const FractionConfig = {

    // Quantidade padrão de divisões da polegada
    // usada na indústria
    DEFAULT_BASE: 64,


    // Precisões disponíveis
    BASES:

    [
        2,
        4,
        8,
        16,
        32,
        64,
        128
    ]

};



/* ==========================================================
   NORMALIZAR ENTRADA
==========================================================

Exemplos:

" 3/8 "     → "3/8"

'1 1/2"'   → "1 1/2"

"2,5"      → "2.5"

==========================================================*/


function normalizarFracao(valor){


    if(valor === null || valor === undefined){

        return "";

    }


    return String(valor)

        .replace(/"/g,"")

        .replace(/,/g,".")

        .trim()

        .replace(/\s+/g," ");


}



/* ==========================================================
   VERIFICAR SE É FRAÇÃO SIMPLES
==========================================================

Exemplos:

3/8
7/16
11/32

==========================================================*/


function ehFracaoSimples(valor){


    const regex = /^\d+\s*\/\s*\d+$/;


    return regex.test(
        normalizarFracao(valor)
    );


}



/* ==========================================================
   VERIFICAR SE É FRAÇÃO MISTA
==========================================================

Exemplos:

1 1/2
2 3/8
10 15/16

==========================================================*/


function ehFracaoMista(valor){


    const regex = /^\d+\s+\d+\s*\/\s*\d+$/;


    return regex.test(
        normalizarFracao(valor)
    );


}



/* ==========================================================
   EXTRAIR FRAÇÃO SIMPLES
==========================================================

Entrada:

"3/8"

Retorno:

{
 numerador:3,
 denominador:8
}

==========================================================*/


function extrairFracaoSimples(valor){


    valor = normalizarFracao(valor);


    const partes = valor.split("/");


    if(partes.length !== 2){

        return null;

    }


    const numerador = Number(partes[0]);


    const denominador = Number(partes[1]);



    if(

        isNaN(numerador) ||

        isNaN(denominador) ||

        denominador === 0

    ){

        return null;

    }



    return {


        numerador,

        denominador


    };


}

/* ==========================================================
   EXTRAIR FRAÇÃO MISTA
==========================================================

Entrada:

"2 3/8"


Retorno:

{
 inteiro:2,
 numerador:3,
 denominador:8
}


==========================================================*/


function extrairFracaoMista(valor){


    valor = normalizarFracao(valor);



    const partes = valor.split(" ");



    if(partes.length !== 2){

        return null;

    }



    const inteiro = Number(partes[0]);



    const fracao = extrairFracaoSimples(
        partes[1]
    );



    if(

        isNaN(inteiro) ||

        fracao === null

    ){

        return null;

    }



    return {


        inteiro,


        numerador:fracao.numerador,


        denominador:fracao.denominador


    };


}



/* ==========================================================
   DETECTAR TIPO DE ENTRADA
==========================================================

Retorna:

"simpes"

"mista"

"decimal"

"desconhecido"


==========================================================*/


function identificarTipoFracao(valor){


    valor = normalizarFracao(valor);



    if(ehFracaoMista(valor)){


        return "mista";


    }



    if(ehFracaoSimples(valor)){


        return "simples";


    }



    if(!isNaN(Number(valor))){


        return "decimal";


    }



    return "desconhecido";


}

/* ==========================================================
   PARTE 2/5
   CONVERSÕES MATEMÁTICAS
==========================================================*/


/* ==========================================================
   FRAÇÃO SIMPLES PARA DECIMAL
==========================================================

Exemplo:

3/8

3 ÷ 8

Resultado:

0.375

==========================================================*/


function fracaoSimplesParaDecimal(valor){


    const fracao = extrairFracaoSimples(valor);



    if(fracao === null){

        return null;

    }



    return (

        fracao.numerador /

        fracao.denominador

    );


}


/* ==========================================================
   FRAÇÃO MISTA PARA DECIMAL
==========================================================

Exemplo:

2 3/8


2 + (3 ÷ 8)

Resultado:

2.375


==========================================================*/


function fracaoMistaParaDecimal(valor){


    const fracao = extrairFracaoMista(valor);



    if(fracao === null){

        return null;

    }



    return (

        fracao.inteiro +

        (

            fracao.numerador /

            fracao.denominador

        )

    );


}


/* ==========================================================
   QUALQUER FRAÇÃO PARA DECIMAL
==========================================================

Aceita:

3/8

1 1/2

2 3/4

==========================================================*/


function converterFracaoParaDecimal(valor){


    const tipo = identificarTipoFracao(valor);



    switch(tipo){


        case "simples":

            return fracaoSimplesParaDecimal(valor);



        case "mista":

            return fracaoMistaParaDecimal(valor);



        case "decimal":

            return Number(
                normalizarFracao(valor)
            );



        default:

            return null;

    }


}


/* ==========================================================
   DECIMAL DE POLEGADA PARA MM
==========================================================

1 polegada = 25.4 mm


Ex:

0.5"

0.5 × 25.4

12.7 mm


==========================================================*/


function polegadaDecimalParaMM(valor){


    const decimal = Number(valor);



    if(isNaN(decimal)){


        return null;


    }



    return decimal * 25.4;


}


/* ==========================================================
   MM PARA POLEGADA DECIMAL
==========================================================*/


function mmParaPolegadaDecimal(mm){


    const valor = Number(mm);



    if(isNaN(valor)){


        return null;


    }



    return valor / 25.4;


}


/* ==========================================================
   FRAÇÃO PARA MM

==========================================================

Exemplo:


3/8"

0.375

×

25.4


9.525 mm


==========================================================*/


function fracaoParaMilimetros(valor){



    const decimal = converterFracaoParaDecimal(valor);



    if(decimal === null){


        return null;


    }



    return decimal * 25.4;


}

/* ==========================================================
   MM PARA DECIMAL DE POLEGADA

==========================================================*/


function milimetrosParaDecimal(mm){


    return mmParaPolegadaDecimal(mm);


}


/* ==========================================================
   MM PARA FRAÇÃO DECIMAL

==========================================================

Exemplo:


12.7 mm


12.7 ÷ 25.4


0.5"


==========================================================*/


function milimetrosParaFracaoDecimal(mm){


    const decimal = mmParaPolegadaDecimal(mm);



    if(decimal === null){


        return null;


    }



    return decimal;


}


/* ==========================================================
   CONVERSÃO COMPLETA

Retorna todas as formas básicas

==========================================================*/


function analisarMedidaPolegada(valor){



    const decimal = converterFracaoParaDecimal(valor);



    if(decimal === null){


        return null;


    }



    return {



        decimalPolegada: decimal,


        milimetros:

            decimal * 25.4,


        entrada:

            normalizarFracao(valor)



    };


}

/* ==========================================================
   PARTE 3/5
   DECIMAL PARA FRAÇÃO
==========================================================*/


/* ==========================================================
   MDC - MÁXIMO DIVISOR COMUM

Usado para simplificar frações.

Ex:

32/64

vira:

1/2

==========================================================*/


function calcularMDC(a,b){


    a = Math.abs(a);

    b = Math.abs(b);



    while(b !== 0){


        let resto = a % b;


        a = b;


        b = resto;


    }


    return a;


}


/* ==========================================================
   SIMPLIFICAR FRAÇÃO

Ex:

48/64

Resultado:

3/4

==========================================================*/


function simplificarFracao(numerador,denominador){



    const divisor = calcularMDC(

        numerador,

        denominador

    );



    return {



        numerador:

            numerador / divisor,



        denominador:

            denominador / divisor



    };


}

/* ==========================================================
   DECIMAL PARA FRAÇÃO

Ex:

0.375

base 64


0.375 × 64

24/64


Simplifica:

3/8


==========================================================*/


function decimalParaFracao(decimal,base=64){



    if(isNaN(decimal)){


        return null;


    }



    const numerador = Math.round(

        decimal * base

    );



    const resultado = simplificarFracao(

        numerador,

        base

    );



    return resultado;


}

/* ==========================================================
   FORMATAR FRAÇÃO

Ex:

3 + "/" + 8

Resultado:

3/8"

==========================================================*/


function formatarFracaoSimples(fracao){



    if(!fracao){


        return null;


    }



    if(fracao.numerador === 0){


        return "0";


    }



    return (

        fracao.numerador +

        "/" +

        fracao.denominador

    );


}


/* ==========================================================
   DECIMAL PARA FRAÇÃO MISTA

Ex:

2.375


Parte inteira:

2


Parte decimal:

0.375


Resultado:

2 3/8


==========================================================*/


function decimalParaFracaoMista(decimal,base=64){



    if(isNaN(decimal)){


        return null;


    }



    const inteiro = Math.floor(decimal);



    const decimalRestante =

        decimal - inteiro;



    if(decimalRestante === 0){



        return {



            inteiro,

            numerador:0,

            denominador:1



        };


    }





    const fracao = decimalParaFracao(

        decimalRestante,

        base

    );




    return {



        inteiro,


        numerador:

            fracao.numerador,



        denominador:

            fracao.denominador



    };


}


/* ==========================================================
   FORMATAR FRAÇÃO MISTA


Ex:

{
 inteiro:2,
 numerador:3,
 denominador:8
}


Resultado:

2 3/8"


==========================================================*/


function formatarFracaoMista(valor){



    if(!valor){


        return null;


    }



    if(

        valor.numerador === 0

    ){



        return `${valor.inteiro}"`;


    }



    if(valor.inteiro === 0){



        return (

            `${valor.numerador}/${valor.denominador}"`

        );


    }



    return (

        `${valor.inteiro} ${valor.numerador}/${valor.denominador}"`

    );


}


/* ==========================================================
   GERAR FRAÇÃO DE PRECISÃO


Ex:

0.333


base 8

3/8


base 16

5/16


base 64

21/64


==========================================================*/


function gerarFracaoPorBase(decimal,base){



    const fracao = decimalParaFracao(

        decimal,

        base

    );



    return formatarFracaoSimples(fracao);


}


/* ==========================================================
   GERAR FRAÇÃO MISTA POR BASE


Ex:

2.375


Resultado:

2 3/8"


==========================================================*/


function gerarFracaoMistaPorBase(decimal,base=64){



    const resultado = decimalParaFracaoMista(

        decimal,

        base

    );



    return formatarFracaoMista(

        resultado

    );


}

/* ==========================================================
   PARTE 4/5
   APROXIMAÇÕES E PRECISÃO INDUSTRIAL
==========================================================*/


/* ==========================================================
   ENCONTRAR FRAÇÃO MAIS PRÓXIMA

Ex:

Decimal:

0.376


Base:

64


Resultado:

3/8

==========================================================*/


function encontrarFracaoMaisProxima(decimal,base){



    if(isNaN(decimal)){


        return null;


    }



    const numerador = Math.round(

        decimal * base

    );



    const valorAproximado =

        numerador / base;




    const erro =

        Math.abs(

            decimal -

            valorAproximado

        );




    const fracao = simplificarFracao(

        numerador,

        base

    );



    return {



        decimalOriginal:

            decimal,



        numerador:

            fracao.numerador,



        denominador:

            fracao.denominador,



        valor:

            valorAproximado,



        erro:



            erro



    };


}


/* ==========================================================
   FORMATAR APROXIMAÇÃO


Ex:

{
numerador:3,
denominador:8
}


Retorna:

3/8"

==========================================================*/


function formatarAproximacao(resultado){



    if(!resultado){


        return null;


    }



    return (

        resultado.numerador +

        "/" +

        resultado.denominador +

        '"'

    );


}


/* ==========================================================
   GERAR TODAS AS APROXIMAÇÕES

Retorna:

1/2

1/4

1/8

1/16

1/32

1/64

1/128


==========================================================*/


function gerarTodasAproximacoes(decimal){



    const resultado = {};



    FractionConfig.BASES.forEach(base => {



        resultado[`1/${base}`] =

            encontrarFracaoMaisProxima(

                decimal,

                base

            );



    });



    return resultado;


}


/* ==========================================================
   APROXIMAÇÃO PADRÃO INDUSTRIAL

Normalmente utilizada:

1/64"

==========================================================*/


function aproximacaoIndustrial(decimal){



    const resultado =

        encontrarFracaoMaisProxima(

            decimal,

            FractionConfig.DEFAULT_BASE

        );



    return {



        fracao:

            formatarAproximacao(resultado),



        erro:

            resultado.erro



    };


}


/* ==========================================================
   CALCULAR ERRO EM MILÉSIMOS


Transforma erro decimal em milésimos de polegada.


Ex:

0.00125"

= 1.25 milésimos


==========================================================*/


function erroEmMilesimos(erro){



    return erro * 1000;


}


/* ==========================================================
   COMPARAR DUAS MEDIDAS

Ex:

0.500"

0.501"


Resultado:

Diferença:

0.001"


==========================================================*/


function compararMedidas(valor1,valor2){



    const diferenca = Math.abs(

        valor1 -

        valor2

    );



    return {



        diferenca,



        milesimos:

            erroEmMilesimos(

                diferenca

            )



    };


}


/* ==========================================================
   ANALISE COMPLETA DE PRECISÃO


Retorna todas as informações

==========================================================*/


function analisarPrecisao(decimal){



    return {



        original:

            decimal,



        aproximacoes:

            gerarTodasAproximacoes(

                decimal

            ),



        industrial:

            aproximacaoIndustrial(

                decimal

            )



    };


}

/* ==========================================================
   PARTE 5/5
   FINALIZAÇÃO DO MÓDULO
==========================================================*/



/* ==========================================================
   ANALISAR QUALQUER MEDIDA DE POLEGADA


Aceita:

3/8

1 1/2

0.375


Retorna:

decimal

mm

fração

aproximações


==========================================================*/


function analisarFracaoCompleta(valor){


    const decimal = converterFracaoParaDecimal(valor);



    if(decimal === null){


        return null;


    }



    return {



        entrada:

            normalizarFracao(valor),



        decimalPolegada:

            decimal,



        milimetros:

            decimal * 25.4,



        fracao64:

            gerarFracaoMistaPorBase(

                decimal,

                64

            ),



        fracao32:

            gerarFracaoMistaPorBase(

                decimal,

                32

            ),



        fracao16:

            gerarFracaoMistaPorBase(

                decimal,

                16

            ),



        aproximacoes:

            analisarPrecisao(

                decimal

            )


    };


}







/* ==========================================================
   CONVERTER MILÍMETRO PARA POLEGADA COMPLETA


Ex:

25.4 mm


Retorna:

1"


==========================================================*/


function converterMMParaPolegada(mm){



    const decimal =

        Number(mm) / 25.4;



    if(isNaN(decimal)){


        return null;


    }



    return {



        decimal:



            decimal,



        fracao:



            gerarFracaoMistaPorBase(

                decimal,

                64

            ),



        mm:



            Number(mm)


    };


}







/* ==========================================================
   CONVERTER POLEGADA PARA MILÍMETRO COMPLETO


Ex:

1 1/2"


Retorna:

38.1 mm


==========================================================*/


function converterPolegadaParaMM(valor){



    const decimal =

        converterFracaoParaDecimal(

            valor

        );



    if(decimal === null){


        return null;


    }



    return {



        decimal,



        mm:

            decimal * 25.4



    };


}








/* ==========================================================
   TESTES INTERNOS

Executa somente no console.

==========================================================*/


function testarFractions(){



    console.log(
        "===== TESTE FRACTIONS ====="
    );



    console.log(

        "3/8:",

        converterFracaoParaDecimal(

            "3/8"

        )

    );



    console.log(

        "1 1/2:",

        converterFracaoParaDecimal(

            "1 1/2"

        )

    );



    console.log(

        "2.375:",

        gerarFracaoMistaPorBase(

            2.375,

            64

        )

    );



    console.log(

        "38.1mm:",

        converterMMParaPolegada(

            38.1

        )

    );



}







/* ==========================================================
   EXPORTAÇÃO GLOBAL

Disponibiliza para:

converter.js

app.js


==========================================================*/


window.Fractions = {



    // Configuração

    FractionConfig,



    // Identificação

    normalizarFracao,

    ehFracaoSimples,

    ehFracaoMista,

    identificarTipoFracao,



    // Extração

    extrairFracaoSimples,

    extrairFracaoMista,



    // Conversões

    converterFracaoParaDecimal,

    fracaoSimplesParaDecimal,

    fracaoMistaParaDecimal,



    polegadaDecimalParaMM,

    mmParaPolegadaDecimal,



    fracaoParaMilimetros,

    milimetrosParaDecimal,



    // Frações

    decimalParaFracao,

    decimalParaFracaoMista,

    formatarFracaoSimples,

    formatarFracaoMista,



    gerarFracaoPorBase,

    gerarFracaoMistaPorBase,



    // Precisão

    encontrarFracaoMaisProxima,

    gerarTodasAproximacoes,

    aproximacaoIndustrial,

    analisarPrecisao,

    compararMedidas,



    // Alto nível

    analisarFracaoCompleta,

    converterMMParaPolegada,

    converterPolegadaParaMM,



    // Teste

    testarFractions


};

