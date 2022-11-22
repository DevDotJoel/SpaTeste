(function () {
    
    var pageController= function controller (){
        function init(){  // função a correr quando a página é carregada
           

        }
        return {
            init: init
        }
    
    }();
app.registerController("#createproduct",{
    controller: pageController,
    page:"create.product.html"
})  // Registar Controlador




}());// ao por desta forma a função acima corre ao encontrar este script no ficheiro index abaixo



async function createProduct(){
    const product = {
        name: document.getElementById('name').value,
        price: Number(document.getElementById('price').value),
    }
  const response=  await fetch("/api/products/add",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(product)
    })
    await response.text();
    window.location.href = "http://localhost:3000/#products";
}