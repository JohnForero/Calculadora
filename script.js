let resultado = document.querySelector('.resultado');
let resultadoOperacion = 0;
let resultadoString = '';
let tipoOperacion = null;
let tipoOperacion2 = null;
let cambiarContenidoResultado = (evento) => {
    // resultadoString = resultadoString + evento.innerHTML;
    if (!tipoOperacion) {
        if (resultadoString.length < 3) {
            resultadoString += evento.innerHTML;
        }
    }
    resultado.innerHTML = resultadoString;
}

let operaciones = (operador) => {

    if (operador.innerHTML == '=') {
        switch (tipoOperacion2) {
            case '+':
                resultadoOperacion += parseInt(resultadoString);
                break;
            case '-':
                resultadoOperacion -= parseInt(resultadoString);
                break;
            case 'x':
                resultadoOperacion *= parseInt(resultadoString);
                break;
            case '%':
                resultadoOperacion /= parseInt(resultadoString);
                break;

        }
    } else {

        tipoOperacion = operador.innerHTML;
        resultadoOperacion = parseInt(resultadoString);
        resultadoString = '';
        tipoOperacion2 = tipoOperacion;
        tipoOperacion = null;
    }
    resultado.innerHTML = resultadoOperacion.toString();
}

let borrar = () => {
    resultadoOperacion = 0;
    resultadoString = '';
    tipoOperacion = null;
    resultado.innerHTML = '0';
}

