const viewButton = document.querySelector("#changeMode");
const openSide = document.querySelector("#menu");
const closeSide = document.querySelector("#close");
const sideBar = document.querySelector(".sidebar");


viewButton.addEventListener("click",darkMode)

function darkMode()
{
    document.body.classList.toggle("darkMode");
}

function changeSideBar()
{
    sideBar.classList.toggle("active");
}

openSide.addEventListener("click", changeSideBar)
closeSide.addEventListener("click", changeSideBar);
