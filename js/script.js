
const contenedorPrincipal = document.querySelector(".contenedor-principal");
const contenedor = document.querySelector("#contenedor-card");
const card = document.getElementsByClassName("card");

const figura = document.querySelector(".figura");
const nombreJefe = document.querySelector(".nombre-jefe");
const boton = document.querySelector(".btn");
const descripcion = document.querySelector(".descripcion");
const fondito2 = document.querySelector(".fondito2");
const fondito = document.querySelector(".fondito");

const heroSombra = document.querySelector(".hero-sombra");

function sombra() {
  heroSombra.style.zIndex = "-20";
}
setTimeout(sombra, 3000);


function transition(){
  card[0].style.transition = "none";
}


contenedor.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth/4 - e.pageX)/28;
    let yAxis = (window.innerHeight/4 - e.pageY)/78;
    card[0].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
   
});

//Animate In
contenedor.addEventListener("mouseenter", (e) => {
  setTimeout(transition,510);
   //Popout
   figura.style.transform = "translateZ(50px)";
   nombreJefe.style.transform = "translateZ(30px)";
   boton.style.transform = "translateZ(70px)";
   descripcion.style.transform = "translateZ(40px)";
   fondito.style.transform = "translateZ(35px)";
 });
 

//Animate Out

  contenedor.addEventListener("mouseleave", (e) => {
  card[0].style.transition = "all 0.5s ease";
  card[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  figura.style.transform = "translateZ(0px)";
  nombreJefe.style.transform = "translateZ(0px)";
  boton.style.transform = "translateZ(0px)";
  descripcion.style.transform = "translateZ(0px)";
  fondito2.style.transform = "translateZ(0px)";
  fondito.style.transform = "translateZ(0px)";
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