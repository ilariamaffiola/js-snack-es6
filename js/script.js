//PRIMO SNACK
//creare un array di oggetti 
const bicycles = [
    //ogni ogni oggetto decriverà una bici da corsa 
    {
        //ogni bici deve avere due proprietà : nome e peso
        name: 'Trek Emonda SLR 9',
        weight: 8,
    } ,
    {
        name: 'Pinarello Dogma F12',
        weight: 7,
    } ,
    {
        name: 'Specialized S-Works Tarmac SL7',
        weight: 6,
    } ,
    {
        name: 'Cervélo R5',
        weight: 7,
    } ,
    {
        name: 'BMC Teammachine SLR01',
        weight: 7,
    }
];
console.log(bicycles);
//stampare la bici col peso minore
//dichiaro variabili che mi serviranno nel ciclo for per salvare il peso di ogni bicicletta e una che mi salverà il peso maggiore
//prendo il weight del primo array e lo assegno a maxWeight
let maxWeight = bicycles[0].weight;

let moreHeavy;
//console.log maxWeight);
//inizio un ciclo per verificare una ad una quale abbia il peso maggiore

for (let i = 0 ; i<bicycles.length ; i++){
    //verifico il peso maggiore
    if(maxWeight> bicycles[i].weight){
        moreHeavy= bicycles[0];
    }
    else{
         //se il peso della bici è minore del peso della bici in posizione i
        //allora la variabile moreHeavy avrà il valore dell'oggetto con il maggior peso 
        moreHeavy = bicycles[i];
        //e la mariabile maxWeight che prima era uguale al peso della bici in posizione 0 ora avrà il peso della bici che pesa di più
        maxWeight = bicycles[i].weight;
    }
}
console.log(moreHeavy);
console.log(moreHeavy.name);
//SECONDO SNACK
const footballTeam = [
    //ogni ogni oggetto decriverà un calciatore
    {
        //ogni giocatore deve avere tre proprietà : nome, punti fatti e falli subiti
        name: 'Juventus',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Milan',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Inter',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Napoli',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Fiorentina',
        score: 0,
        foul: 0,
    }
];
const generateRandomScore = () => {
    return Math.floor(Math.random()*102)+1;
}
for(let i=0 ; i<footballTeam.length ; i++){
    footballTeam[i].score= generateRandomScore();
}
const generateRandomfoul = () => {
    return Math.floor(Math.random()*50)+1;
}
for(let i=0 ; i<footballTeam.length ; i++){
    footballTeam[i].foul= generateRandomfoul();
}
console.log(footballTeam);
/*
POTEVO ANCHE FARLA COSI'
function generateRandomNumbers(min, max){
    return Math.floor(Math.random()*(max- min)+ 1) + min;
}
for(let i=0; i<teams.length; i++){
teams[i].points = generateRandomNumbers(20, 100);
teams[i].fouls = generateRandomNumbers(20, 50);
}
console.log(teams);
const newTeams=[];
for(let i=0; i<teams.length; i++){
    newTeams.push({
    name: teams[i].name,
    fouls: teams[i].fouls
    })
}
    
console.log(newTeams)
*/
//ora dobbiamo creare un nuovo array che contenga solo falli e punti
//dobbiamo creare una nuova variabile in cui inserire gli oggetti togliendo il nome
let scoresAndFouls = [];
//dobbiamo ciclare il nuovo array per inserire all'interno solo le proprietà score e faul
for(let i=0; i<footballTeam.length; i++){
    let checkscore = {};
    checkscore.score = footballTeam[i].score;
    checkscore.foul = footballTeam[i].foul;
    scoresAndFouls.push(checkscore);      
}
console.log(scoresAndFouls);



