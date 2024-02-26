class Form{
    constructor(){
        this.instructions= createElement("h4");
        this.input=createInput("Enter your name ");

        this.playButton=createButton("Click to Start");

    }

    display(){
        this.instructions.html("Use arrow keys to navigate your spaceship and reach the end first. ")
        this.instructions.position(200,200);
        this.instructions.class("greeting");
        
        this.input.position(400,400);

        this.playButton.position(400,500);

        
    }



}