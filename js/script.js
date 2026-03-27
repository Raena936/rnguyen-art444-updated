// ALL YOUR JS GOES HERE

//hamburbur menu toggle
function myFunction() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


const mainNav = document.getElementById("hamburg-menu");
const navLink = mainNav.querySelectorAll('.main-nav');

 for (let i = 0; i < navLink.length; i++) {
     navLink[i].addEventListener('click', myFunction);
 }

 function alertMessage() {
     alert("Hey you clicked the message, good job wew.")
}