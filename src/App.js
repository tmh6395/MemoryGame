import React from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import shuffle from "shuffle-array";
import './App.css';

// Commented code is for testing
class App extends React.Component {
  state = {
    characters: characters,
    clickedArray: [],
    score: 0
  }

  // Function that checks if the clicked person was already clicked
  clickFunc = id => {

    // Filters out the character that was clicked
    // let currentCharacter = characters.filter(person => {
    //   return person.id === id;
    // });
    // console.log("=======================================");
    // console.log("currentCharacter: ", currentCharacter);

    // Check if character was clicked already
    if (this.state.clickedArray.includes(id)) {
      // console.log("was clicked");
      this.setState({ clickedArray: [] })
      // console.log("was clicked: clickedArray: ", this.state.clickedArray)
      this.setState({ score: 0 })
    }

    // Else the character has not yet been clicked
    else {
      // console.log("was not clicked");
      this.state.clickedArray.push(id);
      // console.log("was not clicked: clickedArray: ", this.state.clickedArray)
      this.setState({ score: this.state.score + 1 })
    }
    // console.log("after both: clickedArray: ", this.state.clickedArray)

    // Comment out the below line to test without shuffling
    this.setState({ characters: shuffle(characters) })
  }

  // Render the page
  render() {
    return (
      <Wrapper>
        <h1 className="title">FUTURAMA MEMORY GAME - Score: {this.state.score}/12</h1>
        {this.state.characters.map(
          character => <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            clickFunc={this.clickFunc}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;