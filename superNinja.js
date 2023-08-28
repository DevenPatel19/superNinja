class Ninja {
    constructor(name, health=90, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name} Health = ${this.health}, Speed = ${this.speed}, Strength = ${this.strength}` )
        return this;
    }
    drinkSake() {
        this.health +=10
        console.log(`Health increased by 10 to ${this.health}`)
        return this;
    }
}

// const ninja1 = new Ninja("Hyabusa"); ###OUTPUTS FOR NINJA.JS ASSIGNMENT
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        
    }

}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
