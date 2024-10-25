const btn=document.querySelector("#top-director")
const btn2=document.getElementsByClassName(".shop-section")


btn.addEventListener('click', 
 function scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
})


