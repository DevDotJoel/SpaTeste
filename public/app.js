

var app=function () {
    var routes = {};// Objeto com as rotas que vão ser registados pelos componentes ao inicializar ex: products , home etc
    // este objeto routes vai ter o seguinte aspeto se tiver 2 componentes registados:{ products:"products.html",home:"home.html"}
      
    
  
   
    function init(){  // registar evento de mudança de URL ao carregar num link 
        window.addEventListener('hashchange',routeChanged
        );
        routeChanged();
    }
    function routeChanged(){ 
        var component = location.hash; // ir ao url e encontrar o nome da pagina passada no link atenção que tem de ter cardinal
        if(component===""){ // se não tiver nada devolver o html em branco
            document.getElementById("root").innerHTML="";
            return;
        }
        if(routes[component]){  // verficar se existe o componente
            var pageController=routes[component]
            fetch(pageController.page).then((response)=> response.text()).then((html)=>{
               document.getElementById("root").innerHTML=html;
               routes[component].controller
               pageController.controller.init();
            })
            
        }
        else{
            fetch("error.html").then((response)=> response.text()).then((errorHtml)=>{
                document.getElementById("root").innerHTML=errorHtml;
             })        
                        
          }
    }
    function registerPageController(componentName,controller){  // todos os componentes de javascript tem de registar este controlador
        routes[componentName] = controller;
    }

    return{ // devolver as seguintes opções ao usar o app. ex : app.registarController, 
        registerController:registerPageController,
        routes:routes,
        initialize:init
    }
 }();

