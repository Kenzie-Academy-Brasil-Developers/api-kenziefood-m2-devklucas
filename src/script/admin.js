import {CrudProdutos}  from "../api/CrudProdutos.js"

listaMeusProdutos()
async function listaMeusProdutos(){
    const token = await JSON.parse(localStorage.getItem('token'))
    CrudProdutos.pegarMeusProdutos(token)
}
// async function createMyProducts(){
//     const token = await JSON.parse(localStorage.getItem('token'))
//     const data = 
//     {
//         "nome": "Maça",
//         "preco": "20",
//         "categoria": "fruta",
//         "imagem": "https://picsum.photos/200/300",
//         "descricao" : "Lorem ipsum Lorem ipsum" 
//     }
//     CrudProdutos.adicionarMeusProdutos(token,data)
// }
// async function editMyProducts(){
//     const token = await JSON.parse(localStorage.getItem('token'))
//     const idProduct = //numero do id do produto
//     CrudProdutos.editarMeusProdutos(token,idProduct,{
//         nome:"Não é bolinho"
//     })   
// }
// async function deleteMyProducts(){
//     const token = await JSON.parse(localStorage.getItem('token'))
//     const idProduct = //numero do id do produto
//     CrudProdutos.apagarMeusProdutos(token,idProduct)   
// }