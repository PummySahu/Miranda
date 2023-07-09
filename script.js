function loco(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
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
    
    loco();
    
    
    
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 5,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


var tl = gsap.timeline()
tl.to("#main1",{
  y:"100vh",
  scale:0.4,
  duration:0
})
tl.to("#main1",{
  y:"40vh",
  duration:1,
  delay:1
})
tl.to("#main1",{
  y:"70vh",
  rotate:720,
  scale:.5,
  duration:0.7
})
tl.to("#main1",{
  y:"0vh",
  // rotate:360,
  scale:1,
  duration:0.7
})
