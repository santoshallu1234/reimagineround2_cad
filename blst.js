function dom(){
    const canvas = document.querySelector(".blast2 canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `./dairymilk2/Image1.jpg
./dairymilk2/Image2.jpg
./dairymilk2/Image3.jpg
./dairymilk2/Image4.jpg
./dairymilk2/Image5.jpg
./dairymilk2/Image6.jpg
./dairymilk2/Image7.jpg
./dairymilk2/Image8.jpg
./dairymilk2/Image9.jpg
./dairymilk2/Image10.jpg
./dairymilk2/Image11.jpg
./dairymilk2/Image12.jpg
./dairymilk2/Image13.jpg
./dairymilk2/Image14.jpg
./dairymilk2/Image15.jpg
./dairymilk2/Image16.jpg
./dairymilk2/Image17.jpg
./dairymilk2/Image18.jpg
./dairymilk2/Image19.jpg
./dairymilk2/Image20.jpg
./dairymilk2/Image21.jpg
./dairymilk2/Image22.jpg
./dairymilk2/Image23.jpg
./dairymilk2/Image24.jpg
./dairymilk2/Image25.jpg
./dairymilk2/Image26.jpg
./dairymilk2/Image27.jpg
./dairymilk2/Image28.jpg
./dairymilk2/Image29.jpg
./dairymilk2/Image30.jpg
./dairymilk2/Image31.jpg
./dairymilk2/Image32.jpg
./dairymilk2/Image33.jpg
./dairymilk2/Image34.jpg
./dairymilk2/Image35.jpg
./dairymilk2/Image36.jpg
./dairymilk2/Image37.jpg
./dairymilk2/Image38.jpg
./dairymilk2/Image39.jpg
./dairymilk2/Image40.jpg
./dairymilk2/Image41.jpg
./dairymilk2/Image42.jpg
./dairymilk2/Image43.jpg
./dairymilk2/Image44.jpg
./dairymilk2/Image45.jpg
./dairymilk2/Image46.jpg
./dairymilk2/Image47.jpg
./dairymilk2/Image48.jpg
./dairymilk2/Image49.jpg
./dairymilk2/Image50.jpg
./dairymilk2/Image51.jpg
./dairymilk2/Image52.jpg
./dairymilk2/Image53.jpg
./dairymilk2/Image54.jpg
./dairymilk2/Image55.jpg
./dairymilk2/Image56.jpg
./dairymilk2/Image57.jpg
./dairymilk2/Image58.jpg
./dairymilk2/Image59.jpg
./dairymilk2/Image60.jpg
./dairymilk2/Image61.jpg
./dairymilk2/Image62.jpg
./dairymilk2/Image63.jpg
./dairymilk2/Image64.jpg
./dairymilk2/Image65.jpg
./dairymilk2/Image66.jpg
./dairymilk2/Image67.jpg
./dairymilk2/Image68.jpg
./dairymilk2/Image69.jpg
./dairymilk2/Image70.jpg
./dairymilk2/Image71.jpg
./dairymilk2/Image72.jpg
./dairymilk2/Image73.jpg
./dairymilk2/Image74.jpg
./dairymilk2/Image75.jpg
./dairymilk2/Image76.jpg
./dairymilk2/Image77.jpg
./dairymilk2/Image78.jpg
./dairymilk2/Image79.jpg
./dairymilk2/Image80.jpg
./dairymilk2/Image81.jpg
./dairymilk2/Image82.jpg
./dairymilk2/Image83.jpg
./dairymilk2/Image84.jpg
./dairymilk2/Image85.jpg
./dairymilk2/Image86.jpg
./dairymilk2/Image87.jpg
./dairymilk2/Image88.jpg
./dairymilk2/Image89.jpg
./dairymilk2/Image90.jpg
./dairymilk2/Image91.jpg
./dairymilk2/Image92.jpg
./dairymilk2/Image93.jpg
./dairymilk2/Image94.jpg
./dairymilk2/Image95.jpg
./dairymilk2/Image96.jpg
./dairymilk2/Image97.jpg
./dairymilk2/Image98.jpg
./dairymilk2/Image99.jpg
./dairymilk2/Image100.jpg
./dairymilk2/Image101.jpg
./dairymilk2/Image102.jpg
./dairymilk2/Image103.jpg
./dairymilk2/Image104.jpg
./dairymilk2/Image105.jpg
./dairymilk2/Image106.jpg
./dairymilk2/Image107.jpg
./dairymilk2/Image108.jpg
./dairymilk2/Image109.jpg
./dairymilk2/Image110.jpg
./dairymilk2/Image111.jpg
./dairymilk2/Image112.jpg
./dairymilk2/Image113.jpg
./dairymilk2/Image114.jpg
./dairymilk2/Image115.jpg
./dairymilk2/Image116.jpg
./dairymilk2/Image117.jpg
./dairymilk2/Image118.jpg
./dairymilk2/Image119.jpg
./dairymilk2/Image120.jpg
./dairymilk2/Image121.jpg
./dairymilk2/Image122.jpg
./dairymilk2/Image123.jpg
./dairymilk2/Image124.jpg
./dairymilk2/Image125.jpg
./dairymilk2/Image126.jpg
./dairymilk2/Image127.jpg
./dairymilk2/Image128.jpg
./dairymilk2/Image129.jpg
./dairymilk2/Image130.jpg
./dairymilk2/Image131.jpg
./dairymilk2/Image132.jpg
./dairymilk2/Image133.jpg
./dairymilk2/Image134.jpg
./dairymilk2/Image135.jpg
./dairymilk2/Image136.jpg
./dairymilk2/Image137.jpg
./dairymilk2/Image138.jpg
./dairymilk2/Image139.jpg
./dairymilk2/Image140.jpg
./dairymilk2/Image141.jpg
./dairymilk2/Image142.jpg
./dairymilk2/Image143.jpg
./dairymilk2/Image144.jpg
./dairymilk2/Image145.jpg
./dairymilk2/Image146.jpg
./dairymilk2/Image147.jpg
./dairymilk2/Image148.jpg
./dairymilk2/Image149.jpg
./dairymilk2/Image150.jpg
./dairymilk2/Image151.jpg
./dairymilk2/Image152.jpg
./dairymilk2/Image153.jpg
./dairymilk2/Image154.jpg
./dairymilk2/Image155.jpg
./dairymilk2/Image156.jpg
./dairymilk2/Image157.jpg
./dairymilk2/Image158.jpg
./dairymilk2/Image159.jpg
./dairymilk2/Image160.jpg
./dairymilk2/Image161.jpg
./dairymilk2/Image162.jpg
./dairymilk2/Image163.jpg
./dairymilk2/Image164.jpg
./dairymilk2/Image165.jpg
./dairymilk2/Image166.jpg
./dairymilk2/Image167.jpg
./dairymilk2/Image168.jpg
./dairymilk2/Image169.jpg
./dairymilk2/Image170.jpg
./dairymilk2/Image171.jpg
./dairymilk2/Image172.jpg
./dairymilk2/Image173.jpg
./dairymilk2/Image174.jpg
./dairymilk2/Image175.jpg
./dairymilk2/Image176.jpg
./dairymilk2/Image177.jpg
./dairymilk2/Image178.jpg
./dairymilk2/Image179.jpg
./dairymilk2/Image180.jpg
./dairymilk2/Image181.jpg
./dairymilk2/Image182.jpg
./dairymilk2/Image183.jpg
./dairymilk2/Image184.jpg
./dairymilk2/Image185.jpg
./dairymilk2/Image186.jpg
./dairymilk2/Image187.jpg
./dairymilk2/Image188.jpg
./dairymilk2/Image189.jpg
./dairymilk2/Image190.jpg
./dairymilk2/Image191.jpg
./dairymilk2/Image192.jpg
./dairymilk2/Image193.jpg
./dairymilk2/Image194.jpg
./dairymilk2/Image195.jpg
./dairymilk2/Image196.jpg
./dairymilk2/Image197.jpg
./dairymilk2/Image198.jpg
./dairymilk2/Image199.jpg
./dairymilk2/Image200.jpg
./dairymilk2/Image201.jpg
./dairymilk2/Image202.jpg
./dairymilk2/Image203.jpg
./dairymilk2/Image204.jpg
./dairymilk2/Image205.jpg
./dairymilk2/Image206.jpg
./dairymilk2/Image207.jpg
./dairymilk2/Image208.jpg
./dairymilk2/Image209.jpg
./dairymilk2/Image210.jpg
./dairymilk2/Image211.jpg
./dairymilk2/Image212.jpg
./dairymilk2/Image213.jpg
./dairymilk2/Image214.jpg
./dairymilk2/Image215.jpg
./dairymilk2/Image216.jpg
./dairymilk2/Image217.jpg
./dairymilk2/Image218.jpg
./dairymilk2/Image219.jpg
./dairymilk2/Image220.jpg
./dairymilk2/Image221.jpg
./dairymilk2/Image222.jpg
./dairymilk2/Image223.jpg
./dairymilk2/Image224.jpg
./dairymilk2/Image225.jpg
./dairymilk2/Image226.jpg
./dairymilk2/Image227.jpg
./dairymilk2/Image228.jpg
./dairymilk2/Image229.jpg
./dairymilk2/Image230.jpg
./dairymilk2/Image231.jpg
./dairymilk2/Image232.jpg
./dairymilk2/Image233.jpg
./dairymilk2/Image234.jpg
./dairymilk2/Image235.jpg
./dairymilk2/Image236.jpg
./dairymilk2/Image237.jpg
./dairymilk2/Image238.jpg
./dairymilk2/Image239.jpg
./dairymilk2/Image240.jpg
./dairymilk2/Image241.jpg
./dairymilk2/Image242.jpg
./dairymilk2/Image243.jpg
./dairymilk2/Image244.jpg
./dairymilk2/Image245.jpg
./dairymilk2/Image246.jpg
./dairymilk2/Image247.jpg
./dairymilk2/Image248.jpg
./dairymilk2/Image249.jpg
./dairymilk2/Image250.jpg
./dairymilk2/Image251.jpg
./dairymilk2/Image252.jpg
./dairymilk2/Image253.jpg
./dairymilk2/Image254.jpg
./dairymilk2/Image255.jpg
./dairymilk2/Image256.jpg
./dairymilk2/Image257.jpg
./dairymilk2/Image258.jpg
./dairymilk2/Image259.jpg
./dairymilk2/Image260.jpg
./dairymilk2/Image261.jpg
./dairymilk2/Image262.jpg
./dairymilk2/Image263.jpg
./dairymilk2/Image264.jpg
./dairymilk2/Image265.jpg
./dairymilk2/Image266.jpg
./dairymilk2/Image267.jpg
./dairymilk2/Image268.jpg
./dairymilk2/Image269.jpg
./dairymilk2/Image270.jpg
./dairymilk2/Image271.jpg
./dairymilk2/Image272.jpg
./dairymilk2/Image273.jpg
./dairymilk2/Image274.jpg
./dairymilk2/Image275.jpg
./dairymilk2/Image276.jpg
./dairymilk2/Image277.jpg
./dairymilk2/Image278.jpg
./dairymilk2/Image279.jpg
./dairymilk2/Image280.jpg
./dairymilk2/Image281.jpg
./dairymilk2/Image282.jpg
./dairymilk2/Image283.jpg
./dairymilk2/Image284.jpg
./dairymilk2/Image285.jpg
./dairymilk2/Image286.jpg
./dairymilk2/Image287.jpg
./dairymilk2/Image288.jpg
./dairymilk2/Image289.jpg
./dairymilk2/Image290.jpg
./dairymilk2/Image291.jpg
./dairymilk2/Image292.jpg
./dairymilk2/Image293.jpg
./dairymilk2/Image294.jpg
./dairymilk2/Image295.jpg
./dairymilk2/Image296.jpg
./dairymilk2/Image297.jpg
./dairymilk2/Image298.jpg
./dairymilk2/Image299.jpg
./dairymilk2/Image300.jpg
`;
  return data.split("\n")[index]
  }
  var aja = "../dairymilk/Image1.jpg"
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        trigger:".blast2",
        
        // start:"bottom 100%",
        
        
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  
  
  }
  
  dom()
  
  

