var tablinks= document.getElementsByClassName("tabLinks");
var tabcontents= document.getElementsByClassName("tabContents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activeLink");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabname).classList.add("activeTab")
}

var sidebar = document.getElementById("sideBar");
var menubtn = document.getElementById("menuBtn")

function openMenu(){
    sidebar.style.right = "0";
    menubtn.style.opacity = "0%";
}

function closeMenu(){
    sidebar.style.right = "-200px";
    menubtn.style.opacity = "100%";
}