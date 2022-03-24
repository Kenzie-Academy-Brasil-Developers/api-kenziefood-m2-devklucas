export class TemplateAdmin{
    static mostrarProdutos(data){
        const container = document.querySelector('.listadeProdutos')
        
        const li = document.querySelectorAll('.cartaoProdutos')    
        li.forEach(item => item.remove())
    
        for(let i = 0 ; i<data.length;i++){
            const li = document.createElement('li')
            li.classList.add('cartaoProdutos')
            li.innerHTML = 
            `<div class="nomeProduto">
                        <img src="${data[i].imagem}" alt="${data[i].nome}">
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
                            <button><img src="../img/botaoEditarProduto.png" alt="editar produto"></button>
                            <button><img src="../img/botaoApagarProduto.png" alt="apagar produto"></button>
                        </span>
                    </div>`
            container.appendChild(li)
        }
    }
}