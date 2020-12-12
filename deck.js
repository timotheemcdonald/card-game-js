const SUITS = ["♠", "♥", "♦", "♣"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "🧝", "🧝‍♀️", "🧝‍♂️"]

class Deck {
    constructor(cards,){
        this.cards = []
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}