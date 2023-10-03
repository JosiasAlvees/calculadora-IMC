const calcular = document.getElementById('calcular');
const resetar = document.getElementById('resetar');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== ''  && peso !== '') {
        const imc = (peso / (altura * 2)).toFixed(2);

    let classificacao = '';

    if (imc < 16.9 ) {
        classificacao = 'muito abaixo do peso'
    }else if (imc < 18.4 ) {
        classificacao = 'abaixo do peso'
    }else if (imc < 24.9 ) {
        classificacao = 'no peso normal'
    }else if (imc < 29.9 ) {
        classificacao = 'acima do peso'
    }else if (imc < 34.4 ) {
        classificacao = 'com obesidade de grau I. CUIDADO'
    }
    else if (imc < 40 ) {
        classificacao = 'com obesidade de grau II. CUIDADO'
    }else if (imc >= 40) {
        classificacao = 'com obesidade de grau III. CUIDADO'
    }

        resultado.textContent = (`${nome} seu imc é ${imc} e você está ${classificacao}`);

    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
}

function resetarCampos(){
    document.getElementById('nome').value = '';
     document.getElementById('altura').value = '';
     document.getElementById('peso').value = '';
     document.getElementById('resultado').textContent = '';	
    }

calcular.addEventListener('click', imc);
resetar.addEventListener('click', resetarCampos);
