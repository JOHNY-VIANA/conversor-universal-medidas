/* ==========================================================
   CONVERSOR UNIVERSAL DE MEDIDAS
   utils.js
   Sprint 02
   Autor: Johny Viana Pereira
==========================================================*/

"use strict";

/* ==========================================================
   CONSTANTES
==========================================================*/

const MM_POR_POLEGADA = 25.4;

/* ==========================================================
   ARREDONDAR NÚMEROS
==========================================================*/

/**
 * Arredonda um número para a quantidade de casas decimais desejada.
 * @param {number} valor
 * @param {number} casas
 * @returns {number}
 */
function arredondar(valor, casas = 4) {

    return Number(valor.toFixed(casas));

}

/* ==========================================================
   VERIFICA SE É NÚMERO
==========================================================*/

/**
 * Verifica se o valor informado é um número válido.
 * @param {*} valor
 * @returns {boolean}
 */
function ehNumero(valor) {

    return !isNaN(valor) && valor !== "";

}

/* ==========================================================
   MÁXIMO DIVISOR COMUM (Algoritmo de Euclides)
==========================================================*/

/**
 * Calcula o MDC entre dois números.
 * Utilizado para simplificar frações.
 */
function mdc(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {

        let resto = a % b;

        a = b;

        b = resto;

    }

    return a;

}

/* ==========================================================
   SIMPLIFICAR FRAÇÃO
==========================================================*/

/**
 * Simplifica uma fração.
 * Exemplo:
 * 32/64 -> 1/2
 */
function simplificarFracao(numerador, denominador) {

    const divisor = mdc(numerador, denominador);

    return {

        numerador: numerador / divisor,

        denominador: denominador / divisor

    };

}

/* ==========================================================
   CONVERTER MM PARA POLEGADA DECIMAL
==========================================================*/

function mmParaDecimal(mm) {

    return mm / MM_POR_POLEGADA;

}

/* ==========================================================
   CONVERTER DECIMAL PARA MM
==========================================================*/

function decimalParaMM(decimal) {

    return decimal * MM_POR_POLEGADA;

}

/* ==========================================================
   LIMITAR VALOR
==========================================================*/

function limitar(valor, minimo, maximo) {

    return Math.min(Math.max(valor, minimo), maximo);

}

/* ==========================================================
   FORMATAR MM
==========================================================*/

function formatarMM(valor) {

    return `${arredondar(valor,4)} mm`;

}

/* ==========================================================
   FORMATAR POLEGADA DECIMAL
==========================================================*/

function formatarDecimal(valor) {

    return `${arredondar(valor,6)}"`;

}

/* ==========================================================
   REMOVER ESPAÇOS
==========================================================*/

function limparTexto(texto) {

    return texto.trim();

}

/* ==========================================================
   SUBSTITUIR VÍRGULA POR PONTO
==========================================================*/

function normalizarNumero(valor) {

    return valor.replace(",", ".");

}

/* ==========================================================
   COPIAR TEXTO (FUTURO)
==========================================================*/

function copiar(texto){

    navigator.clipboard.writeText(texto);

}

/* ==========================================================
   GERAR DATA/HORA
==========================================================*/

function dataHora(){

    return new Date().toLocaleString("pt-BR");

}

/* ==========================================================
   EXPORTAÇÃO GLOBAL
==========================================================*/

window.Utils = {

    MM_POR_POLEGADA,

    arredondar,

    ehNumero,

    mdc,

    simplificarFracao,

    mmParaDecimal,

    decimalParaMM,

    limitar,

    formatarMM,

    formatarDecimal,

    limparTexto,

    normalizarNumero,

    copiar,

    dataHora

};