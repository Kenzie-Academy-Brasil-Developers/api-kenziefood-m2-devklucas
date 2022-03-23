const Produto = class Produto{
    constructor(nome,preco,descricao,imagem,createdAt,updatedAt){
        this._nome = nome
        this._preco = preco
        this._descricao = descricao
        this._urlImagem = imagem
        this._dataCriacao = createdAt
        this._dataAtualizacao = updatedAt
    }
}

/* 
Estrutura json produtos

{"id":1,
"nome":"Mousse de morango com a fruta",
"preco":27.5,"categoria":"Frutas",
"descricao":"Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
"imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
"createdAt":"2022-03-19T16:16:00.629Z",
"updatedAt":"2022-03-19T16:16:00.629Z"} 

*/