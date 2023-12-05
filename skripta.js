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