import React, { Component } from 'react';

class Search extends Component {
	doSearch(){
		var query=this.refs.searchInput.getDOMNode().value;
		this.props.doSearch(query);
	}

	render(){
		return (
			<div className="search">
				<input type="text" ref="searchInput" placeholder="Pokemon Search" value={this.props.query} onChange={this.doSearch}/>
			</div>
		);		
	}
};

export default Search;