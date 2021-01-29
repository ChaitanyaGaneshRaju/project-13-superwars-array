const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers =[];

    // Instead of forloop use Map method
    // Code here
    var i=0
    players.map((player)=>{
        detailedPlayers.push({
            name:player,
            strength:getRandomStrength(),
            image:`images/super-${i++}.png`,
            type:getheroOrVillain()
        })
    })
    return detailedPlayers;
}

let getheroOrVillain=()=>{
    if(Math.round(Math.random()*1))
        return "hero"
    else
        return "villain"
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    players.filter(player=>{
        if(player.type==type){
            fragment+=`<div class="player">
            <img src="${player.image}"alt="">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
         </div>`
        }
    })

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}