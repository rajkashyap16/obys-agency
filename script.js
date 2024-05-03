// document.body.style.cursor = 'none';
function locomotiveScrollTrigger() {

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    delay: 0.5,
  });

  // loader timer function
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let timer = document.querySelector("#line1-part1 h5");
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          timer.innerHTML = grow++;
        } else {
          timer.innerHTML = grow;
        }
      }, 25);
    },
  });
  tl.to(".line h2 ", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.from("#crsr", {
    opacity: 0,
  });

  tl.from("#nav ", {
    opacity: 0,
  });
  tl.from("#hero1 h1 ,#hero2 h1, #hero3 h2 , #hero3 h3 , #hero4 h1", {
    y: 120,
    stagger: 0.2,
  });
  tl.from("#hero1", {
  opacity:0
  },"-=1.2");
}
function cursorAnimation() {
Shery.mouseFollower(
  {
  skew : true , 
  ease : "cubic-bezier(0.23 ,1 , 0 .320 , 1)",
  duration : 1,
}
)
 let videoContainer = document.querySelector("#video-container")

 videoContainer.addEventListener("mouseenter" , function(){
 videoContainer.addEventListener("mousemove"  , function(dets){
  gsap.to(".mousefollower" , {
    opacity: 0
  })
  gsap.to("#video-cursor", {
    left: dets.x - 550, 
    y : dets.y - 200
  })
 })
})
videoContainer.addEventListener("mouseleave", function(){
  gsap.to(".mousefollower" ,{
  display: "initial"
  
  });
  gsap.to("#video-cursor" , {
    top: "-10%",
    left: "80%",
    position : "absolute"

  } )
})
   
}
function sheryAnimation(){
  Shery.makeMagnet("#nav-part2 h4 , #nav svg , .hero");
  
  Shery.imageEffect(".image-div", {
    style:5 , 
    config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749429015005},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.24,"range":[0,2]},"discard_threshold":{"value":0.39,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":22.9,"range":[0,100]}},
    gooey : true
  })
}


locomotiveScrollTrigger();
loadingAnimation();
cursorAnimation();
sheryAnimation()