import React, { Component } from 'react';
//import pokemon from '../json/pokemon.json';

class List extends Component {
	constructor(props){
		super(props);
		this.state = {
			species : [],
			fetched : false,
			loading : false,
		};
	}
	componentWillMount(){
		this.setState({
			loading: true
		});
		fetch('pokemon').then(res=>res.json()).then(response=>{
			this.setState({
				species : response.results,
				loading : true,
				fetched : true
			});
		});
	}

	render(){
		const {fetched, loading, species} = this.state;
		let content;
		console.log(JSON.stringify(species));
		if (fetched) {
			content = <div className="monster-list">{species.map((pokemon,index)=><pokemon key={pokemon.name} id={index+1}pokemon={pokemon.pokemon}/>)}</div>;
		}else if (loading && !fetched) {
			content = <p> PokéDex Loading...</p>;
		}
		else{
			content = <div/>;
		}
		return <div>
			{content}
		</div>;
	}

}

export default List;