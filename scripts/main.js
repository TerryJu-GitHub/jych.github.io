let myHeading=document.querySelector('h1');
myHeading.textContent="Hello World!";

let myImage=document.querySelector("img");
myImage.onclick=function () {
    let mySrc=myImage.getAttribute("src");

    if (mySrc==='images/chrome.jpg') {
        myImage.setAttribute("src","images/FireFox.jpg");
    } else {
        myImage.setAttribute("src","images/chrome.jpg");
    }
}