
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Cat extends React.Component {
 
	
	//    adoptStatus ()
	// {  this.setState ({ } changeAdoptStatus()) ; 
    // }
 

	
	render() {
 
		console.log (this.props.btnlabel); 
		
	
  	return (<ListGroup> 
        <ListGroupItem color="info"><h2> {this.props.name} </h2></ListGroupItem>
        <ListGroupItem color="info">special_ability: { this.props.special_ability }</ListGroupItem>
        <ListGroupItem color="info"><img src={this.props.img} alt="" height="70" width="70"/></ListGroupItem>
        <ListGroupItem color="danger">{this.props.adoptedText}</ListGroupItem>
				<ListGroupItem>	<button onClick={this.props.changeAdoptStatus}>{this.props.btnlabel}</button> </ListGroupItem>
		</ListGroup> );

  }
}

export default Cat;
