import {User} from "../api/User.js"

const form = document.getElementById('formularioCadastro')

function pegarDados(evt){
    evt.preventDefault()
    const input = evt.target

    const dados = {}
    
    for(let i=0;i<input.length;i++){
        const {name, value} = input[i]
        if(name){
            dados[name] = value
        }
    }
    
    return User.cadastrarUsuario(dados)
}
form.addEventListener('submit', pegarDados)