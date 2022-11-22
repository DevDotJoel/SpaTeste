(function () {
    
    var pageController= function controller (){
        function init(){  // função a correr quando a página é carregada
            console.log("joel")
        }
        return {
            init: init
        }
    
    }();
app.registerController("#products",{
    controller: pageController,
    page:"products.html"
})  // Registar Controlador




}());// ao por desta forma a função acima corre ao encontrar este script no ficheiro index abaixo



function createProduct(){
}