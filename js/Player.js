class Player{
    constructor(){
        this.name= null
        this.positionX=0
        this.positionY=0
        this.score=0;
        this.life=200;
        this.rank=0
    }
    getPlayerCount(){
        database.ref("playerCount").on("value", data =>{
            playerCount=data.val()
        });
    }

}