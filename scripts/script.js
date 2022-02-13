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
   let headerMainPage, headerMainPageContent, p1, p2, p3, p4, bodyDiv;

   changeDiv.innerHTML = "";

   // Definindo o Título da página principal

   headerMainPage = document.createElement("h3");
   headerMainPageContent = document.createTextNode("Bem vindo!");
   headerMainPage.append(headerMainPageContent);

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

   bodyDiv = document.createElement("div");
   bodyDiv.id = "mainText";
   bodyDiv.append(headerMainPage, p1, p2, p3, p4);

   let sideBarDiv = document.createElement("aside");
   let asideContent = [document.createElement("div"),
      document.createElement("div")];

   for(let i=0; i<asideContent.length;i++){
      asideContent[i].className = "sideBarDiv";
      if(i === 0){
         let title = document.createElement("h4");
         title.appendChild(document.createTextNode("Tecnologias Dominadas"));
         let body = document.createElement("div");
         let imgJsCssHtml = document.createElement("img");
         imgJsCssHtml.src = "images/learnedTec.png";
         imgJsCssHtml.alt = "HTML, CSS e Javascript";
         imgJsCssHtml.className = "icons";
         let imgCli = document.createElement("img");
         imgCli.src = "images/linuxCLI.png";
         imgCli.alt = "Linux Terminal";
         imgCli.className = "icons";
         body.append(imgJsCssHtml, imgCli);
         asideContent[i].append(title, body);
      } else if(i === 1){
         let title = document.createElement("h4");
         title.appendChild(document.createTextNode("Projetos"));
         let body = document.createElement("div");
         let projTitle = document.createElement("p");
         let projImg = document.createElement("img");

         function projects(title, img){
            this.title = title;
            this.img = img;
         }

         let projectArray = [new projects("Jogo da velha", "images/tikTakToe.png"),
            new projects("Relógio Digital", "images/digitalClock.png"),
            new projects("Gerador de Senhas", "images/geraSenha.png"),
            new projects("Livro de Receitas", "/images/recipeBook.png")
         ];

         asideContent[i].append(title);

         let intervalChange;

         function changing(){
            body.remove();
            projTitle.remove();
            projTitle = 0;
            projTitle = document.createElement("p");
            let j = Math.floor(Math.random()*projectArray.length);
            let textPTitle = projectArray[j].title;
            projTitle.appendChild(document.createTextNode(textPTitle));
            projImg.alt = projectArray[j].title;
            projImg.src = projectArray[j].img;
            projImg.className = "showroom";
            body.append(projTitle,projImg);
            asideContent[i].append(body);
         }

         changing();

         if (!intervalChange){
            intervalChange = setInterval(changing, 4000);
         }

         }
   }
   sideBarDiv.append(asideContent[0], asideContent[1]);
   let mainDiv = document.createElement("div");
   mainDiv.id = "mainDiv";
   mainDiv.append(bodyDiv, sideBarDiv)
   changeDiv.append(mainDiv);
   
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
      new projectCell("Jogo da velha", "images/tikTakToe.png","Projeto de Jogo da Velha feito inteiramente em C, basta abrir a página e clicar em RUN", "https://onlinegdb.com/7hQFBUJ0S","https://github.com/TTTecnology/Jogo-da-Velha"),
      new projectCell("Relógio Digital", "images/digitalClock.png","Relógio Digital moderno, imita a aparência de um rádio-relógio", "projects/digitalClock/index.html","https://github.com/TTTecnology/Digital-Clock"),
      new projectCell("Gerador de Senhas", "images/geraSenha.png","Gerador de senhas totalmente aleatório, baseado em charcodes e arrays" , "projects/geraSenha/index.html","https://github.com/TTTecnology/Password-Generator"),
      new projectCell("Livro de Receitas","/images/recipeBook.png","Livro de Receitas, projeto parte do currículo do TOP", "projects/recipeBook/index.html","https://github.com/TTTecnology/receitas")
   ]

   const pageArray = [];
      
   let projectArrayLength = projectArray.length;
   let projectsDiv = document.createElement("div");
   projectsDiv.id = "projectsDiv";
   for(let i = 0; i < projectArrayLength; i++){
      let intermediateArray = [];
      let hiddenLinksArray = [];
      intermediateArray.push(document.createElement("img"));
      intermediateArray[0].src=projectArray[i].img;
      intermediateArray.push(document.createElement("h4"));
      intermediateArray[1].appendChild(document.createTextNode(projectArray[i].name));
      intermediateArray.push(document.createElement("p"));
      intermediateArray[2].appendChild(document.createTextNode(projectArray[i].descr));
      intermediateArray.push(document.createElement("div"));
      intermediateArray[3].className = "hiddenLinks";

      hiddenLinksArray.push(document.createElement("a"));
      hiddenLinksArray[0].href = projectArray[i].page;
      hiddenLinksArray[0].appendChild(document.createTextNode("Ir para Página"));
      hiddenLinksArray.push(document.createElement("a"));
      hiddenLinksArray[1].href = projectArray[i].source;
      hiddenLinksArray[1].appendChild(document.createTextNode("Ir para o código"));

      for (let j = 0; j < 2; j++){
         intermediateArray[3].append(hiddenLinksArray[j])
      }

      pageArray.push(intermediateArray);
   }
   for(let i = 0; i<pageArray.length;i++){
      let cellDiv = document.createElement("div");
      cellDiv.className = "projectCell";
      cellDiv.append(pageArray[i][0], pageArray[i][1], pageArray[i][2], pageArray[i][3]);
      projectsDiv.append(cellDiv);
   }
   changeDiv.append(h3El, projectsDiv);
   let cells = document.getElementsByClassName("projectCell");
   for (let i = 0; i<cells.length; i++){
      cells[i].addEventListener("mouseover", ()=>{
         cells[i].getElementsByClassName("hiddenLinks")[0].style.visibility = "visible";
      })
      cells[i].addEventListener("mouseout", ()=>{
         cells[i].getElementsByClassName("hiddenLinks")[0].style.visibility = "hidden";
      })
   }
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
   let img1 = document.createElement("img");
   img1.src = "images/dev-to.png";
   let a1 = document.createElement("a");
   a1.href = "https://dev.to/tttecnology";
   a1.appendChild(img1);
   p2.appendChild(a1);
   p2.id = "devlink";

   changeDiv.append(h3El, p1, p2);

}

function loadContactsPage (){
   
   changeDiv.innerHTML = " ";

   //Definindo o Título
   let h3El = document.createElement("h3");
   h3El.appendChild(document.createTextNode("Contatos"));

   let pwpp = document.createElement("p");
   pwpp.className = "contactIcon";
   let awpp = document.createElement("a");
   let imgwpp = document.createElement("img");
   imgwpp.src = "images/whatsapp.png";
   awpp.href="https://wa.me/5531971732015";
   awpp.appendChild(imgwpp);
   pwpp.appendChild(awpp);

   let pLkdn = document.createElement("p");
   pLkdn.className = "contactIcon";
   let aLkdn = document.createElement("a");
   let imgLkdn = document.createElement("img");
   imgLkdn.src = "images/linkedin.png";
   aLkdn.appendChild(imgLkdn);
   aLkdn.href="https://www.linkedin.com/in/eron-alves-343684107/";
   pLkdn.appendChild(aLkdn);

   let pGitHub = document.createElement("p");
   pGitHub.className = "contactIcon";
   let aGithub = document.createElement("a");
   let imgGithub = document.createElement("img");
   imgGithub.src = "images/github.png";
   aGithub.href="https://github.com/TTTecnology";
   aGithub.appendChild(imgGithub);
   pGitHub.appendChild(aGithub);

   let pEmail = document.createElement("p");
   pEmail.className = "contactIcon";
   let aEmail = document.createElement("a");
   let imgEmail = document.createElement("img");
   imgEmail.src = "images/email.png";
   aEmail.href="mailto:eron.alves@rocketmail.com";
   aEmail.appendChild(imgEmail);
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
