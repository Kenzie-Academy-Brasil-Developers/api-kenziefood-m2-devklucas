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