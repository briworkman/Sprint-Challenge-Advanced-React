import React from "react";
import "./App.css";
import PlayerStats from "./components/PlayerStats";
import Navbar from "./components/Navbar";
import axios from "axios";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log(response);
        this.setState({
          players: response.data
        });
      })
      .catch(err => {
        console.log("Could not fetch data", err);
      });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.players.map(player => (
          <PlayerStats
            name={player.name}
            country={player.country}
            searches={player.searches}
            id={player.id}
            key={player.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
