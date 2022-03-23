const VitrineProdutos = class VitrineProdutos {

    static listarProdutos(arrayProdutos){
        const vitrinePrincipal = document.querySelector(".listaProdutos")
        vitrinePrincipal.innerHTML = ""
        arrayProdutos.forEach((item)=>{
          const li = this.templateTbody(item)
          arrayProdutos.appendChild(li)
    
        })
      }
        
      //Criando template para corpo da tabela
    
      static templateVitrine({id,nome,preco,descricao,imagem}){
        const li  = document.createElement("li")
        li.classList.add("containerCardProduto")
        li.innerHTML = `
        <div class="containerHeaderProduto">
        <img src="${imagem}" alt="${nome}">
        </div>
        <div class="containerDetalhesProduto">
            <h1>${nome}</h1>
            <caption>${descricao}</caption>
            <div class="footerCarrinho">
                <h2>${preco}</h2>
                <button id="${id}" class="btnCarrinho">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
        `
        return li
        }
}