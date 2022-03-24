class Carrinho {

    static adicionarProdutoCarrinho(arrayProdutos,idProduto){
        let produtos = []
        const produto =  arrayProdutos.find((produto) => produto.id == idProduto)
        produtos.push(produto)
        return true
     }

     removerProdutoCarrinho(arrayProdutos,idProduto){
        let produtos = []
        const produto =  arrayProdutos.find((produto) => produto.id == idProduto)
        if(produto){
            const index   =  arrayProdutos.indexOf(produto)
            produtos.splice(index, 1)
            return true
        }     
    }
    /*
        <button id="${id}" class="btnRemoverCarrinho marginTopBottom10px">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    */

}

export {Carrinho}