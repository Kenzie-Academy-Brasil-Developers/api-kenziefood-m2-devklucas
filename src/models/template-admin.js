import { CrudProdutos } from "../api/CrudProdutos.js"
import { alterarProdutos } from "../controllers/alterarProdutos.js"


//  import {alterarProdutos} from "../controllers/alterarProdutos.js"
export class TemplateAdmin{
    static async mostrarProdutos(data){
        const container = document.querySelector('.listadeProdutos')
        
        const li = document.querySelectorAll('.cartaoProdutos')    
        li.forEach(item => item.remove())
    
        for(let i = 0 ; i<data.length;i++){
            const li = document.createElement('li')
            li.classList.add('cartaoProdutos')
            li.innerHTML = 
                   `<div class="nomeProduto">
                        <img class='nomeProdutoImg' src="${data[i].imagem}" alt="${data[i].nome}">
                        <p>${data[i].nome}</p>
                    </div>
                    <div class="categoriaProduto">
                        <span>
                            <p>${data[i].categoria}</p>
                        </span>
                    </div>
                    <div class="categoriaDescricao">
                        <span>${data[i].descricao}</span>
                    </div>
                    <div class="categoriaAcoes">
                        <span>
                            <button id='editar${data[i].id}'><img src="../img/botaoEditarProduto.png" alt="editar produto"></button>
                            <button id='excluir${data[i].id}'><img src="../img/botaoApagarProduto.png" alt="apagar produto"></button>
                        </span>
                    </div>`
            container.appendChild(li)
            
            //add event listener nos botoes
            const btnExcluir = document.querySelector(`#excluir${data[i].id}`)
            btnExcluir.addEventListener('click', ()=>{
                const modalExcluir = document.querySelector('.Excluir')
                const fecharModalExcluir = document.querySelector('.cabecalho button') 
                const modalSim = document.querySelector('.opcoesSelecionar .Sim')
                const modalNao = document.querySelector('.opcoesSelecionar .Nao')
                
                
                modalExcluir.classList.remove('hidden')

                fecharModalExcluir.addEventListener('click',()=>{
                    modalExcluir.classList.add('hidden')
                })
                
                modalSim.addEventListener('click', ()=>{
                    alterarProdutos.apagar(data[i].id)
                    CrudProdutos.pegarMeusProdutos()
                    modalExcluir.classList.add('hidden')
                })
                modalNao.addEventListener('click', ()=>{
                    modalExcluir.classList.add('hidden')
                })
               
                
            })
            
            const btnEditar = document.querySelector(`#editar${data[i].id}`)
            btnEditar.addEventListener('click', ()=>{
                const modalEditar = document.querySelector('.Editar')
                const fecharModalEditar = document.querySelector('.Editar button')
                modalEditar.classList.remove('hidden')
                
                fecharModalEditar.addEventListener('click',()=>{
                    modalEditar.classList.add('hidden')
                })
                
                const btnEnviar = document.querySelector('#formularioEdicaoCadastro')
                btnEnviar.addEventListener('submit',chamarDados)
                
                async function chamarDados(event){
                    event.preventDefault()
                    modalEditar.classList.add('hidden')
                        const dados = await alterarProdutos.receberDados(event)
                        
                        await alterarProdutos.editMyProducts(dados,data[i].id)
                        CrudProdutos.pegarMeusProdutos()
                }
            })
        }
        
    }
    
}   