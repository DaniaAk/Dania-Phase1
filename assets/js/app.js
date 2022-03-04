

 const heroText = document.querySelectorAll('.hero-text');
const injectedStyle = document.getElementById('injectedStyle')
document.onmousemove = function(e) { 
    var x = e.clientX; 
    var y = e.clientY; 
    document.getElementById('bomb-icon').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('bomb-icon').style.marginTop  = y * -1 / 465 +"px";

      document.getElementById('thunderIcon-icon2').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('thunderIcon-icon2').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('thunderIcon-icon1').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('thunderIcon-icon1').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('hero-text').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('hero-text').style.marginTop  = y * -1 / 65 +"px";

       document.getElementById('screen-icon').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('screen-icon').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('blinking-eye-section').style.marginLeft  = x * +1 / 45 +"px";
    document.getElementById('blinking-eye-section').style.marginTop  = y * +1 / 45 +"px";

       document.getElementById('dasktop-video-section').style.marginLeft  = x * -1 / 35 +"px";
    document.getElementById('dasktop-video-section').style.marginTop  = y * -1 / 35 +"px";

    //  document.getElementById('screen-last').style.marginLeft  = x * -1 / 35 +"px";
    // document.getElementById('screen-last').style.marginTop  = y * -1 / 35 +"px";

     document.getElementById('brain-item').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('brain-item').style.marginTop  = y * -1 / 65 +"px";


    document.getElementById('text-block1').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('text-block1').style.marginTop  = y * -1 / 65 +"px";

       document.getElementById('text-block2').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('text-block2').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('text-block3').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('text-block3').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('text-block4').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('text-block4').style.marginTop  = y * -1 / 65 +"px";

    document.getElementById('plus-sign1').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('plus-sign1').style.marginTop  = y * -1 / 65 +"px";

       document.getElementById('plus-sign2').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('plus-sign2').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('plus-sign3').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('plus-sign3').style.marginTop  = y * -1 / 65 +"px";

     document.getElementById('small-box1').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('small-box1').style.marginTop  = y * -1 / 65 +"px";

    document.getElementById('small-box2').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('small-box2').style.marginTop  = y * -1 / 65 +"px";

       document.getElementById('tablet-video-section').style.marginLeft  = x * -1 / 35 +"px";
    document.getElementById('tablet-video-section').style.marginTop  = y * -1 / 35 +"px";


 document.getElementById('tablet-video1').style.marginLeft  = x * -1 / 35 +"px";
    document.getElementById('tablet-video1').style.marginTop  = y * -1 / 35 +"px";
     
document.getElementById('circle').style.marginLeft  = x * -1 / 35 +"px";
    document.getElementById('circle').style.marginTop  = y * -1 / 35 +"px";
    document.getElementById('video4').style.marginLeft  = x * -1 / 35 +"px";
    document.getElementById('video4').style.marginTop  = y * -1 / 35 +"px";

     document.getElementById('qoute-img').style.marginLeft  = x * -1 / 65 +"px";
    document.getElementById('qoute-img').style.marginTop  = y * -1 / 65 +"px";
 
    
}  
   const heroTextWidth = heroText[0].clientWidth
const heroTextHeight = heroText[0].clientHeight

injectedStyle.innerHTML = `
.thunder-icon{
    left: calc(50% - ${0.5 * heroTextWidth + 40}px);
    top: calc(50% - ${0.5 * heroTextHeight - 60}px);
}
.thunder-icon-2{
    left: calc(50% - ${0.5 * heroTextWidth + 18}px);
    top: calc(50% - ${0.5 * heroTextHeight - 66}px);
}
.bomb-icon{
    left: calc(50% + ${0.5 * heroTextWidth - 50}px);
    top: calc(50% + ${0.5 * heroTextHeight - 48}px);
}
`


const smallMessagebox = document.querySelector(".small-messagebox")
const barcodeIcon = document.querySelector(".barcode-icon")

barcodeIcon.onmouseover = () => {
    smallMessagebox.style.display = "block"
    barcodeIcon.backgroundColor = "#8d8d8d";
}

barcodeIcon.onmouseleave = () => {
    smallMessagebox.style.display = "none"
    barcodeIcon.backgroundColor = "#000000";
}

// transition animation script
let initialCount = 0;
// const animParentCont = document.querySelectorAll('.animated-parent-container');
// const animChildCont = document.querySelectorAll('.animated-child-container');
const selectorBox = document.querySelectorAll('.selector-box');
const navItemElem = document.querySelectorAll('.nav-item-elem');
const selectorBoxCircle = document.querySelectorAll('.selector-box-circle');

const currentSlide = (e) => {
    console.log("Current", e)
    selectorBoxCircle[e] && (selectorBoxCircle[e].style.backgroundColor = "#ffffff")
    animParentCont[e].style.zIndex = `89`
    animParentCont[e] && (animParentCont[e].style.transform = `translateX(0%)`)
    animChildCont[e] && (animChildCont[e].style.transform = `translateX(0%)`)
}
const previousSlide = (e) => {
    for (i = (e - 2); i >= 0; i--) {
        console.log("Previous", i)
        selectorBoxCircle[i].style.backgroundColor = "transparent"
        animParentCont[i].style.zIndex = `0`
        animParentCont[i] && (animParentCont[i].style.transform = `translateX(0%)`)
        animChildCont[i] && (animChildCont[i].style.transform = `translateX(0%)`)
    }
}
const nextSlide = (e) => {
    for (i = e; i <= animParentCont.length; i++) {
        console.log("next", i)
        selectorBoxCircle[i].style.backgroundColor = "transparent"
        animParentCont[i] && (animParentCont[i].style.transform = `translateX(-100%)`)
        animChildCont[i] && (animChildCont[i].style.transform = `translateX(100%)`)
    }
}
currentSlide(initialCount)
const combineSlideFunction = (value) => {
    previousSlide(value)
    currentSlide(value - 1)
    nextSlide(value)
}
let click = (e) => {
    e.onclick = () => {
        let value = e.getAttribute('value');
        combineSlideFunction(value)
    }
}
for (var e of selectorBox) {
    click(e);
};
for (var e of navItemElem) {
    click(e);
};

const psychologicalSpace = document.querySelector('.psychological-space')
const socialmediaSpace = document.querySelector('.socialmedia-space')

const sectionElements = document.querySelector('.section-elements')
const vid = document.querySelector('.video')
const video1 = document.querySelector('#video1')
const video2 = document.querySelector('#video2')

const secElemWidth = sectionElements.clientWidth
const secElemHeight = sectionElements.clientHeight
const vidWidth = vid.clientWidth
const vidHeight = vid.clientHeight
// relative position of video
const relXPosVid = (secElemWidth - vidWidth) / 2
// const relYPosVid = (secElemHeight - vidHeight) / 2

const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    psychologicalSpace.style.transform = `translate(${mouseX - relXPosVid}px, ${mouseY - 30}px)`;
    socialmediaSpace.style.transform = `translate(${mouseX - relXPosVid}px, ${mouseY - 30}px)`;

}

window.addEventListener('mousemove', moveCursor)

