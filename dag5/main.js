/*Øvelse 25 
Skriv et JavaScript program som henter 6 paragraphs elementer på 6 forskellige måder: 
getElementById, querySelector(#id), getElementsByTagname, querySelector(tagname),getElementsByClassName, querySelector(.className). 
Console.log elementer efter du har hentet dem og se dem i konsollen og reflekter over hvorfor det er nemmere at bruge querySelector.*/
let element1 = document.getElementById("id");
let element2 = document.querySelector("#id-query");
let element3 = document.getElementsByClassName("class");
let element4 = document.querySelector(".class-query");
let element5 = document.getElementsByTagName("h5");
let element6 = document.querySelector("h4");

console.log(element1.innerHTML);
console.log(element2.innerHTML);
console.log(element3[0].innerHTML);
console.log(element4.innerHTML);
console.log(element5[0].innerHTML);
console.log(element6.innerHTML);

/*Øvelse 25.2
Skriv et JavaScript program som henter et tomt paragraph tag i din HTML vha. en query selector.
Paragraph-tagget skal udfyldes med dit navn vha. JavaScript. 
Hint: innerText*/

let p = document.querySelector("p");
console.log(p.innerText += 'Malene');

/*Øvelse 26
Skriv et JavaScript program som henter en knap vha. klassen “button1”.  
Brug queryselector til at hente knappen. Når der klikkes på knappen, skal der eksekveres en funktion som
laver en alert ud på siden hvor der står “button1”.
Hint: document.querySelector(“.button1”);*/

let knap = document.querySelector(".button1");

let knapAlert = function(){
    alert('button1')
}

knap.addEventListener("click", knapAlert)

/*Øvelse 27 
Skriv et JavaScript program som henter en knap vha et ID “id1”. På knappen skal der stå “stikkontakt. 
Brug querySelector til at hente knappen. Når der klikkes på knappen, skal der eksekveres en funktion som 
ændrer baggrundsfarven i body-elementet fra sort til gul. 
Hint: document.querySelector(“#button1”)*/


let stikkontakt = document.querySelector("#id1");

stikkontakt.addEventListener("click",function(){
	document.body.style.backgroundColor = "yellow"});

/*Øvelse 28
Skriv et JavaScript program som henter fem ens class elementer i 5 forskellige tomme p-tags. 
Tilføj teksten knap1, knap2, knap3, knap4 og knap5 i hvert p-tag med JavaScript. Tilføj en 
EventListener på hvert p-tag. For hver gang der klikkes på en af knap skal den fortælle hvilket p-tags 
der klikkes på. 
Hint: document.querySelectorAll(“.classname”)
Hint: brug foreach metoden på elementer som du henter ind*/

/*let alleKnapper = document.querySelectorAll(".knapper");
let overTags = document.querySelector("#ptags");
let knapper = ["Knap 1","Knap 2","Knap 3","Knap 4","Knap 5"];

overTags.forEach(function(ptagsAlle){
    overTags.innerHTML += `<h3> ${ptagsAlle}</h3>`;
})

alleKnapper.forEach(function(knap1){
    knap1.addEventListener("click",function(){
        alert(knapper.innerHTML)  
    })
})*/


/*Øvelse 28.1 
Skriv et JavaScript program som har tre Div-elementer med samme klasse på hvert Div-element. 
Skriv “Rip” i første element, “Rap” i andet element og “Rup” i tredje element.
Hent alle tre Div elementer med querySelectorAll og loop igennem elementerne med en foreach. 
Tilføj en klasse på Rap-element, som ændrer stylingen. Tilføj en EventListener
på Rup element, som aktiverer en Alert hvor der står: “Rup”.*/

let ducks = document.querySelectorAll(".and")

ducks.forEach(function(duck){
    duck.addEventListener("click",function(){
        alert(duck.innerText)
    })
})

/*Øvelse 28.2
Skriv et JavaScript med et array af fem navne. Brug et forEach loop til at loope igennem arrayet, 
tilføj html og en klasse til hvert index arrayet og udskriv det i en tom Div på siden. 
Bestem selv hvordan klassen skal styles og hvilket element som skal udskrives i den tomme div.
Hint: TomDivElement += ´<p class=”className”> {$.index}</p>`;*/

let navne = ['Adam', 'Bob', 'Charlotte', 'Dani', 'Ella']



/*Øvelse 29
Skriv et JavaScript program som henter to tal fra to forskellige input-felter. Tilføj også en select-liste
med mulighederne for at vælge:  plus, minus og gange. Tilføj ydermere en knap med teksten “resultat”. 
Tilføj også en paragraph til at vise resultatet. 
Du har nok gættet det! - øvelsen går ud på at lave en lommeregner med de nævnte elementer.*/

let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");
let select = document.querySelector("#operation")

let resultat = document.querySelector("#resultat")

let button1 = document.querySelector("#button-1")

button1.addEventListener("click", function(){

    let værdi1 = Number(input1.value);
    let værdi2 = Number(input2.value);

        switch (select.value) {
            case "+":

            resultat.innerHTML = værdi1 + værdi2;

                break;
        
            case "-":

            resultat.innerHTML = værdi1 - værdi2;

                break;

            case "*":

            resultat.innerHTML = værdi1 * værdi2;

                break;
        }
})

/*Øvelse 30 (Regn ikke med den) 
Skriv et JavaScript program som fungerer som et trommesæt. Trommesættet skal fungere med tastaturet.
Link til billeder af trommer og trommelyde*/



/*Obligatorisk afflevering øvelse 
Derudover skal du lave en kreativ opgave hvor du benytter dig af 7 forskellige EventListeners efter eget valg. 
Det kunne være et "click event", "mouse over event" eller et "keydown event". 
Du bestemmer helt selv hvordan du bruger de forskellige events, hvad de skal påvirke og hvordan de skal se ud. 
Det eneste krav er: Du SKAL bruge 7 forskellige event listeners.*/

// 1
let event1 = document.querySelector(".h1");
let clickAlert = function(){
    alert('Dette er en addEventListener med click')
}
event1.addEventListener("click", clickAlert);

//2 (virker ikke under undersøg)
let event2 = document.querySelector(".h2");
let mouseOver = function(){
    document.body.style.backgroundColor = "green";
}
event2.addEventListener("mouseover", mouseOver);

//3 (virker ikke under undersøg)
let event3 = document.querySelector(".h3");
let mouseOut = function(){
    document.body.style.backgroundColor = "blue";
}
event3.addEventListener("mouseout", mouseOut);

//4
document.querySelector("#klip").addEventListener("cut", cutFunction);

function cutFunction() {
  alert("Du klippede i teksten");
}
//5
document.querySelector("#kopi").addEventListener("copy", copyFunction);

function copyFunction() {
  alert("Du kopiret teksten");
}
//6
document.querySelector("#name").addEventListener("keyup", keyUpFunction);

function keyUpFunction() {
  let nameUp = document.querySelector("#name");
  nameUp.value = nameUp.value.toUpperCase();
}

//7
document.querySelector("#change").addEventListener("input", inputFunction);

function inputFunction() {
  alert("Værdien i input fældtet er blevet ændret");
}
