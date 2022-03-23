import { Api } from '../api/api.js'
import { VitrineProdutos } from '../models/vitrine-produtos.js'

const arrayProdutos = await Api.requestProdutos()

VitrineProdutos.listarProdutos(arrayProdutos)