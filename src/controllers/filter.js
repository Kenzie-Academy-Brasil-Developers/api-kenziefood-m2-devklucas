import { CrudProdutos } from "../api/CrudProdutos.js"
import {TemplateAdmin} from "../models/template-admin.js"

export class Filter{
    static filtroPorCategoria(nome){
        const data = []
        switch (nome){
            case 'todos':
                TemplateAdmin.mostrarProdutos(CrudProdutos.MeusProdutos)
            break
            case 'panificadora':
                CrudProdutos.MeusProdutos.forEach(item =>{
                    if(item.categoria === 'panificadora'){
                        data.push(item)
                    }
                })
                TemplateAdmin.mostrarProdutos(data)
               
            break
            case 'frutas': 
                CrudProdutos.MeusProdutos.forEach(item =>{
                    if(item.categoria === 'fruta'){
                        data.push(item)
                    }
                })
                TemplateAdmin.mostrarProdutos(data)
               
            break
            case 'bebidas':
                CrudProdutos.MeusProdutos.forEach(item =>{
                    if(item.categoria === 'bebida'){
                        data.push(item)
                    }
                })
                TemplateAdmin.mostrarProdutos(data)
        }
    }
    static async filtrarNome(input){
        
         const produtos = CrudProdutos.MeusProdutos
         
         let produtosFiltrados = produtos.filter(function(produto){
            const {nome} = produto
            const pesquisaFormatada         = input.toLowerCase().trim()
            const nomeProdutoFormatado      = nome.toLowerCase()
            
            if(nomeProdutoFormatado.includes(pesquisaFormatada)){
                return produto
            }
        
        })
    return TemplateAdmin.mostrarProdutos(produtosFiltrados)
    }
}