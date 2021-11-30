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
   let headerMainPage, headerMainPageContent, p1, p2, p3, p4;

   changeDiv.innerHTML = "";

   // Definindo o Título da página principal

   headerMainPage = document.createElement("h3");
   headerMainPageContent = document.createTextNode("Bem vindo!");
   headerMainPage.appendChild(headerMainPageContent);

   //Definindo o conteúdo
   
   p1 = document.createElement("p");
   p1.appendChild(document.createTextNode("Quer criar seu site personalizado?"));
   p1.appendChild(document.createElement("br"));
   p1.appendChild(document.createTextNode("Fale Comigo!"));

   p2 = document.createElement("p");
   p2.appendChild(document.createTextNode("Aprendiz em Desenvolvimento com foco em tecnologias Backend e Node.JS"));
   p2.appendChild(document.createElement("br"));
   p2.appendChild(document.createTextNode("Formado inicialmente em administração, com grande experiências nas áreas financeira e de administração condominial"));
   p2.appendChild(document.createElement("br"));

   p3 = document.createElement("p");
   p3.appendChild(document.createTextNode(`"Recentemente redescobri minha paixão em programação e espero aprender o máximo disso para criar
   aplicações funcionais e que entreguem valor ao meu cliente"`));
   p3.style.fontStyle = "italic";

   p4 = document.createElement("p");
   p4.appendChild(document.createTextNode("Veja alguns dos meus projetos clicando na aba projetos acima!!"));

   changeDiv.append(headerMainPage, p1, p2, p3, p4);
   
}

function loadProjectsPage (){
   function projectCell(name, img, descr, page, source){
      this.name = name;
      this.img = img;
      this.descr = descr;
      this.page = page;
      this.source = source;
   }


   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Projetos"));
   const projectArray = [ 
      new projectCell("Jogo da Velha", "images/tikTakToe.png","Projeto de Jogo da Velha feito inteiramente em C, basta abrir a página e clicar em PLAY", "https://onlinegdb.com/7hQFBUJ0S","https://github.com/TTTecnology/Jogo-da-Velha"),
      new projectCell("Relógio Digital", "images/digitalClock.png","Relógio Digital moderno, imita a aparência de um rádio-relógio", "projects/digitalClock/index.html","https://github.com/TTTecnology/Digital-Clock"),
      new projectCell("Gerador de Senhas", "images/geraSenha.png","Gerador de senhas totalmente aleatório, baseado em charcodes e arrays" , "projects/geraSenha/index.html","https://github.com/TTTecnology/Password-Generator")
   ]

   const pageArray = [];
      
   let projectArrayLength = projectArray.length;
   let projectsDiv = document.createElement("div");
   for(let i = 0; i < projectArrayLength; i++){
      let intermediateArray = [];
      intermediateArray.push(document.createElement("img"));
      intermediateArray[0].src=projectArray[i].img;
      intermediateArray.push(document.createElement("h4").appendChild(document.createTextNode(projectArray[i].name)));
      intermediateArray.push(document.createElement("p").appendChild(document.createTextNode(projectArray[i].descr)));
      intermediateArray.push(document.createElement("a"));
      intermediateArray[3].href = projectArray[i].page;
      intermediateArray[3].appendChild(document.createTextNode("Ir para Página"));
      intermediateArray.push(document.createElement("a"));
      intermediateArray[4].href = projectArray[i].source;
      intermediateArray[4].appendChild(document.createTextNode("Ir para o código"));

      pageArray.push(intermediateArray);
   }
   for(let i = 0; i<pageArray.length;i++){
      let cellDiv = document.createElement("div");
      cellDiv.append(pageArray[i][0], pageArray[i][1], pageArray[i][2], pageArray[i][3], pageArray[i][4]);
      projectsDiv.append(cellDiv);
   }
   changeDiv.append(h3El, projectsDiv);   
}

function loadBlogPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Sobre o Meu Blog"))

   let p1 = document.createElement("p");
   p1.appendChild(document.createTextNode(`Meu blog está hospedado na plataforma dev.to, onde 
   quase todas as semanas posto novos artigos por lá, principalmente na área da ciência da
   computação.`));

   let p2 = document.createElement("p");
   let a1 = document.createElement("a");
   a1.href = "https://dev.to/tttecnology";
   a1.appendChild(document.createTextNode("Confira clicando aqui!"));
   p2.appendChild(a1);

   changeDiv.append(h3El, p1, p2);

}

function loadContactsPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Contatos"));

   let p1 = document.createElement("p");
   p1.appendChild(document.createTextNode("Confira os meus contatos"));

   let pwpp = document.createElement("p");
   let awpp = document.createElement("a");
   awpp.href="https://wa.me/5531971732015";
   awpp.appendChild(document.createTextNode("Converse comigo no Whatsapp!"));
   pwpp.appendChild(awpp);

   let pLkdn = document.createElement("p");
   let aLkdn = document.createElement("a");
   aLkdn.appendChild(document.createTextNode("Conheça meu LinkedIn!"));
   aLkdn.href="https://www.linkedin.com/in/eron-alves-343684107/";
   pLkdn.appendChild(aLkdn);

   let pGitHub = document.createElement("p");
   let aGithub = document.createElement("a");
   aGithub.href="https://github.com/TTTecnology";
   aGithub.appendChild(document.createTextNode("Conheça meus repositórios no GitHub"));
   pGitHub.appendChild(aGithub);

   let pEmail = document.createElement("p");
   let aEmail = document.createElement("a");
   aEmail.href="mailto:eron.alves@rocketmail.com";
   aEmail.appendChild(document.createTextNode("Me mande um e-mail"));
   pEmail.appendChild(aEmail);


   changeDiv.append(h3El,pwpp, pLkdn, pGitHub, pEmail);

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
