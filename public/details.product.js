(function () {
    
    var pageController= function controller (){
       async function init(){  // função a correr quando a página é carregada
        console.log("uohhh")

        }
        return {
            init: init
        }
    
    }();
app.registerController("#productdetails",{
    controller: pageController,
    page:"details.product.html"
})  // Registar Controlador




}());// ao por desta forma a função acima corre ao encontrar este script no ficheiro index abaixo

