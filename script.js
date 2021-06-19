/*Menu javascript*/

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

/*Menu javascript completed*/

/*Preloader javascript*/
const logo = document.querySelectorAll("logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);

}
/*Preloader javascript*/