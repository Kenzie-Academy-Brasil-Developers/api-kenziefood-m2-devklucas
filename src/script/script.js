import { Api } from '../api/Api.js'
import { VitrineProdutos } from '../models/vitrine-produtos.js'

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

console.log(arrayProdutos)
const containerProdutos = document.querySelector('.containerCarrinho')
//criando container para a lista de produtos
const listaCarrinho = document.createElement('ul');
listaCarrinho.classList.add('listaProdutosCarrinho');
containerProdutos.appendChild(listaCarrinho)

//criando barra de dados sobre a compra
const containerDadosCarrinho = document.createElement('div');
containerDadosCarrinho.classList.add('containerDadosCarrinho')
containerDadosCarrinho.classList.add('hidden')
containerDadosCarrinho.innerHTML = `
    <div class="dadoCarrinho">
        <span>Quantidade</span>
        <span id="qtdTotalCompra">0</span>
    </div>
    <div class="dadoCarrinho">
        <span>Total</span>
        <span id="precoTotalCompra">R$ 0,00</span>
    </div>
`
containerProdutos.appendChild(containerDadosCarrinho)