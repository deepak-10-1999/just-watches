function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()
var menuicon = document.querySelector("#menu");
var cut = document.querySelector("#cut");
var navlinks = document.querySelector(".nav-links");


menuicon.addEventListener("click",function(){
   navlinks.style.top= 0;
})
cut.addEventListener("click",function(){
    navlinks.style.top = "-100%";
})

var cur = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
  cur.style.top = `${dets.y}px`
  cur.style.left = `${dets.x}px`
})
gsap.to(".log",{
  rotate:360,
  duration:100
})
const text = document.querySelector('.log p');
text.innerHTML = text.innerText.split("").map(
  (char,i) =>
  `<span style="transform:rotate(${i * 9.8}deg)">${char}</span>`
).join("")
var kuchbhi = document.querySelector("#kuch-bhi")
var bhi = document.querySelector("#bhi")
var kuch= document.querySelector("#kuch")

kuchbhi.addEventListener("mouseenter",function(){
  bhi.style.top = "0"
  kuch.style.top = "-200px"
  bhi.style.backgroundColor = "darkgray"


})
kuchbhi.addEventListener("mouseleave",function(){
  bhi.style.top = "200px"
  kuch.style.top = "0"
  bhi.style.color = "black"


})

gsap.to("#page2 #P1",{
  x: "0vw",
  width:"80vw",
  delay: 5,
  // duration:2,
  ScrollTrigger: {
    trigger:"#page2 P1",
    scroler:"#main",
    markers:true,
    start:"top 50%",
    end:"top 10%",
    scrub:3
  }
})
gsap.from("#P2 h1", {
  rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#P2 h1",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 3
  }
})
gsap.to(".P15 h1",{
  x:"-40%",
  duration:10,
  
  scrollTrigger:{
    trigger:".P15 h1",
    scroller:"#main",
    start: "top 80%",
    end: "top -40%",
    
    scrub: 3

  }
})

var loader = gsap.timeline()


  loader.to("#L",{
    x:"-30%",
    
  })
  .to("#L1", {
    x:"50%"
  })
  loader.to("#L h1",{
    y:200,
  })
  
  .to(".loader1 h1", {
    y:"-200px",
    duration: 0.8,
    delay: 0.5
  })
  .to("#loader", {
    y: "-100vh",
    duration: 0.8
  })
  
