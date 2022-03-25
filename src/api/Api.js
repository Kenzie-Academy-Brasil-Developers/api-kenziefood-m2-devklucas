const Api = class Api{

    static async requestProdutos(){
  
      let arrayProdutos = [{}]
  
      let response = await fetch('https://kenzie-food-api.herokuapp.com/products')
      let data = await response.json();

      for(let i = 0; i<data.length;i++){
        arrayProdutos[i] = data[i]
      }
      return arrayProdutos      
  }

}
  
  export {Api}