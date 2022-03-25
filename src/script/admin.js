import {CrudProdutos}  from "../api/CrudProdutos.js"
import {Filter} from "../controllers/filter.js"

CrudProdutos.pegarMeusProdutos()

const navCategorias = document.querySelector('.categoria')
navCategorias.addEventListener('click', (evt)=>{
    let click = evt.target
    
    Filter.filtroPorCategoria(click.classList.value)
})
const campoBuscaNome = document.querySelector(".pesquisa input")
    campoBuscaNome.addEventListener("keyup", function(){
        const value = campoBuscaNome.value
        Filter.filtrarNome(value)     
    })

// async function createMyProducts(){
//     const token = await JSON.parse(localStorage.getItem('token'))
//     const data = 
//     {
//         "nome": "Panetonne",
//         "preco": "20",
//         "categoria": "panificadora",
//         "imagem": "https://picsum.photos/200/300",
//         "descricao" : "Lorem ipsum Lorem ipsum" 
//     }
//     CrudProdutos.adicionarMeusProdutos(token,data)
// }
// createMyProducts()
// async function editMyProducts(){
//     const token = await JSON.parse(localStorage.getItem('token'))
//     const idProduct = //numero do id do produto
//     CrudProdutos.editarMeusProdutos(token,idProduct,{
//         nome:"Não é bolinho"
//     })   
// }
// async function deleteMyProducts(){
//     const token = await JSON.parse(localStorage.getItem('token'))
//     const idProduct = //numero do id do produto
//     CrudProdutos.apagarMeusProdutos(token,idProduct)   
// }


// Eventos dos Botões

//Botão Cadastrar Produto
let adicionaNovoProdutoBotao = document.querySelector(".adicionarproduto")
adicionaNovoProdutoBotao.addEventListener("click", mostrarModalAdicionarProduto)

// Função Mostrar Modal Adicionar Novo Produto
function mostrarModalAdicionarProduto(){
    let modalAdicionarProduto = document.querySelector("#modalCadastroProduto")
    modalAdicionarProduto.classList.remove("hidden")    
}

//Botão Fechar Adicionar Produto
let fecharAdicionaProduto = document.querySelector("#fecharCadastroProduto")
fecharAdicionaProduto.addEventListener("click", fecharModalAdicionarProduto)

// Função Fechar Modal Adicionar Novo Produto
function fecharModalAdicionarProduto(){
    let modalAdicionarProduto = document.querySelector("#modalCadastroProduto")
    modalAdicionarProduto.classList.add("hidden")
}
