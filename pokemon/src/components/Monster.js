import React, { Component } from 'react';

class Monster extends Component {

  monsterTypes() {

    var monsterTypesArray = [];

    for (var i = 0 ; i < this.props.monsterData.types.length; i++) {

      monsterTypesArray.push(
        <div key={"key" + i}>{this.props.monsterData.types[i].type.name}</div>
      );
    
    }
     
    return monsterTypesArray;

  }

  render() {

    return (
      <div className="monster">
        <div className="monster-container">
        	<div className="monster-sprite">
        		<img src={require(`../imgs/sprites/${this.props.id}.png`)} alt={this.props.monsterData.name}/>
        	</div>
        	<div className="monster-name">
        		Name: {this.props.monsterData.name}
        	</div>
        	<div className="monster-number">
        		Pokémon Number: {this.props.monsterData.id}
        	</div>
        	<div className="monster-height">
        		Height: {this.props.monsterData.height}
        	</div>
        	<div className="monster-weight">
        		Weight: {this.props.monsterData.weight}
        	</div>
        	<div className="monster-types">
        		{this.monsterTypes()}
        	</div>
        </div>
      </div>
    );

  }
}

export default Monster;
