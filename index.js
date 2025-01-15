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
    long1.style.top = "80px"; // Atualiza o estilo diretamente
    long1.style.zIndex = "1";
});

long1.addEventListener("mouseover", () => {
    long1.style.top = "80px"; // Atualiza o estilo diretamente
    long1.style.zIndex = "1";
});


long1.addEventListener("mouseout", () => {
    long1.style.top = "10px"; // Restaura o estilo original
    long1.style.zIndex = "0";
});

home.addEventListener("mouseout", () => {
    long1.style.top = "10px"; // Restaura o estilo original
    long1.style.zIndex = "0";
});


about.addEventListener("mouseover", () => {
    long2.style.top = "80px"; // Atualiza o estilo diretamente
    long2.style.zIndex = "1";
});

long2.addEventListener("mouseover", () => {
    long2.style.top = "80px"; // Atualiza o estilo diretamente
    long2.style.zIndex = "1";
});


long2.addEventListener("mouseout", () => {
    long2.style.top = "0px"; // Restaura o estilo original
    long2.style.zIndex = "0";
});

about.addEventListener("mouseout", () => {
    long2.style.top = "0px"; // Restaura o estilo original
    long2.style.zIndex = "0";
});


shop.addEventListener("mouseover", () => {
    long3.style.top = "80px"; // Atualiza o estilo diretamente
    long3.style.zIndex = "1";
});

long3.addEventListener("mouseover", () => {
    long3.style.top = "80px"; // Atualiza o estilo diretamente
    long3.style.zIndex = "1";
});


long3.addEventListener("mouseout", () => {
    long3.style.top = "0px"; // Restaura o estilo original
    long3.style.zIndex = "0";
});

shop.addEventListener("mouseout", () => {
    long3.style.top = "0px"; // Restaura o estilo original
    long3.style.zIndex = "0";
});


language.addEventListener("mouseover", () => {
    long4.style.top = "80px"; // Atualiza o estilo diretamente
    long4.style.zIndex = "1";
});

long4.addEventListener("mouseover", () => {
    long4.style.top = "80px"; // Atualiza o estilo diretamente
    long4.style.zIndex = "1";
});


long4.addEventListener("mouseout", () => {
    long4.style.top = "0px"; // Restaura o estilo original
    long4.style.zIndex = "0";
});

language.addEventListener("mouseout", () => {
    long4.style.top = "0px"; // Restaura o estilo original
    long4.style.zIndex = "0";
});


contact.addEventListener("mouseover", () => {
    long5.style.top = "80px"; // Atualiza o estilo diretamente
    long5.style.zIndex = "1";
});

long5.addEventListener("mouseover", () => {
    long5.style.top = "80px"; // Atualiza o estilo diretamente
    long5.style.zIndex = "1";
});


long5.addEventListener("mouseout", () => {
    long5.style.top = "0px"; // Restaura o estilo original
    long5.style.zIndex = "0";
});

contact.addEventListener("mouseout", () => {
    long5.style.top = "0px"; // Restaura o estilo original
    long5.style.zIndex = "0";
});
