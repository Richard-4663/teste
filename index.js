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


home.addEventListener("mouseover", () => {
        long1.style.top = "60px"; 
    long1.style.zIndex = "1"; 
});

long1.addEventListener("mouseover", () => {
    long1.style.top = "60px"; 
    long1.style.zIndex = "1";
});


long1.addEventListener("mouseout", () => {
        long1.style.top = "-10px"; 
         long1.style.zIndex = "0";
});

home.addEventListener("mouseout", () => {
    setTimeout(() => {
        long1.style.top = "-10px"; 
    long1.style.zIndex = "0";
    }, 400);
    
});


about.addEventListener("mouseover", () => {
    long2.style.top = "60px"; 
    long2.style.zIndex = "1";
});

long2.addEventListener("mouseover", () => {
    long2.style.top = "60px"; 
    long2.style.zIndex = "1";
});


long2.addEventListener("mouseout", () => {
    long2.style.top = "-22px"; 
    long2.style.zIndex = "0";
});

about.addEventListener("mouseout", () => {
    setTimeout(() => {
        long2.style.top = "-22px"; 
    long2.style.zIndex = "0";
    }, 400);
});


shop.addEventListener("mouseover", () => {
    long3.style.top = "60px"; 
    long3.style.zIndex = "1";
});

long3.addEventListener("mouseover", () => {
    long3.style.top = "60px"; 
    long3.style.zIndex = "1";
});


long3.addEventListener("mouseout", () => {
    long3.style.top = "-10px"; 
    long3.style.zIndex = "0";
});

shop.addEventListener("mouseout", () => {
    setTimeout(() => {
        long3.style.top = "-10px"; 
    long3.style.zIndex = "0";
    }, 400);
});


language.addEventListener("mouseover", () => {
    long4.style.top = "60px"; 
    long4.style.zIndex = "1";
});

long4.addEventListener("mouseover", () => {
    long4.style.top = "60px"; 
    long4.style.zIndex = "1";
});


long4.addEventListener("mouseout", () => {
    long4.style.top = "-10px"; 
    long4.style.zIndex = "0";
});

language.addEventListener("mouseout", () => {
    setTimeout(() => {
        long4.style.top = "-10px"; 
    long4.style.zIndex = "0";
    }, 400);
});


contact.addEventListener("mouseover", () => {
    long5.style.top = "60px"; 
    long5.style.zIndex = "1";
});

long5.addEventListener("mouseover", () => {
    long5.style.top = "60px"; 
    long5.style.zIndex = "1";
});


long5.addEventListener("mouseout", () => {
    long5.style.top = "-10px"; 
    long5.style.zIndex = "0";
});

contact.addEventListener("mouseout", () => {
    setTimeout(() => {
        long5.style.top = "-10px"; 
    long5.style.zIndex = "0";
    }, 400);
});

function abrirLogin(){
    const login = document.getElementsByClassName("login-all")[0];

    login.show();
}

function fecharLogin(){
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
