import { CrudProdutos } from "../api/CrudProdutos.js"
import { TemplateAdmin } from "../models/template-admin.js"

export class alterarProdutos{
    static async apagar(idProduct){
        const token = await JSON.parse(localStorage.getItem('token'))
        CrudProdutos.apagarMeusProdutos(token,idProduct)  
    }
    static async receberDados(event,id){
        event.preventDefault()
        let input = event.target
       
        const dados = {}
    
        for(let i=0;i<input.length;i++){
            const {name, value} = input[i]
            if(name && input[i].type !== "radio"){
                dados[name]=value
            }
        }
        
        const inputRadio = document.querySelectorAll("input[type=radio]")
        for(let i = 0 ;i <inputRadio.length;i++){
            if(inputRadio[i].checked){
                dados.categoria = inputRadio[i].value
            }
        }
        
        return dados
    }
    static async editMyProducts(dados,id){
        const token = await JSON.parse(localStorage.getItem('token'))
        const idProduct = id
        CrudProdutos.editarMeusProdutos(token,idProduct,dados)   
    }
    static async  createMyProducts(data){
        const token = await JSON.parse(localStorage.getItem('token'))
        CrudProdutos.adicionarMeusProdutos(token,data)
    }
}