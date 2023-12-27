const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome (nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMenssagemSucesso = document.querySelector('.sucess-mensage');
        containerMenssagemSucesso.innerHTML = mensagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        document.querySelector('.error-mensage').style.display = 'block';
        nomeBeneficiario.style.border = '1px solid red';
    }
})

nomeBeneficiario.addEventListener('change', function(e) {
    console.log(e); 
})