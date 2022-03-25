import { Carrinho } from "./carrinho.js"

export class VitrineProdutos {

  static listarProdutos(arrayProdutos){
    const vitrinePrincipal = document.querySelector(".listaProdutos")

    vitrinePrincipal.innerHTML = ""

    arrayProdutos.forEach((item)=>{
      const li = this.templateVitrine(item)
      vitrinePrincipal.appendChild(li)

    })
  }

  static templateVitrine(produto){
    const {id,nome,preco,categoria,descricao,imagem} = produto
    const li  = document.createElement("li")
    li.classList.add("containerCardProduto")

    li.innerHTML = `
    <div class="containerHeaderProduto">
    <img src="${imagem}" alt="${nome}">
    </div>
    <div class="containerDetalhesProduto">
        <h1 class="marginTopBottom10px">${nome}</h1>
        <p class="marginTopBottom10px">${descricao}</p>
        <p class="marginTopBottom10px">${categoria}</p>
        <div class="footerCarrinho">
            <h2 class="marginTopBottom10px">${preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
            <button id="${id}" class="btnCarrinho marginTopBottom10px">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    </div>
    `
    const btnCarrinho = li.querySelector('button')
    btnCarrinho.addEventListener('click', () => {
      Carrinho.listaProdutosSalva.push(produto)
      Carrinho.adicionarCarrinho(Carrinho.listaProdutosSalva)

      localStorage.setItem('produtosCarrinho', JSON.stringify(Carrinho.listaProdutosSalva))
    })
  
    return li
  }

  static buscarProdutos() {
    let input, filter, ul, li, a, txtValue;

    input = document.getElementById("inputPesquisarProduto")
    filter = input.value.toUpperCase()
    ul = document.getElementById("listaProdutos")
    li = ul.getElementsByTagName("li")

    for (let i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h1")[0]

        txtValue = a.textContent || a.innerText

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }

  }
  
  static filtrarProdutos(arrayProdutos,filtro){
    let arrayFiltrado = [{}]
    
    arrayFiltrado = arrayProdutos.filter(function(item){
      return (item.categoria === filtro);
    })
    
    this.listarProdutos(arrayFiltrado)
  }

}