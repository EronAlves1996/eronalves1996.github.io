"use strict"
const changeDiv = document.getElementById("changes");
const buttons = document.querySelectorAll(".button");

/* índice do array de buttons:
[0] = Página Principal
[1] = Projetos
[2] = Blog
[3] = Contatos
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

function loadProjectsPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Projetos"));

   changeDiv.appendChild(h3El);

}

function loadBlogPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Sobre o Meu Blog"));

   changeDiv.appendChild(h3El);

}

function loadContactsPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Contatos"));

   changeDiv.appendChild(h3El);

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
buttons[1].addEventListener("click", loadProjectsPage);
buttons[2].addEventListener("click", loadBlogPage);
buttons[3].addEventListener("click", loadContactsPage);

