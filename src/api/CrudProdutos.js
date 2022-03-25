import { TemplateAdmin } from "../models/template-admin.js"

export class CrudProdutos{

    static ROTA = 'https://kenzie-food-api.herokuapp.com'
    
    static MeusProdutos = []
    
    static async pegarMeusProdutos(){
        const token = await JSON.parse(localStorage.getItem('token'))
    
        const resposta = await fetch(`${this.ROTA}/my/products`,{
              headers : 
                 {Authorization: `Bearer ${token}`}
            
         })
         const dadosResposta = await resposta.json()
         await TemplateAdmin.mostrarProdutos(dadosResposta)
       
        return this.MeusProdutos = dadosResposta //Retorna um array de produtos com usuário autenticado 
    }
    
    static async adicionarMeusProdutos(token,data){
        const resposta = await fetch(`${this.ROTA}/my/products`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`},
            body:JSON.stringify(data)
       })
        const dadosResposta = await resposta.json()
            CrudProdutos.pegarMeusProdutos()//Retorna dados do produto criado(id,nome,preco,categoria,urlImagem, descrição)
        
    }

    static async editarMeusProdutos(token,idProduto, data){
        const resposta = await fetch(`${this.ROTA}/my/products/${idProduto}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`},
            body:JSON.stringify(data)
          
       })
       const dadosResposta = await resposta.json()
       return dadosResposta//Retorna "Produto Atualizado" ou mensagem de erro
    }
    static async apagarMeusProdutos(token,idProduto){
        const resposta = await fetch(`${this.ROTA}/my/products/${idProduto}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
         return CrudProdutos.pegarMeusProdutos()
        // const dadosResposta = await resposta.json()
        // return dadosResposta //api só retorna mensagem de erro, em caso de sucesso nao há retorno
    }
} 


