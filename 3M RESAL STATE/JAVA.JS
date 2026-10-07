function toggleMenu(menuId){

    let menu = document.getElementById(menuId);

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{

        document.querySelectorAll(".submenu").forEach(function(item){
            item.style.display = "none";
        });

        menu.style.display = "block";
    }
}

window.onclick = function(event){

    if(!event.target.matches('.menu-btn')){

        document.querySelectorAll(".submenu").forEach(function(item){
            item.style.display = "none";
        });

    }

}