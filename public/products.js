(function () {
    
    var pageController= function controller (){
        function init(){  // função a correr quando a página é carregada
           fetch("api/products").then(response=> response.json()).then(products=>{
            
            let productTable= document.getElementById("products");
            products.forEach(product => {
                
                var row = productTable.insertRow();
                var idColumn = row.insertCell();
                var id = document.createTextNode(product.id);
                idColumn.appendChild(id);

                var nameColumn = row.insertCell();
                var name = document.createTextNode(product.name);
                nameColumn.appendChild(name);
            });

           })

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