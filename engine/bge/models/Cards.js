class CardInfo{
  constructor(data) {
    this.data=data;
    console.log(this.data);
  }
}
class Deck{
  constructor(data,settings={}) {
    this.load_from=data.load_from;
    var other_data=this.load_from?this.load_deck_info():data;
    this.card_info=other_data.cards;
    this.load_cards();
    this.shuffle_pile();
  }
  load_cards(){
    this.cards={};
    this.pile=[];
    this.card_info.map((i)=>{this.cards[i.name]=new Card(i); this.pile.push(i.name);});
  }
  next(){
    return(this.cards[this.pile[0]]);
  }
  shuffle_pile(){
    this.pile.sort(function() { return(Math.random() - .5); });
  }
  draw_next_n(n=1,look_and_put=false){
    return([...Array(n).keys()].map((i)=>{var next=this.next();if(!look_and_put){this.discard_next();}if(!next){this.empty=true;}return(next);}).filter((i)=>(i)));
  }
  draw_next(look_and_put=false){
    return(this.draw_next_n(1,look_and_put)[0]);
  }
  discard_next(n=1,show=true){
    if(show){var next_n=this.draw_next_n(n,true);}
    var j=0;
    [...Array(n).keys()].map((i)=>{var discard=this.pile.shift();if(discard){j++;}});
    if(!show){var next_n="discarded "+j+"."+(j==0?" Pile is empty":"");}
    return(next_n);
  }
}
class Card{
  constructor(data) {
    Object.keys(data).map((i)=>{this[i]=data[i]});
  }
}

module.exports={
  CardInfo:CardInfo,
  Deck:Deck,
  Card:Card
};
