const home = document.getElementById("home");
const about = document.getElementById("about");
const shop = document.getElementById("virtual");
const language = document.getElementById("language");
const contact = document.getElementById("contact");
const long1 = document.getElementsByClassName("long1")[0];
const long2 = document.getElementsByClassName("long2")[0];
const long3 = document.getElementsByClassName("long3")[0];
const long4 = document.getElementsByClassName("long4")[0];
const long5 = document.getElementsByClassName("long5")[0];

function showMenu(menuItem) {
  menuItem.style.display = "block";
}

function hideMenu(menuItem) {
    menuItem.style.display = "none";
}

home.addEventListener("mouseover", () =>
     showMenu(long1));
home.addEventListener("mouseout", () =>
     hideMenu(long1));

long1.addEventListener("mouseover", () =>
    showMenu(long1));
long1.addEventListener("mouseout", () =>
    hideMenu(long1));


about.addEventListener("mouseover", () => 
    showMenu(long2));
about.addEventListener("mouseout", () => 
    hideMenu(long2));

long2.addEventListener("mouseover", () =>
    showMenu(long2));
long2.addEventListener("mouseout", () =>
    hideMenu(long2));


shop.addEventListener("mouseover", () => 
    showMenu(long3));
shop.addEventListener("mouseout", () => 
    hideMenu(long3));
long3.addEventListener("mouseover", () =>
    showMenu(long3));
long3.addEventListener("mouseout", () =>
    hideMenu(long3));


language.addEventListener("mouseover", () => 
    showMenu(long4));
language.addEventListener("mouseout", () => 
    hideMenu(long4));

long4.addEventListener("mouseover", () =>
    showMenu(long4));
long4.addEventListener("mouseout", () =>
    hideMenu(long4));

contact.addEventListener("mouseover", () => 
    showMenu(long5));
contact.addEventListener("mouseout", () => 
    hideMenu(long5));

long5.addEventListener("mouseover", () =>
    showMenu(long5));
long5.addEventListener("mouseout", () =>
    hideMenu(long5));




function abrirLogin() {
  const login = document.getElementsByClassName("login-all")[0];

  login.show();

}

function fecharLogin() {
  const login = document.getElementsByClassName("login-all")[0];

  login.close();

}


const video = document.getElementById("input");
const nav = document.getElementsByClassName("nav")[0];
const longs = document.getElementsByClassName("longs")[0];
const menu = document.getElementsByClassName("menu")[0];
const nav_fix = document.getElementsByClassName("nav-fix")[0];

video.addEventListener("loadeddata", () => {
    video.play();
})


video.addEventListener("ended", () => {
    video.style.opacity = "0";
    video.style.pointerEvents = "none";
    nav.style.opacity = 1;
    nav_fix.style.opacity = 1;
    
    setTimeout(() => {
        menu.style.opacity = 1;
        longs.style.opacity = 1;
    }, 1000);
});
