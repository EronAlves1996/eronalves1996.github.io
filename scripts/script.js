"use strict"
const changeDiv = document.getElementById("changes");
const buttons = document.querySelectorAll(".button");

function loadMainPage (){
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

loadMainPage();

for(let i = 0; i<buttons.length; i++){
   buttons[i].addEventListener("click", ()=>{
   changeDiv.innerHTML = " ";
   if(buttons[i].class!="buttons clicked"){
      for(let j = 0; j<buttons.length;j++){
         buttons[j].setAttribute("class","buttons");
      }
      buttons[i].setAttribute("class","buttons clicked");
   }

   })
}

