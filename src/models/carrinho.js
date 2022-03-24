import { Api } from "../api/Api.js"

export class Carrinho{
    static quantidadeProdutos = 0

    static precoTotal = 0

    static listarProdutos() {
        Api.requestProdutos()
        .then(resposta => arrayProdutos = resposta)
        return arrayProdutos
    }

    static adicionarCarrinho(arrayProdutos, id) {
        const containerProdutos = document.querySelector('.containerCarrinho')
        const listaCarrinho = document.querySelector('.listaProdutosCarrinho');
        let precoProduto;

        arrayProdutos.forEach((produto) => {
            if (produto.id == id) {
                precoProduto = produto.preco
                let preco = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
         // criação do html interno de cada objeto adicionado no carrinho
                const itemCarrinho = document.createElement('li');
                itemCarrinho.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="detalhesProduto">
                    <h2 class ="infoProduto nomeProduto">${produto.nome}</h2>
                    <p class="infoProduto categoriaProduto">${produto.categoria}</p>
                    <span class="infoProduto precoProduto">${preco}</span>
                </div>
                <button class="excluirProduto" id="btnExcluir${produto.id}" class="btnCarrinho marginTopBottom10px">
                    <i class="fa-solid fa-trash"></i>
                </button>
                `

                const excluirProduto = itemCarrinho.querySelector(`#btnExcluir${produto.id}`)
                excluirProduto.addEventListener('click', () => this.removerCarrinho(excluirProduto, produto.preco))

                itemCarrinho.classList.add('produtoCarrinhoContainer')
                listaCarrinho.appendChild(itemCarrinho)
                console.log(produto)
            }
        })

        this.atualizarInformacoes(true, precoProduto)
    }

    static removerCarrinho(botaoExcluir, preco) {
        const produto = botaoExcluir.closest('li');
        produto.remove()

        this.atualizarInformacoes(false, preco)
    }

    static atualizarInformacoes(deveSomar, preco) {
        const quantidade = document.querySelector('#qtdTotalCompra');
        const total = document.querySelector('#precoTotalCompra');

        if (deveSomar) {
         //atualizando variaveis numericas
            this.precoTotal += preco
            this.quantidadeProdutos++

        
        } else {
         //atualizando variaveis numericas
            this.precoTotal -= preco
            this.quantidadeProdutos--

        }
        //atualizando valores na página
        quantidade.innerText = this.quantidadeProdutos;
        total.innerText = this.precoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}