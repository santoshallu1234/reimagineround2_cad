
gsap.from(".page3 .fimg",{
    duration:2,
    y:300,
    scrollTrigger: {
        trigger: ".page3",
        
        start:"50%  50%",
           end: "180% 50%",
        scrub:1,
      }
   
    
})   


//const scroll = new LocomotiveScroll({
 //   el: document.querySelector('.main'),
  //  smooth: true
 // });

 //lenis 
 

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.box').appendChild(items[0]);
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.box').prependChild(items[8]);
})


var roller = gsap.timeline({scrollTrigger:{
    trigger:'.page15',
    scrub:1,
    

}})

roller.from("#one",{
    /* top:"-27%",*/
    x:-400,
   top:"35%",

 },'a')
 roller.from("#two",{
    /* top:"-27%",*/
    x:400,
    

 },'a')
 
 var mcard = gsap.timeline({scrollTrigger:{
    trigger:'.main',
   
    start:"100% 50%",
    end:"200% 50%",
    scrub:1,
   

}});

mcard.to(".maincad",{
   /* top:"-27%",*/
   x:2000,
},'a');
mcard.to(".maincad",{
    /* top:"-27%",*/
   opacity:0 ,
   zIndex:"-1",
 },'b');







var post = gsap.timeline({scrollTrigger:{
    trigger:'.page25',
  
    start:"0% 50%",
    end:"100% 50%",
    scrub:1,
   

}});

post.to(".bposter",{
   /* top:"-27%",*/
    height:"30vh",
},'a')
post.to("#p1",{
    top:"36%",
},'a')
post.to("#p2",{
    top:"130%",
},'a')

post.to("#p1",{
    
    height:'65vh',
    width:'65%'
},'b')
post.to("#p2",{
    top:"42%",
},'b')
post.to("#p3",{
    top:"130%",
},'b')

post.to("#p3",{
    top:"50%",
},'c')
post.to("#p2",{
    width:"70%",
    height:"70vh"
},'c')
post.to("#p1",{
    top:"42%",
},'c')

gsap.from(".poster img",{
    scale:1,
    delay:1,
    duration:2,
   " box-shadow":"none",
    scrollTrigger: {
        trigger: "#p1",
        
      }
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
} 

requestAnimationFrame(raf)


