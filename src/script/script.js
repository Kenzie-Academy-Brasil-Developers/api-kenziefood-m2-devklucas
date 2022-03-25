import { Api } from '../api/Api.js'
import { VitrineProdutos } from '../models/vitrine-produtos.js'
import { Carrinho } from '../models/carrinho.js'

//VALIDAÇÃO ADMIN   
const btnAdmin = document.querySelector('.btnAdmin');
btnAdmin.addEventListener('click', () => {
    const token = JSON.parse(localStorage.getItem('token'));

    if(token){
       window.location.href='./src/pages/admin.html';
    } else {
        const janela = document.querySelector('body');
           const popUp = document.createElement('div');
           popUp.classList.add('popUpErro')
           popUp.innerHTML = `
                <p class="tituloPopUp"> Error </p>
                <p class="respostaPopUp">Para entrar na aba de Administrador é necessário fazer Login</p>   
           `
           janela.appendChild(popUp)
           setTimeout(() => {
               popUp.classList.add('fadeOutPopUp')
               setTimeout(() => popUp.remove(), 1000)
           }, 3000);
    }
})

// apresentação produtos
const arrayProdutos = await Api.requestProdutos()

VitrineProdutos.listarProdutos(arrayProdutos)

const btnTodos = document.getElementById('btnTodos');

const btnPanificadora = document.getElementById('btnPanificadora');
const btnFrutas = document.getElementById('btnFrutas');
const btnBebidas = document.getElementById('btnBebidas');

btnTodos.addEventListener('click', () => VitrineProdutos.listarProdutos(arrayProdutos))

btnPanificadora.addEventListener('click', () => VitrineProdutos.filtrarProdutos(arrayProdutos,"Panificadora"))
btnFrutas.addEventListener('click', () => VitrineProdutos.filtrarProdutos(arrayProdutos,'Frutas'))
btnBebidas.addEventListener('click', () => VitrineProdutos.filtrarProdutos(arrayProdutos,'Bebidas'))

const inputBusca = document.getElementById('inputPesquisarProduto')

inputBusca.addEventListener('keyup', () => VitrineProdutos.buscarProdutos())

const containerProdutos = document.querySelector('#containerCarrinho')
//criando container para a lista de produtos
const listaCarrinho = document.createElement('ul');
listaCarrinho.classList.add('listaProdutosCarrinho');
containerProdutos.appendChild(listaCarrinho)

//criando barra de dados sobre a compra
const containerDadosCarrinho = document.createElement('div');
containerDadosCarrinho.classList.add('containerDadosCarrinho')
containerDadosCarrinho.classList.add('hidden')
containerDadosCarrinho.innerHTML = `
<div class="containerQuantidadeCarrinho">
<span>Quantidade</span>
<span id="qtdTotalCompra">0</span>
</div>
<div class="containerTotalCarrinho">
<span>Total</span>
<span id="precoTotalCompra">R$ 0,00</span>
</div>
`
containerProdutos.appendChild(containerDadosCarrinho)
//gerando lista de produtos do Local Storage
const produtosLocalStorage = localStorage.getItem('produtosCarrinho')
const produtosTratados = JSON.parse(produtosLocalStorage)
if(produtosTratados) {
    Carrinho.adicionarCarrinho(produtosTratados)
}

const modalCarrinho = document.getElementById('containerCarrinho')
modalCarrinho.addEventListener('click', () => Carrinho.mostrarModal())


