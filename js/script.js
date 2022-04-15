
const contenedorPrincipal = document.querySelector(".contenedor-principal");
const contenedor1 = document.querySelector(".cont-card1");
const contenedor2 = document.querySelector(".cont-card2");
const contenedor3 = document.querySelector(".cont-card3");
const contenedor4 = document.querySelector(".cont-card4");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3= document.querySelector(".card3");
const card4 = document.querySelector(".card4");

const figura1 = document.querySelector(".figura1");
const figura2 = document.querySelector(".figura2");
const figura3 = document.querySelector(".figura3");
const figura4 = document.querySelector(".figura4");

const nombreJefe1 = document.querySelector(".nombre-jefe1");
const nombreJefe2 = document.querySelector(".nombre-jefe2");
const nombreJefe3 = document.querySelector(".nombre-jefe3");
const nombreJefe4 = document.querySelector(".nombre-jefe4");

const boton1 = document.querySelector(".btn1");
const boton2 = document.querySelector(".btn2");
const boton3 = document.querySelector(".btn3");
const boton4 = document.querySelector(".btn4");

const descripcion1 = document.querySelector(".descripcion1");
const descripcion2 = document.querySelector(".descripcion2");
const descripcion3 = document.querySelector(".descripcion3");
const descripcion4 = document.querySelector(".descripcion4");

const fonditoa2 = document.querySelector(".fdta2");
const fonditob2 = document.querySelector(".fdtb2");
const fonditoc2 = document.querySelector(".fdtc2");
const fonditod2 = document.querySelector(".fdtd2");

const fonditoa1 = document.querySelector(".fdta1");
const fonditob1 = document.querySelector(".fdtb1");
const fonditoc1 = document.querySelector(".fdtc1");
const fonditod1 = document.querySelector(".fdtd1");

const heroSombra = document.querySelector(".hero-sombra");
const titulo = document.querySelector(".titulo");




function sombra() {
  heroSombra.style.zIndex = "-20";
  heroSombra.style.display = "none";
}
setTimeout(sombra, 3000);

function tituloAparecer() {
  titulo.style.opacity = "1";  
}
setTimeout(tituloAparecer, 2000);




/********************** card1 **************************/

contenedor1.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth/4 - e.pageX)/28;
    let yAxis = (window.innerHeight- e.pageY)/68;
    card1.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;   
});

//Animate In
contenedor1.addEventListener("mouseenter", (e) => {
  function transition(){
    card1.style.transition = "none";  }
  setTimeout(transition,510);
   //Popout
   figura1.style.transform = "translateZ(50px)";
   nombreJefe1.style.transform = "translateZ(30px)";
   boton1.style.transform = "translateZ(70px)";
   descripcion1.style.transform = "translateZ(40px)";
   fonditoa1.style.transform = "translateZ(35px)";
 });
//Animate Out
  contenedor1.addEventListener("mouseleave", (e) => {
  card1.style.transition = "all 0.5s ease";
  card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  figura1.style.transform = "translateZ(0px)";
  nombreJefe1.style.transform = "translateZ(0px)";
  boton1.style.transform = "translateZ(0px)";
  descripcion1.style.transform = "translateZ(0px)";  
  fonditoa1.style.transform = "translateZ(0px)";
}); 

/********************** card2 **************************/

contenedor2.addEventListener("mousemove", (e)=>{  
    let xAxis = (window.innerWidth/1.5 - e.pageX)/28;
    let mutilplicadorY = 1;
    if(e.pageY>1200){
      mutilplicadorY  = 2;  }
    console.log("y = " + e.pageY); 
  console.log("x = " + e.pageX);
    let yAxis = (window.innerHeight* mutilplicadorY - e.pageY)/68;
    card2.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;   
});

//Animate In
contenedor2.addEventListener("mouseenter", (e) => {
  function transition(){
    card2.style.transition = "none";  }
  setTimeout(transition,510);
   //Popout
   figura2.style.transform = "translateZ(50px)";
   nombreJefe2.style.transform = "translateZ(30px)";
   boton2.style.transform = "translateZ(70px)";
   descripcion2.style.transform = "translateZ(40px)";
   fonditob1.style.transform = "translateZ(35px)";
 });
//Animate Out
  contenedor2.addEventListener("mouseleave", (e) => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  figura2.style.transform = "translateZ(0px)";
  nombreJefe2.style.transform = "translateZ(0px)";
  boton2.style.transform = "translateZ(0px)";
  descripcion2.style.transform = "translateZ(0px)";  
  fonditob1.style.transform = "translateZ(0px)";
}); 

/********************** card3 **************************/

contenedor3.addEventListener("mousemove", (e)=>{
  let xAxis = (window.innerWidth/4 - e.pageX)/28;
  let mutilplicadorY = 2;
  if(e.pageY>1900){
    mutilplicadorY  = 3;  }
  console.log("y = " + e.pageY); 
  console.log("x = " + e.pageX);
    let yAxis = (window.innerHeight*mutilplicadorY - e.pageY)/68;
    card3.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;   
});

//Animate In
contenedor3.addEventListener("mouseenter", (e) => {
  function transition(){
    card3.style.transition = "none";  }
  setTimeout(transition,510);
   //Popout
   figura3.style.transform = "translateZ(50px)";
   nombreJefe3.style.transform = "translateZ(30px)";
   boton3.style.transform = "translateZ(70px)";
   descripcion3.style.transform = "translateZ(40px)";
   fonditoc1.style.transform = "translateZ(35px)";
 });
//Animate Out
  contenedor3.addEventListener("mouseleave", (e) => {
  card3.style.transition = "all 0.5s ease";
  card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  figura3.style.transform = "translateZ(0px)";
  nombreJefe3.style.transform = "translateZ(0px)";
  boton3.style.transform = "translateZ(0px)";
  descripcion3.style.transform = "translateZ(0px)";  
  fonditoc1.style.transform = "translateZ(0px)";
}); 


/********************** card4 **************************/

contenedor4.addEventListener("mousemove", (e)=>{
  let mutilplicadorY = 2;
  if(e.pageY>2400){
    mutilplicadorY  = 4;
  }
  let xAxis = (window.innerWidth/1.5 - e.pageX)/38; 
  let yAxis = (window.innerHeight*mutilplicadorY- e.pageY)/68;
    card4.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;   
});

//Animate In
contenedor4.addEventListener("mouseenter", (e) => {
  function transition(){
    card4.style.transition = "none";  }
  setTimeout(transition,510);
   //Popout
   figura4.style.transform = "translateZ(50px)";
   nombreJefe4.style.transform = "translateZ(30px)";
   boton4.style.transform = "translateZ(70px)";
   descripcion4.style.transform = "translateZ(40px)";
   fonditod1.style.transform = "translateZ(35px)";
 });
//Animate Out
  contenedor4.addEventListener("mouseleave", (e) => {
  card4.style.transition = "all 0.5s ease";
  card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  figura4.style.transform = "translateZ(0px)";
  nombreJefe4.style.transform = "translateZ(0px)";
  boton4.style.transform = "translateZ(0px)";
  descripcion4.style.transform = "translateZ(0px)";  
  fonditod1.style.transform = "translateZ(0px)";
}); 











/*
contenedorPrincipal.addEventListener("mouseover", e => {
  if (e.target.classList.contains('contenedor-card')) {
    e.target.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("card")) {
        e.target.addEventListener("mousemove", (e) => {
          let xAxis = (500  - e.pageX) / 28;
          let yAxis = (500  - e.pageY) / 48;
          e.currentTarget.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        })
        console.log(e.target.childNodes);
        e.target.childNodes[1].style.transform = "translateZ(50px)";
        e.target.childNodes[3].style.transform = "translateZ(30px)";
        e.target.childNodes[5].style.transform = "translateZ(70px)";
       /*  figura.style.transform = "translateZ(50px)";
        
        nombreJefe.style.transform = "translateZ(30px)";
        boton.style.transform = "translateZ(70px)";
        descripcion.style.transform = "translateZ(40px)";
        fondito.style.transform = "translateZ(35px)"; */
/*
    
        setTimeout(transition, 1000);
      }
    });
    e.target.addEventListener("mouseover", (e) => {      
      if (e.target.classList.contains("card")){
        e.target.addEventListener("mouseleave", e=>{
          e.currentTarget.style.transition = "all 0.5s ease";
          e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
               //Popback
      figura.style.transform = "translateZ(0px)";
      nombreJefe.style.transform = "translateZ(0px)";
      boton.style.transform = "translateZ(0px)";
      descripcion.style.transform = "translateZ(0px)";
      fondito2.style.transform = "translateZ(0px)";
      fondito.style.transform = "translateZ(0px)";
        })
      }      

 
    });


    function transition() {
      card[0].style.transition = "none";
      for(i=0;i<card.length;i++){
      card[i].style.transition = "none";
    }
    }
  }
});



*/