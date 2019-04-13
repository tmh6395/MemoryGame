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
    score: 0,
    styles: {
      display: "none",
    }
  }

  // Function that checks if the clicked person was already clicked
  clickFunc = id => {
console.log(this.state.clickedArray);
    if (this.state.clickedArray.length === 11) {
      document.getElementById("won-msg").style.display = "block";
      this.setState({ clickedArray: [] })
      this.setState({ score: 0 })
    }

    // Check if character was clicked already
    else if (this.state.clickedArray.includes(id)) {
      document.getElementById("lost-msg").style.display = "block";
      this.setState({ clickedArray: [] })
      this.setState({ score: 0 })
    }

    // Else the character has not yet been clicked
    else {
      document.getElementById("won-msg").style.display = "none";
      document.getElementById("lost-msg").style.display = "none";
      this.state.clickedArray.push(id);
      this.setState({ score: this.state.score + 1 })
    }

    // Comment out the below line to test without shuffling
    // this.setState({ characters: shuffle(characters) })
  }


  // Render the page
  render() {
    return (
      <Wrapper>
        <h1 className="title">FUTURAMA MEMORY GAME - Score: {this.state.score}/12
          <p id="won-msg" style={this.state.styles}>Congratulations, you won! You can click a character to start again.</p>
          <p id="lost-msg">I'm sorry, but you lost. You can click a character to start again.</p>
        </h1>
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