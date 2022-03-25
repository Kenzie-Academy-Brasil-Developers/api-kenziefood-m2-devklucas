import {User} from "../api/User.js"

const form = document.getElementById('formularioLogin')

//Função que captura os dados da página e chama a classe User para fazer o login do usuario
async function login(evt){
    
    evt.preventDefault()
    const input = evt.target

    const dados = {}
    
    for(let i=0;i<input.length;i++){
        const {name, value} = input[i]
        if(name){
            dados[name] = value
        }
    }
    
    return await User.loginUsuario(dados)
}

form.addEventListener('submit', login)