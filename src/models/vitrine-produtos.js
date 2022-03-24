import { Carrinho } from "./Carrinho.js"

export class VitrineProdutos {

  static listarProdutos(arrayProdutos){
    const vitrinePrincipal = document.querySelector(".listaProdutos")

    vitrinePrincipal.innerHTML = ""

    arrayProdutos.forEach((item)=>{
      const li = this.templateVitrine(item, arrayProdutos)
      vitrinePrincipal.appendChild(li)

    })
  }

  static templateVitrine({id,nome,preco,categoria,descricao,imagem},arrayProdutos){
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
    btnCarrinho.addEventListener('click', () => Carrinho.adicionarCarrinho(arrayProdutos, btnCarrinho.id))

    return li
  }

  static filtrarProdutos(arrayProdutos,filtro){
    let arrayFiltrado = [{}]
    
    arrayFiltrado = arrayProdutos.filter(function(item){
      return (item.categoria === filtro);
    })
    
    this.listarProdutos(arrayFiltrado)
  }
}