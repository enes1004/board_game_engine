var json_path="./tiles.json";
var tiles_json=require(json_path);
console.log(tiles_json);
const {TileInfo, TileSet, Card} =require("../../models/Tiles.js");
var tiles=new TileInfo(tiles_json);
console.log(tiles.data.tile_sets[0].tiles);
var tileSet=new TileSet(tiles.data.tile_sets[0]);
console.log(tileSet);
console.log(tileSet.tiles.start);
console.log(tileSet.tiles.start.nextTile(tileSet));
