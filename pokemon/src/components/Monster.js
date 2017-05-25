import React, { Component } from 'react';

// class Moves extends Component {

//   movesList() {

//     return <div className="movesList"> pokemon.pokemon.moves </div>

//   }

// }

class Monster extends Component {

  monsterTypes() {
    var typeEmpty = " ";
    var monsterTypesArray = [];

    for (var i = 0 ; i < this.props.monsterData.types.length; i++) {

      monsterTypesArray.push(
        <div key={"key" + i}>{this.props.monsterData.types[i].type.name}</div>
      );
    
    }
    // if (this.props.monsterData.types.length == 1) {
    //   monsterTypesArray.push(
    //     <div key={"key" + 1}> {typeEmpty} </div>
    //    ); 
    // }
     
    return monsterTypesArray;

  }

  render() {

    return (
      <div className = "master-container">
        <div className="moves-container">
          <div className="movesList"> {this.props.monsterData.name} </div>
        </div>
        <div className="monster">
          <div className="monster-container">
          	<div className="sprite-container">
              <div className="monster-sprite">
            		<img src={require(`../imgs/sprites/${this.props.id}.png`)} alt={this.props.monsterData.name}/>
            	</div>
            </div>
          	<div className="monster-info-container">
              <div className="monster-info-left clearfix">
                <div className="monster-name">
              		{this.props.monsterData.name}
              	</div>
              	<div className="monster-number">
              		No: {this.props.monsterData.id}
              	</div>
              </div>
              <div className="monster-info-right clearfix">
              	<div className="monster-height">
              		Ht: {this.props.monsterData.height}ft
              	</div>
              	<div className="monster-weight">
              		Wt: {this.props.monsterData.weight}lbs
              	</div>
              </div>
              <div className="monster-info-bottom clearfix">
              	<div className="monster-types">
              		{this.monsterTypes()}
              	</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Monster;




// random(num) {
  
}
