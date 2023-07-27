import Error404Screen from "./srceens/Error404screen.js";
import HomeScreen from "./srceens/HomeScreen.js";
import ProductScreen from "./srceens/ProductScreen.js";
import { parceRequestUrl } from "./utils.js";
const routes ={
    "/": HomeScreen,
    "/product/:id": ProductScreen,
}
const router =async() =>{
    const request = parceRequestUrl()
    const parseUrl = 
    (request.resourse ? `/${request.resourse}` : '/') + 
    (request.id? '/:id' : '' ) + 
    (request.verb ? `/${request.verb}` : '' );
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen

    const main = document.getElementById('main-container');
    main.innerHTML =await screen.render();
}


window.addEventListener('load', router)
window.addEventListener('hashchange', router)