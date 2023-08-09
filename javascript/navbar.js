const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const navContent = document.getElementById("sm-nav-content");

showBtn.addEventListener("click", function(){
    navContent.style.display = "block";
});

hideBtn.addEventListener("click", function(){
    navContent.style.display = "none";
});
