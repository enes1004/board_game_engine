class BoardReact extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    var top_tiles=[];
    var bottom_tiles=[];
    var left_tiles=[];
    var right_tiles=[];
    var j=0;
    Object.values(this.props.tileSet.tiles).map((i)=>{
      if(this.props.lang && this.props.lang!="default"){}else{ var ui=i.name;}
      if(j<this.props.config.top_bottom_tile){
        top_tiles.push(<div className="tile" style={{width:(100/this.props.config.top_bottom_tile).toString()+"%"}}>{ui}</div>);
      }
      else if (j<this.props.config.top_bottom_tile+this.props.config.right_left_tile-2) {
        right_tiles.push(<div className="tile">{ui}</div>);
      }
      else if (j<this.props.config.top_bottom_tile*2+this.props.config.right_left_tile-2) {
        bottom_tiles.push(<div className="tile" style={{width:(100/this.props.config.top_bottom_tile).toString()+"%"}}>{ui}</div>);
      }
      else if (j<this.props.config.top_bottom_tile*2+this.props.config.right_left_tile*2-4){
        left_tiles.push(<div className="tile">{ui}</div>);
      }
      j++;
    });

    return(
      <div style={{
          /* width: 1080; */
          position: "relative",
          height: (15*(this.props.config.right_left_tile)+0.1*(this.props.config.right_left_tile-1)).toString()+"em",
          border: "solid"
      }}>
      <div class="tile_grid not_bottom">
      <div class="tile_grid top">
        {top_tiles}
      </div>
      <div class=" tile_grid middle">
        <div class="tile_grid right">{right_tiles}</div>
        <div class="tile_grid middle_center"></div>

        <div class="tile_grid left">{left_tiles}</div>
      </div>
      </div>
      <div class="tile_grid bottom" style={{width:"initial",marginTop:"0.2em"}}>
        {bottom_tiles}
      </div>
      </div>
  );
  }


}
