let tablinks = document.getElementsByClassName('tab-links');
let tabcontents=document.getElementsByClassName('tab-contents');

function opentab(tabName){
     for(tablink of tablinks){
        tablink.classList.remove("active-link");
     }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabName).classList.add("active-tab");
}

let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

//scroll button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}