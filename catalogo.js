export default class catalogo { 
    #listaDemidias
    constructor() {
         this.#listaDemidias = [];
    } 
     adicionar (midia) { 
      this.#listaDemidias.push(midia);
      this.renderizar();


     }  
  renderizar() {
  const contrainer = document.getElementById("containerCatalogo") 
  comtainer. innerHTML = "";
  this.#listaDemidias.forEach(midia => { 


       contrainer.innerHTML += midia.obterDados

  });
 }
      static filtrarPorGeneri(catalogoInstanciado, generoAlvo) {
         return catalogoInstanciado.#listadeMidias.filter(
             m => m.genero.toLowerCase() === generoAI
         )
        }
    