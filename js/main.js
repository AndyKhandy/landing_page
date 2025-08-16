const viewButton = document.querySelector("#changeMode");


viewButton.addEventListener("click",darkMode)

function darkMode()
{
    document.body.classList.toggle("darkMode");
}