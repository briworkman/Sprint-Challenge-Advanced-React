import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log("Could not fetch data", err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Sprint Practice</h1>
      </div>
    );
  }
}

export default App;
