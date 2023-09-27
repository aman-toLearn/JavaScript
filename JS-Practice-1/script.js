var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){

    var rectangleLocation = rect.getBoundingClientRect();

var insiderectval = details.clientX - rectangleLocation.left;

if(insiderectval<rectangleLocation.width/2){
    // console.log("left");

    var redcolor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insiderectval);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:Power4,
    });


}

else{
    // console.log("right")

    var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderectval);
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease:Power4,
    });
}


    // console.log(rect.getBoundingClientRect())



    // console.log("Hey");
});

rect.addEventListener("mouseleave",function(){
 
    //gsap was overriding it 
    // rect.computedStyleMap.backgroundColor = "white";

    gsap.to(rect,{
        backgroundColor:"white"
    })

});


// console.log(gsap.utils.mapRange(0,250,255,0,250));