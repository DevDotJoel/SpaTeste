(function () {
    
    var pageController= function controller (){
        function init(){ // função a correr quando a página é carregada
        }
        return {
            init: init
        }
    
    }();
app.registerController("#home",{
    controller: pageController,
    page:"home.html"
})  // Registar Controlador





}());// ao por desta forma a função acima corre ao encontrar este script no ficheiro index abaixo

