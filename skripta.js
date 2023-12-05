document.addEventListener("DOMContentLoaded", function(){
    prikaz(recenzije);
});
function prikaz(recenzije){
    const recenzijeContainer=document.getElementById("rec");
    recenzije.forEach(recenzija => {
        const kartica=document.createElement("div");
        kartica.classList.add("recenzije-kartica");
        const usernames=document.createElement("p");
        usernames.innerText=recenzija.username;
        const comments=document.createElement("p");
        comments.innerText=recenzija.text;
        const grades=document.createElement("p");
        grades.innerText=zvezdice(recenzija.ocena);
        kartica.appendChild(usernames);
        kartica.appendChild(comments);
        kartica.appendChild(grades);
        recenzijeContainer.appendChild(kartica);
    });
}
function zvezdice(ocena){
    return "☆".repeat(ocena);
}
