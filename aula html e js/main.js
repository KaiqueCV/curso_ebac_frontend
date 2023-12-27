const form = document.getElementById('form-deposito');

function validaNome (nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        alert(mensagemSucesso);
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        alert('O nome não está completo');
    }
})

console.log(form);