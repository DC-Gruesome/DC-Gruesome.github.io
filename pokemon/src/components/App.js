import React, { Component } from 'react';
import pokemon from '../json/pokemon.json';
import Header from './Header';
import List from './List';
import Monster from './Monster';
import Search from './Search';
import '../css/App.css';

class App extends Component {

  render() {
    
    console.log(pokemon.pokemon[0]);

    return (
      <div className="App">
      
        <Header />

        <Search />
{/*
        <Monster id={1} monsterData={pokemon.pokemon[0]} />	
        <Monster id={2} monsterData={pokemon.pokemon[1]} /> 
        <Monster id={3} monsterData={pokemon.pokemon[2]} /> 
        <Monster id={4} monsterData={pokemon.pokemon[3]} /> 
        <Monster id={5} monsterData={pokemon.pokemon[4]} /> 
        <Monster id={6} monsterData={pokemon.pokemon[5]} /> 
*/}
        <List />
      
      </div>

    );

  }
}

export default App;
