const hamburger=document.querySelector(".hamburger-menu");
const container=document.querySelector(".container");
const Serv=document.getElementById("Services");
const Prod=document.getElementById("Products");
var main=document.querySelector(".main");
var gotopbtn=document.querySelector(".gotopbtn");
const content=main.innerHTML;
var maincont=document.querySelector(".maincontainer");
maincont.style.background="url(bg.jpg) no-repeat top center / cover";
var home=0,services=0,products=0;
hamburger.addEventListener("click",function () {
        container.classList.toggle("active");
        if(services==1)
        {
            main.innerHTML=content;
            window.scrollTo(0,700);
            services=0;
        }
        if(home==1)
        {
            main.innerHTML=content;
            window.scrollTo(0,0);
            home=0;
        }
        if(products==1)
        {
            main.innerHTML=content;
            window.scrollTo(0,1400);
            products=0;
        }
        if(container.classList.value=="container active")
        {
            maincont.style.background="";
            maincont.style.animation="";
            gotopbtn.style.display="none";
        }
        setTimeout(function(){
            
            if(container.classList.value=="container")
            {
                if(!maincont.style.animation)
                maincont.style.animation="appear .5s forwards ease";
                else maincont.style.animation="";
                maincont.style.background="url(bg.jpg) no-repeat top center / cover";
                gotopbtn.style.display="";
            }
            
            console.log(container.classList.value);
            console.log(maincont.style.animation);
            console.log(gotopbtn.style.display);
            
        }, 200); 
    });

    function func_home(){
        main.innerHTML=content;
        home=1;
        services=0;
        products=0;
    }
    function func_services(){
        main.innerHTML=Serv.innerHTML;
        services=1;
        home=0;
        products=0;
    }
    function func_products(){
        main.innerHTML=Prod.innerHTML;
        services=0;
        home=0;
        products=1;
    }