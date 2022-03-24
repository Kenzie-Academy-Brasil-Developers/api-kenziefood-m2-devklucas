export class User{
    
    static ROTA = 'https://kenzie-food-api.herokuapp.com'

    static auth = {
       
    }
    
    static async loginUsuario(data){
       
        const dadosResposta =  await fetch(`${this.ROTA}/auth/login`,{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)//paramentro da função tem que ser um objeto com email, e senha(chave : valor)
        })
        .then(resposta => resposta.json())
        .catch(erro => erro);

        this.auth.token = await dadosResposta

        return this.salvarDadosUsuario(dadosResposta)
    }   
    static salvarDadosUsuario(dadosResposta){    
        //Implementando no local storage
        localStorage.removeItem('token')
        localStorage.setItem('token',JSON.stringify(dadosResposta))
        // conferindo status da requisição:
        let resposta;
        for(const key in dadosResposta) {
            resposta = key
        }

        if(resposta === 'error'){
           //criação de pop up
           const janela = document.querySelector('body');
           const popUp = document.createElement('div');
           popUp.classList.add('popUpErro')
           popUp.innerHTML = `
                <p class="tituloPopUp"> Error </p>
                <p class="respostaPopUp"> ${dadosResposta.error} </p>   
           `
           janela.appendChild(popUp)
           setTimeout(() => {
               popUp.classList.add('fadeOutPopUp')
               setTimeout(() => popUp.remove(), 1000)
           }, 3000);
        }else{
            window.location.assign('../../index.html')
        }
    } 
    
}