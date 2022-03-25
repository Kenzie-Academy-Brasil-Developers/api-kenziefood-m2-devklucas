import {CrudProdutos}  from "../api/CrudProdutos.js"
import {Filter} from "../controllers/filter.js"
import { alterarProdutos } from "../controllers/alterarProdutos.js"

const modalCadastrar = document.querySelector('.Cadastrar')
const adicionarProdutos = document.querySelector('.adicionarproduto')


const form = document.querySelector('#formularioEdicaoCadastro')

form.addEventListener('submit', (event)=> alterarProdutos.receberDados(event))


//Atualiza produtos do usuário
CrudProdutos.pegarMeusProdutos()

//Chama pesquisar por categoria filter.js
const navCategorias = document.querySelector('.categoria')
navCategorias.addEventListener('click', (evt)=>{
    let click = evt.target
    
    Filter.filtroPorCategoria(click.classList.value)
})

//Chama pesquisar por nome em filter.js
const campoBuscaNome = document.querySelector(".pesquisa input")
    campoBuscaNome.addEventListener("keyup", function(){
        const value = campoBuscaNome.value
        Filter.filtrarNome(value)     
    })

//Chama modal de cadastrar novo produto
function modalCadastrarProduto(){
    
    modalCadastrar.classList.remove('hidden')
    
    const remove = document.querySelector('.Cadastrar button')
    remove.addEventListener('click',()=>{
        modalCadastrar.classList.add('hidden')
    })
    const form = document.querySelector('.Cadastrar form')
    form.addEventListener('submit', chamardados)
}

adicionarProdutos.addEventListener('click',modalCadastrarProduto)

async function chamardados(event){
    event.preventDefault()
    console.log(event)
    const dados = await alterarProdutos.receberDados(event)
   return await alterarProdutos.createMyProducts(dados)
}




