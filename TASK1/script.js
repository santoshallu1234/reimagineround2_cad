var ab = gsap.timeline()



ab.from(".k2 ",{
    y:-200,
    duration:1,
    opacity:0.8,
	rotation:70,
    delay:1.1,
	scrub:0.5,
	

})
gsap.from(".k1 ",{
    x:-200,
    duration:1,
    opacity:0,
	rotation:70,
    delay:1.1,
	scrub:0.5,
	

})
ab.to(".k32nj",{
    x:400,
    duration:1,
    opacity:0,
	rotation:180,
	
	scrub:5,
})

gsap.from("body",{
	backgroundColor:"rgb(1, 121, 13)",
	duration:1,
	delay:1.1,
	
})
gsap.from("h2",{
	color:"white",
	duration:0.5,
	delay:1.1,
	
})
gsap.from(".sbar",{
	backgroundColor:"white",
	color:"black",
	duration:0.5,
	delay:1.1,
	width:"10vw"
	
})


gsap.from(".t1",{
	opacity:0,
	duration:0.5,
	delay:1.1,
	
	
})
gsap.to(".t2",{
	opacity:0,
	duration:0.5,
	delay:1.1,
	
	
})