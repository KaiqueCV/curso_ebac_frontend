$(document).ready(function() { 
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('000.00-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
        },
        messages: {
            nome: 'Por Favor, insira seu nome' 
        },
            submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})