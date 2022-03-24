export class User{
    
    static ROTA = 'https://kenzie-food-api.herokuapp.com'

    static auth = {
       
    }
    
    static async loginUsuario(data){
       
        const resposta =  await fetch(`${this.ROTA}/auth/login`,{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)//paramentro da função tem que ser um objeto com email, e senha(chave : valor)
        })
        const dadosResposta = await resposta.json()

        this.auth.token = dadosResposta

        return this.salvarDadosUsuario(dadosResposta)
    }   
    static salvarDadosUsuario(dadosResposta){    
        //Implementando no local storage
        localStorage.removeItem('token')
        localStorage.setItem('token',JSON.stringify(dadosResposta))

        if(dadosResposta.status === 'Error'){
            console.log('nao entrou')
            //mostrar uma mensagem de erro  
        }else{
            window.location.assign('../../index.html')
        }
    } 
    static async cadastrarUsuario(data){
    const resposta =  await fetch(`${this.ROTA}/auth/login`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)//paramentro da função tem que ser um objeto com email, e senha(chave : valor)
    })
    const dadosResposta = await resposta.json()
   
        if(dadosResposta.status === 'Error'){
            console.log('nao entrou')
            //mostrar uma mensagem de erro  
        }else{
            window.location.assign('.././pages/login.html')
        }
    }
}