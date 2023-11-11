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