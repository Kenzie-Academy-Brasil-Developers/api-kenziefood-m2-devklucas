import { Api } from "../api/Api.js"

export class Carrinho{
    static quantidadeProdutos = 0

    static precoTotal = 0

    static listaProdutosSalva = []

    static adicionarCarrinho(arrayProdutos) {
        const carrinhoVazio = document.querySelector('.containerProdutosCarrinho');
        carrinhoVazio.classList.add('hidden')
        const listaCarrinho = document.querySelector('.listaProdutosCarrinho');
        listaCarrinho.innerHTML = ''
        this.quantidadeProdutos = 0
        this.precoTotal = 0
        listaCarrinho.classList.remove('hidden')
        let precoProduto;

        arrayProdutos.forEach((produto) => {
            precoProduto = produto.preco
            let preco = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
         // criação do html interno de cada objeto adicionado no carrinho
            const itemCarrinho = document.createElement('li');
            itemCarrinho.innerHTML = `
            <img class="containerImagemProdutoCarrinho" src="${produto.imagem}" alt="${produto.nome}">
            <div class="detalhesProduto">
                <h2 class ="infoProduto nomeProduto">${produto.nome}</h2>
                <p class="infoProduto categoriaProduto">${produto.categoria}</p>
                <span class="infoProduto precoProduto">${preco}</span>
            </div>
            <button id="btnExcluir${produto.id}" class="btnRemoverCarrinho">
                <i class="fa-solid fa-trash"></i>
            </button>
            `

            const excluirProduto = itemCarrinho.querySelector(`#btnExcluir${produto.id}`)
            excluirProduto.addEventListener('click', () => this.removerCarrinho(excluirProduto, produto.id,produto.preco))

            itemCarrinho.classList.add('produtoCarrinhoContainer')
            listaCarrinho.appendChild(itemCarrinho)
            console.log(produto)
            
            this.atualizarInformacoes(true, precoProduto)
        })

    }

    static removerCarrinho(botaoExcluir, id, preco) {
        const produto = botaoExcluir.closest('li');
        produto.remove()

        let index = this.listaProdutosSalva.findIndex(item => item.id = id)
        this.listaProdutosSalva.splice(index, 1)

        localStorage.setItem('produtosCarrinho', JSON.stringify(this.listaProdutosSalva))
        
        this.atualizarInformacoes(false, preco)
    }

    static atualizarInformacoes(deveSomar, preco) {
        const containerCarrinho = document.querySelector('#containerCarrinho')
        const quantidade = document.getElementById('qtdTotalCompra');
        const total = document.getElementById('precoTotalCompra');
        const containerDadosCarrinho = document.querySelector('.containerDadosCarrinho')
        console.log(containerDadosCarrinho)
        if (deveSomar) {
            containerCarrinho.classList.remove('containerCarrinhoVazio')
         //atualizando variaveis numericas
            this.precoTotal += preco
            this.quantidadeProdutos++

            containerDadosCarrinho.classList.remove('hidden')
        } else {
         //atualizando variaveis numericas
            this.precoTotal -= preco
            this.quantidadeProdutos--

            if(this.quantidadeProdutos === 0) {
                const carrinhoVazio = document.querySelector('.containerProdutosCarrinho');
                carrinhoVazio.classList.remove('hidden')

                containerDadosCarrinho.classList.add('hidden')
                localStorage.removeItem('produtosCarinho')
                containerCarrinho.classList.add('containerCarrinhoVazio')
            }

        }
        //atualizando valores na página
        quantidade.innerText = this.quantidadeProdutos;
        total.innerText = this.precoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    static mostrarModal(){
        const modal = document.getElementById("containerCarrinho");
        console.log(modal.style.bottom)
        if(modal.style.bottom == '0px'){
            modal.style.bottom = '-538px';
        }
        else{
            modal.style.bottom = 0         
        }
    }
    
}
