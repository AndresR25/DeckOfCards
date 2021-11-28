class  Player{
    constructor(name){
        this.name=name;
        this.hand=[];
    }
    draw(deck){
        let drawCard = deck.deal();
        this.hand.push(drawCard);
    }
    discard(){
        this.hand.pop();
    }
}
class Card{
    constructor(suit, stringValue, valueNumber){
        this.suit =suit;
        this.stringValue =stringValue;
        this.valueNumber = valueNumber;
    }
    show(){
        console.log(`This card is a ${this.suit}`);
    }
}
class Deck {
    constructor(){
        this.cards =[];
        this.create();
        this.shuffle();
    }
    create(){
        var suits = ["hearts", "diamonds", "spades", "clubs"];
        const stringValues = ["Ace","Two", "Three", "Four", "Five", "Six", "Seven", "Eight","Nine", "Ten", "Jack", "Queens","King"];
        
        for(let i=0; i<suits.length;i++){
            for(let j=0; j<stringValues.length;j++){
                var card = new Card(suits[i], stringValues[j],j+1);
                this.cards.push(card);
            }
        }
    }
    shuffle(){
        for (let i=0; i<this.cards.length;i++){
            let s = this.cards[i];
            let Num = Math.floor(Math.random()* this.cards.length);
            this.cards[i] = this.cards[Num];
            this.cards[Num] = s;
        }
    }
    reset(){
        this.cards=[];
        this.create();
    }
    deal(){
        return this.cards.pop();
    }

}


var deck = new Deck();
console.log(deck.cards);



let dojo = new Player();
dojo.draw(deck);
dojo.draw(deck);
console.log(dojo.hand);
dojo.discard();
console.log(dojo.hand);