let gameDiv = document.getElementById("game");

/* ================= MENU ================= */

function showGame(name){
    if(name==="energy") startEnergyQuest();
    if(name==="reaction") startReactionLab();
    if(name==="life") startLifeBuilder();
}

/* ================= GAME 1 ENERGY QUEST ================= */

function startEnergyQuest(){

gameDiv.innerHTML=`
<h2>Energy Quest 🌱</h2>
<p>Choose healthy actions. Avoid mystery potion.</p>

<p id="energyText">Energy: 10</p>

<button onclick="chooseFood()">Eat Fruit 🍎</button>
<button onclick="chooseWater()">Drink Water 💧</button>
<button onclick="drinkPotion()">Try Mystery Potion ⚠️</button>

<br><br>
<button onclick="showGame('')">Back</button>
`;

let energy=10;

function updateEnergy(){
document.getElementById("energyText").innerText="Energy: "+energy;
}

window.chooseFood=function(){
energy+=2;
updateEnergy();
}

window.chooseWater=function(){
energy+=1;
updateEnergy();
}

window.drinkPotion=function(){
energy-=3;
alert("The mystery potion makes you feel slow and tired.");
updateEnergy();
}

}

/* ================= GAME 2 REACTION LAB ================= */

function startReactionLab(){

gameDiv.innerHTML=`
<h2>Reaction Lab 🧠</h2>
<p>Click the circle as fast as you can!</p>

<p id="reactionScore">Score: 0</p>

<div id="reactionTarget" class="reactionBox"></div>

<br>
<button onclick="showGame('')">Back</button>
`;

let score=0;

let box=document.getElementById("reactionTarget");

function moveBox(){
box.style.width="50px";
box.style.height="50px";

box.style.position="relative";

box.style.left=Math.random()*200+"px";
box.style.top=Math.random()*200+"px";
}

box.onclick=function(){
score++;
document.getElementById("reactionScore").innerText="Score: "+score;
moveBox();
}

moveBox();
}

/* ================= GAME 3 LIFE BUILDER ================= */

function startLifeBuilder(){

let day=1;
let happiness=10;

function render(){
gameDiv.innerHTML=`
<h2>Life Builder 🌟</h2>

<p>Day ${day}</p>
<p>Happiness: ${happiness}</p>

<button onclick="study()">Do Hobby 📚</button>
<button onclick="sport()">Play Sports ⚽</button>
<button onclick="party()">Go to Party 🎉</button>

<br><br>
<button onclick="showGame('')">Back</button>
`;
}

window.study=function(){
happiness+=1;
day++;
render();
}

window.sport=function(){
happiness+=2;
day++;
render();
}

window.party=function(){
happiness-=2;
alert("At the party, choosing alcohol can make goals harder.");
day++;
render();
}

render();
}
