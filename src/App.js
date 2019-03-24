import React, { Component } from 'react';
import Cat from './catboxapp';


import './App.css';

const CATS = [
	{ name: "Missy", color: "Tabby", special_ability: "Catching Mice", img: "https://cataas.com/c", isAdopted:false, btnlabel:"Adopt", adoptedText:""},
	{ name : "Kitty", color: "Black and white", special_ability: "Tossing the ball", img: "http://images6.fanpop.com/image/photos/41500000/Cute-Little-Kitten-kittens-41527633-500-375.jpg", isAdopted:false, btnlabel:"Adopt", adoptedText:""}, 
	{ name : "Lola", color: "Yellow", special_ability: "Catching the ball", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg", isAdopted:false, btnlabel:"Adopt", adoptedText:"" }
]; 
let myNewCats;
class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: CATS 
    };
   
  }
  
 
 changeAdoptStatus(index)
 { 
   
    myNewCats = this.state.cats;
   // make the changes to myNewCats
   // then when done, 
   // this.setState({ cats: myNewCats})
   // then watch your page update automatically
   myNewCats[index].isAdopted = !myNewCats[index].isAdopted; 
  if (myNewCats[index].isAdopted ===false)
  { myNewCats[index].btnlabel= "Adopt"; myNewCats[index].adoptedText= "";  }
  else 
  {myNewCats[index].btnlabel= "Abandon"; myNewCats[index].adoptedText= "Adopted";}
  this.setState({cats:myNewCats});
  console.log('from changeAdoptStatus');
 }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
             <h1> Welcome to Oanh's Catbox! </h1>
             <h2>I have the best cats!</h2>
             I wrote this all in React! 
             <h2> Here are the cats </h2>
             { this.state.cats.map((cat,i) => { 
               return <Cat name={cat.name} 
               adoptedText = {cat.adoptedText}
               btnlabel = { cat.btnlabel }
               changeAdoptStatus ={() => this.changeAdoptStatus(i)}
               color={cat.color} 
               special_ability={cat.special_ability} 
               isAdopted={cat.isAdopted}
               img = {cat.img} />  }  )
             }
             
             
        </header>
      </div>
    );
  }
}

export default App;
