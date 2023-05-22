
function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

init();


var counter1 = document.querySelector(".counter1");
var counter2 = document.querySelector(".counter2");

let counter = 0;
setInterval(()=>{
    if(counter == 1000){
        clearInterval();
    }else{
        counter+=1;
        counter1.textContent = counter + " " + "+";
        counter2.textContent = counter + " " + "+";
    }
})

var b1 = document.querySelector(".btn-1");
var changeColor = document.querySelector('h1 span'),
      colors      = ['red', 'green', 'blue'];
var colorIndex  = 0;

b1.addEventListener("click", function(){

    changeColor.style.Color = colors[colorIndex];      
    colorIndex = (colorIndex + 1) % colors.length

    gsap.to(".overlaylft",{
        x: -1000,
        duration: 3
    })

    gsap.to(".overlayrgt",{
        x: 1000,
        duration: 3
    })
    
    gsap.from(".nike-content",{
        y: 1000,
        duration: 2
    })

    gsap.from(".textslide",{
        x: 500,
        duration: 2
    })

    b1.style.display = `none`;
})