var Viking = function (name, strength){
	this.name = name,
	this.health = 35,
	this.strength = strength,
	this.attack = function(othervik){
		console.log (this.name + " total health " + this.health)
		console.log (othervik.name + " total health " + othervik.health)
	}

	this.receive = function(othervik) {
		this.health = this.health - othervik.strength;
		othervik.health = othervik.health - this.strength;
		console.log(this.name + " has been attacked. " + this.health + " total health.");
		console.log(othervik.name + " has been attacked. " + othervik.health + " total health.");
	}
};

var viking1 = new Viking ("Viki1", 5)
var viking2 = new Viking ("Viki2", 4)
var viking3 = new Viking ("Viki3", 5)
var viking4 = new Viking ("Viki4", 4)
var viking5 = new Viking ("Viki5", 6)

var vikingsArray = [viking1, viking2, viking3, viking4, viking4];
var randomViking = vikingsArray[Math.floor((Math.random() * (vikingsArray.length - 1)) + 1)];

var randomHealth = Math.floor((Math.random() * (20-10)) + 10);
var randomStrength = Math.floor((Math.random() * (4-2)) + 2);

var Saxons = function (name){
	this.name = name,
	this.health = randomHealth
	this.strength = randomStrength
	this.attack = function(othersax){
		console.log (this.name + " total health " + this.health)
		console.log (othersax.name + " total health " + othersax.health)
		
	}

	this.receive = function(othersax) {
		this.health = this.health - othersax.strength;
		othersax.health = othersax.health - this.strength;
		console.log(this.name + " has been attacked. " + this.health + " total health.");
		console.log(othersax.name + " has been attacked.  " + othersax.health + " total health.");
	}
	
};

var sax1 = new Saxons ("sax1")
var sax2 = new Saxons ("sax2")
var sax3 = new Saxons ("sax3")
var sax4 = new Saxons ("sax4")
var sax5 = new Saxons ("sax5")
var sax6 = new Saxons ("sax6")
var sax7 = new Saxons ("sax7")
var sax8 = new Saxons ("sax8")
var sax9 = new Saxons ("sax9")
var sax10 = new Saxons("sax10")

var farmers = [sax1, sax2, sax3, sax4, sax4, sax5, sax6, sax7, sax8, sax9, sax10];
var randomSax = farmers[Math.floor((Math.random() * (farmers.length - 1)) + 1)];
var otherRandomSax = farmers[Math.floor((Math.random() * (farmers.length - 1)) + 1)];


console.log (randomSax);	


/*function pitTry (one, two){

while(one.health>two.strength && two.health>one.strength){

	one.attack(two);
	one.receive(two);
  }
	if (one.health > two.health) {
		console.log (one.name + " win");
		} else if (two.health > one.health){
		console.log (two.name + " win");
		}
};*/ 


function pitBattle (first, second, third){
		round = 0
		 	

	while(first.health>0 && second.health>0){
			round ++
			console.log ("\nRound: " + round)
			
			first.attack(second);
			first.receive(second);

		if (first.health<=0){
			console.log (first.name + " die")

			vikingsArray.splice(first,1);
		}
	}		
		
	for (var i = vikingsArray.length - 1; i >= 0; i--) {
		vikingsArray[i]
	}
	    if (first.health > second.health) {
			console.log (first.name + " win");
		} else if (second.health > first.health){
			console.log (second.name + " win");
	    }
	
		round ++
		console.log ("\nRound: " + round)
		


	while(first.health>0 && third.health>0){
	 
			first.attack(third);
			first.receive(third);
	}

		if (first.health > third.health) {
			console.log (first.name + " win");
		} else if (thrid.health > first.health){
			console.log (third.name + " win");
		}	
	
};



pitBattle(randomViking, randomSax, otherRandomSax);
 
//pitTry(viking1,viking2);
