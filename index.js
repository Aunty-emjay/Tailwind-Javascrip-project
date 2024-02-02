
let icon = document.querySelectorAll(".icon-container")
let flyInCard = document.querySelectorAll(".fly-in-menu")





icon.forEach(function(icon, index) {
   let flyInCardArray = flyInCard[index]
    icon.addEventListener("click", function(){
        if(flyInCardArray.classList.contains("fly-in-menu")){
            flyInCardArray.classList.remove("fly-in-menu")
            flyInCardArray.classList.add("fly-in-menu-new")
       }else if(flyInCardArray.classList.contains("fly-in-menu-new")){
            flyInCardArray.classList.remove("fly-in-menu-new")
            flyInCardArray.classList.add("fly-in-menu")
       }
    })
});









