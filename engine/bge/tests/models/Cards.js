var json_path="./cards.json";
var cards_json=require(json_path);
console.log(cards_json);
const {CardInfo, Deck, Card} =require("../../models/Cards.js");
var cards=new CardInfo(cards_json);
console.log(cards.data.decks[0].cards);
var deck=new Deck(cards.data.decks[0]);
console.log(deck.draw_next().name);
console.log(deck.draw_next_n(3).map((i)=>i.name));
console.log(deck.discard_next(3,true).map((i)=>i.name));
console.log(deck.discard_next(1,false));