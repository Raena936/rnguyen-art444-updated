// ALL YOUR JS GOES HERE

//hamburbur menu toggle to open on click
function menuButton() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

//close menu after clicking on tabs
 function closeMenu() {
    var x = document.getElementById("mobile-links");
        x.style.display = "none";
 }

// light and dark mode
 function darkMode() {

 }

function darkMode() {
    document.getElementById("ld-icon").src = "light-mode-svgrepo-com"; //switches svg to lightmode icon when in dark mode
    document.getElementById("fs-section").setAttribute("class", "fs-bg-dark-mode");
    document.getElementById("header").setAttribute("class", "header-dark-mode");
    
    document.getElementById("header-intro").setAttribute("class", "intro-header-dark-mode");
    document.getElementById("header-greet").setAttribute("class", "greet-line-dark-mode");
    document.getElementById("header-name").setAttribute("class", "my-name-dark-mode");
    document.getElementById("learn-button").setAttribute("class", "learn-more-button-dark-mode");
    document.getElementById("link-learn-more").setAttribute("class", "learn-button-dark-mode");
    document.getElementById("fs-titles").setAttribute("class", "semester-title-dark-mode");
    document.getElementById("fs-text").setAttribute("class", "semester-text-dark-mode");
    document.getElementById("me-info").setAttribute("class", "about-me-dark-mode");
    document.getElementById("faq-title").setAttribute("class", "faq-text-dark=mode");
    document.getElementById("question").setAttribute("class", "faq-question-dark-mode");
    document.getElementById("answer").setAttribute("class", "faq-answer-dark-mode");
    console.log("now it works mf");
    // var element = document.
    // if (document.querySelectorAll('dark-mode')) {

    // }
    
 
}



// if it has the StyleSheet, the setAttribute so it's dark-mode stylesheet
// if not, copy same thing and just have it do stylesheet


// const mainNav = document.getElementById("hamburg-menu");
// const navLink = mainNav.querySelectorAll('.main-nav');

//  for (let i = 0; i < navLink.length; i++) {
//      navLink[i].addEventListener('click', myFunction);
//  }

//  function alertMessage() {
//      alert("Hey you clicked the message, good job wew.")
// }

// const d = new Date();
// let currentTime = d.toLocaleTimeString();


const hour = new Date().getHours();

if (hour < 18) {

} else {

    document.getElementById("fs-section").setAttribute("class", "fs-bg-dark-mode");
    document.getElementById("header").setAttribute("class", "header-dark-mode");
    document.getElementById("header-intro").setAttribute("class", "intro-header-dark-mode");
    document.getElementById("header-greet").setAttribute("class", "greet-line-dark-mode");
    document.getElementById("header-name").setAttribute("class", "my-name-dark-mode");
    document.getElementById("learn-button").setAttribute("class", "learn-more-button-dark-mode");
    document.getElementById("link-learn-more").setAttribute("class", "learn-button-dark-mode");
    document.getElementById("fs-titles").setAttribute("class", "semester-title-dark-mode");
    document.getElementById("fs-text").setAttribute("class", "semester-text-dark-mode");
    document.getElementById("me-info").setAttribute("class", "text-dark-mode");
    document.getElementById("faq-title").setAttribute("class", "faq-text-dark=mode");
    document.getElementById("question").setAttribute("class", "faq-question-dark-mode");
    document.getElementById("answer").setAttribute("class", "faq-answer-dark-mode");
}



// footer copyright year thing
let currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear

// let tooYoung = currentYear - 17;
// let birthYear = new Date(2020);
// let birthMonth;
// let birthDay; 
//  if (birthYear > tooYoung || birthDay != null) {
//     alert("Hey this site is MDNI, get outttt")
//  }
     
//   else {
//      alert("Welcome aboard fellow degenerate")
//    }


// let user = { firstName: “Joanna”, birthYear: “____”}
// document.getElementById(‘name’).innerHTML = user.birthYear
