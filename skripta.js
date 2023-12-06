document.addEventListener("DOMContentLoaded", function(){
    prikaz(recenzije);
    const ras=document.getElementById("ras");
    ras.addEventListener("click", sortirajR);
    const op=document.getElementById("op");
    op.addEventListener("click", sortirajO)
});
function prikaz(recenzije){
    const recenzijeContainer=document.getElementById("recenzije-container");
    recenzijeContainer.innerHTML = "";
    recenzije.forEach(recenzija => {
        const kartica=document.createElement("div");
        kartica.classList.add("recenzije-kartica");
        const usernames=document.createElement("p");
        usernames.innerText=recenzija.username;
        const comments=document.createElement("p");
        comments.innerText=recenzija.text;
        const zvezdeContainer=document.createElement("div");
        zvezdeContainer.innerHTML = zvezdice(recenzija.ocena);
        kartica.appendChild(usernames);
        kartica.appendChild(zvezdeContainer);
        kartica.appendChild(comments);
        recenzijeContainer.appendChild(kartica);
        kartica.classList.add("kartica");
        usernames.classList.add("usernames");
        comments.classList.add("comments");
        zvezdeContainer.classList.add("zvezdice");
    });
}
function zvezdice(ocena){
    const zvezda = '<span class="fa fa-star"></span>'.repeat(ocena);
    return zvezda;
}
function sortirajR(){
    const kopijaRecenzija = [...recenzije];
    const rastuci = kopijaRecenzija.sort((a, b)=>b.ocena-a.ocena);
    prikaz(rastuci);
}
function sortirajO(){
    const kopijaRecenzija = [...recenzije];
    const opadajuci = kopijaRecenzija.sort((a, b)=>a.ocena-b.ocena);
    prikaz(opadajuci);
}
