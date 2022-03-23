const Api = class Api{

    static async requestProducts(){
  
      let productsArray = [{}]
  
      let response = await fetch('https://kenzie-food-api.herokuapp.com/products')
      let data = await response.json();

      for(let i = 0; i<data.length;i++){
        productsArray[i] = data[i]
      }
      return productsArray      
  }
  
}
  
  export {Api}