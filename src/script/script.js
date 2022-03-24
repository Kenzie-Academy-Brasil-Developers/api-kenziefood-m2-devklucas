import { Api } from '../api/Api.js'
import { VitrineProdutos } from '../models/Vitrine-produtos.js'
import { Carrinho } from '../models/Carrinho.js'

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

const modalCarrinho = document.getElementById('containerCarrinho')
modalCarrinho.addEventListener('click', () => Carrinho.mostrarModal())

/*
const carrinho = document.getElementById('qtdTotalCompra');
carrinho.addEventListener('change',() => Carrinho.verificaConteudoCarrinho())

*/