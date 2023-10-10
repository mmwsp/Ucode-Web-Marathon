module.exports.Team = class Team{
    constructor(id, Avengers){
        this.id = id;
        this.Avengers = Avengers;
    }
    
    clone(){
        return new Team(this.id, this.Avengers);
    }

    battle(damage){
        this.losses = 0;
        let killed = [];

        for(let x = 0; x <this.Avengers.length; x++){
            this.Avengers[x].hp -= damage.damage;
            if(this.Avengers[x].hp <= 0){
                killed.push(x);
                this.losses += 1;
            }
        }
        for (let i = killed.length -1; i >= 0; i--){
            this.Avengers = this.Avengers.splice(killed[i],1);
        }
    }

    calculateLosses(clonedTeam){
        if(this.losses !== 0){
            console.log(`In this battle we lost ${this.losses} Avengers`);
           
        } else {
            console.log('We haven\'t lost anyone in this battle!');
        }
    }
}