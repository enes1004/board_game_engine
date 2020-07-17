class TileInfo{
  constructor(data) {
    this.data=data;
    console.log(this.data);
  }
}
class TileSet{
  constructor(data,settings={}) {
    this.load_from=data.load_from;
    var other_data=this.load_from?this.load_tile_info():data;
    this.tile_info=other_data.tiles;
    this.load_tiles();
  }
  load_tiles(){
    this.tiles={};
    this.tile_info.map((i)=>{this.tiles[i.name]=new Tile(i); if(i.is_first){this.tiles.start=new Tile(i);}});
  }
}
class Tile{
  constructor(data) {
    Object.keys(data).map((i)=>{this[i]=data[i]});
  }
  nextTile(tileSet){
    return(tileSet.tiles[this.next]);
  }
  prevTile(tileSet){
    return(tileSet.tiles[this.prev]);
  }

}

module.exports={
  TileInfo:TileInfo,
  TileSet:TileSet,
  Tile:Tile
};
