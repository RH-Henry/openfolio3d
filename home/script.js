
window.addEventListener("scroll", function(){
        element=document.getElementById('fade')
        element.style.opacity = (window.scrollY-(element.getBoundingClientRect().top+window.innerHeight/10))*0.0009;
        element=document.getElementById('fade2')
        element.style.opacity = (window.scrollY-(element.getBoundingClientRect().top+window.innerHeight/1.5))*0.0009;
    });