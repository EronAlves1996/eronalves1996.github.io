"use strict"
const changeDiv = document.getElementById("changes");
const buttons = document.querySelectorAll(".button");

/* índice do array de buttons:
[0] = Página Principal
[1] = Anúncios
[2] = Notícias
*/

function loadMainPage (){
   changeDiv.innerHTML = "";

   // Definindo o Título da página principal

   let headerMainPage = document.createElement("h3");
   let headerMainPageContent = document.createTextNode("Bem vindo!");
   headerMainPage.appendChild(headerMainPageContent);

   //Definindo o conteúdo
   
   let paragraph = document.createElement("p");
   paragraph.appendChild(document.createTextNode("Quer criar seu site personalizado?"));
   paragraph.appendChild(document.createElement("br"));
   paragraph.appendChild(document.createTextNode("Fale Comigo!"));

   changeDiv.appendChild(headerMainPage)
   changeDiv.appendChild(paragraph);

}

function loadAdsPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3AdsPage = document.createElement("h3");
   h3AdsPage.appendChild(document.createTextNode("Anúncios"));

   changeDiv.appendChild(h3AdsPage);

}

function loadNewsPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3AdsPage = document.createElement("h3");
   h3AdsPage.appendChild(document.createTextNode("Notícias"));

   changeDiv.appendChild(h3AdsPage);

}

for(let i = 0; i<buttons.length; i++){
   buttons[i].addEventListener("click", ()=>{
   if(buttons[i].class!="button clicked"){
      for(let j = 0; j<buttons.length;j++){
         buttons[j].setAttribute("class","button");
      }
      buttons[i].setAttribute("class","button clicked");
   }
   })
}

addEventListener("load", loadMainPage);
buttons[0].addEventListener("click", loadMainPage);
buttons[1].addEventListener("click", loadAdsPage);
buttons[2].addEventListener("click", loadNewsPage);
