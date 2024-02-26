
var spaceshipImg1, spaceship1, bgImg, spaceshipImg2, spaceship2
var database, gameState
var form, player, game
var playerCount

function preload(){
    bgImg= loadImage("./assets/background.jpeg")
    spaceshipImg1= loadImage("./assets/spaceship1.png")
    spaceshipImg2= loadImage("./assets/spaceship2.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    database=firebase.database();
    game= new Game();
    game.start();
}

function draw(){
    background(bgImg);
    form.display();
    
}