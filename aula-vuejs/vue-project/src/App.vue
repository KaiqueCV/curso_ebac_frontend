<script setup>
import { reactive } from 'vue';

const nome = "kaique"
const meuObj = {
  nome: "kaique",
  filmeFavorito: "Rocky"
}

function dizOla(nome) {
  return `${nome} diz oi`;
}

const enderecoDaImagem = "https://s3.static.brasilescola.uol.com.br/be/2023/09/1-escudo-do-corinthians.jpg"
const corinthiansJapao = "https://a-static.mlcdn.com.br/450x450/camisa-do-corinthians-nova-japao-22-23-ny/edneiaparecidomorais/194/28208a9ed12e60dfb756877287149b0f.jpeg"

const botaoEstaDesabilitado = false

const gostaDoCorinthians = false
const corinthiansMundial = false

const estaAutorizado = false

// let contador = 0 
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['kaique', 'stella', 'julia', 'vital'],
  nomeAInserir: '',
})


function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostaSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValorTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastraNome() {
  if (estado.nomeAInserir.length >=3) {
    estado.nomes.push(estado.nomeAInserir)
  } else {
    alert("Digite mais caracteres")
  }
}


</script>

<template>
  <h1>{{ nome }}</h1>
  <img v-if="gostaDoCorinthians" :src="enderecoDaImagem" alt="">
  <img v-else-if="corinthiansMundial" :src="corinthiansJapao" alt="">
  <h2 v-else>Não curte gostei dessas imagens</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>

<br />
<hr />

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br />
  <hr />

  Saldo: {{ estado.saldo }} <br>
  Transferenrindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostaSaldoFuturo() }} <br>
  <input :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>

<style scoped>
img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}
</style>
