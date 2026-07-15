/* ==========================================================
   CONVERSOR UNIVERSAL DE MEDIDAS

   converter.js
   Sprint 02

   Responsável por:
   - Motor principal de conversão
   - Integração entre módulos
   - Gerar resultados finais

   Autor: Johny Viana Pereira
==========================================================*/


"use strict";



/* ==========================================================
   CONSTANTE

   1 polegada = 25.4 mm

==========================================================*/


/* ==========================================================
   FORMATAR RESULTADOS

==========================================================*/


function formatarResultado(valor, casas = 4){


    return Number(valor.toFixed(casas));


}







/* ==========================================================
   CONVERTER DE MILÍMETROS

Entrada:

25.4 mm


Saída:

1"

1/1"


==========================================================*/


function converterDeMM(valor){



    const mm = Number(valor);



    const decimal =

        mm / MM_POR_POLEGADA;




    return {



        mm:



            formatarResultado(mm),



        decimal:



            formatarResultado(decimal,6),



        fracao:



            Fractions.gerarFracaoMistaPorBase(

                decimal,

                64

            ),



        aproximacoes:



            Fractions.analisarPrecisao(

                decimal

            )



    };


}







/* ==========================================================
   CONVERTER DE POLEGADA DECIMAL


Entrada:

0.375


==========================================================*/


function converterDeDecimal(valor){



    const decimal = Number(valor);



    const mm =

        decimal * MM_POR_POLEGADA;




    return {



        mm:



            formatarResultado(mm),



        decimal:



            formatarResultado(decimal,6),



        fracao:



            Fractions.gerarFracaoMistaPorBase(

                decimal,

                64

            ),



        aproximacoes:



            Fractions.analisarPrecisao(

                decimal

            )



    };


}







/* ==========================================================
   CONVERTER DE POLEGADA FRACIONÁRIA


Entrada:

3/8

1 1/2


==========================================================*/


function converterDeFracao(valor){



    const decimal =

        Fractions.converterFracaoParaDecimal(

            valor

        );



    if(decimal === null){


        return null;


    }




    const mm =

        decimal * MM_POR_POLEGADA;





    return {



        mm:



            formatarResultado(mm),



        decimal:



            formatarResultado(decimal,6),



        fracao:



            Fractions.gerarFracaoMistaPorBase(

                decimal,

                64

            ),



        aproximacoes:



            Fractions.analisarPrecisao(

                decimal

            )



    };


}








/* ==========================================================
   CONVERSOR PRINCIPAL


Recebe:

valor

tipo


tipos:

mm

decimal

fracionaria


==========================================================*/


function converter(valor,tipo){



    let resultado = null;




    switch(tipo){



        case "mm":



            resultado =

                converterDeMM(valor);


            break;





        case "decimal":



            resultado =

                converterDeDecimal(valor);


            break;





        case "fracionaria":



            resultado =

                converterDeFracao(valor);


            break;





        default:



            resultado = null;



    }




    return resultado;


}








/* ==========================================================
   GERAR RESUMO COMPLETO


Usado pela interface


==========================================================*/


function gerarResumoConversao(valor,tipo){



    const validacao =

        Validation.validarEntrada(

            valor,

            tipo

        );





    if(!validacao.valido){



        return {



            sucesso:false,


            mensagem:

                validacao.mensagem



        };


    }






    const resultado = converter(

        valor,

        tipo

    );






    if(!resultado){



        return {



            sucesso:false,


            mensagem:

            "Erro ao realizar conversão."



        };


    }






    return {



        sucesso:true,


        dados:resultado



    };



}


/* ==========================================================
   EXPORTAÇÃO GLOBAL

==========================================================*/


window.Converter = {



    converter,

    converterDeMM,

    converterDeDecimal,

    converterDeFracao,

    gerarResumoConversao



};