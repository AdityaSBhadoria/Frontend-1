var csr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){           //dets -> tell about mouse movement
    csr.style.left=dets.x+"px"
    blur.style.left=dets.x - 250 +"px"
    csr.style.top=dets.y+"px"
    blur.style.top=dets.y -250 +"px"
})

// var h4all = document.querySelector("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         csr.style.scale=3
//         csr.style.border="1px solid #fff"
//         csr.style.backgroundColor="transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         csr.style.scale=1
//         csr.style.border="0px solid #95C11E"
//         csr.style.backgroundColor="#95C11E"
//     })
// })



gsap.to("#nav",{
    backgroundColor:"#000" ,
    duration:1,
    height:"115px",

    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -20%",
        scrub:"true",
    }  
})
gsap.to("#main",{
    backgroundColor:"#000" ,  
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:"true",
    }  
})
gsap.from("#aboutus img , #aboutus_in",{
    y:90,
    opacity:0,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:4
        
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        // markers:"true",
        start:"top 55%",
        end:"top 45%",
        scrub:4, 

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        // markers:"true",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
         
    }
})


