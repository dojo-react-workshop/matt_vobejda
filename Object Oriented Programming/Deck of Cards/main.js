'use strict'

function Deck(){

	this.deck=[];
	var suites=['s', 'c', 'd', 'h'];
	var cards=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k']
	for(var i=0;i<suites.length;i++){
		for(var x=0;x<cards.length;x++){
			this.deck.push(suites[i]+cards[x]);
		}
	}

}
function Player(name){

	this.name = name;
	this.hand = [];

}

Player.prototype.takeCard = function(player,deck){  //testing now...
	//take a card & put it in the players hand
	console.log(deck.deal(deck.deck));
	//var bob = player.hand.push(deck.deal(deck.deck));
	//console.log(bob);
	return player;
}

Player.prototype.discard = function(){
	//remove card from the hand ()
}

Deck.prototype.reset = function(){
	//just rebuild a new deck
	//replace deck using with new deck...
}

Deck.prototype.deal = function(array){  //works
	return array.pop();
}

Deck.prototype.shuffle = function(array){  //works
	var m = array.length;
	var t;
	var i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	//console.log(array);
	return array;
}

var deck1 = new Deck();
//console.log(deck1.deck);
deck1.shuffle(deck1.deck); //works
//console.log(deck1);
console.log(deck1.deal(deck1.deck)); //works

var player1 = new Player("Matt");

console.log(player1.takeCard(player1.name,deck1.deck));

