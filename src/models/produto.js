const Produto = class Produto{
    constructor(id,nome,preco,categoria,descricao,imagem,createdAt,updatedAt){
        this._id = id
        this._nome = nome
        this._preco = preco
        this._categoria = categoria
        this._descricao = descricao
        this._urlImagem = imagem
        this._dataCriacao = createdAt
        this._dataAtualizacao = updatedAt
    }
}