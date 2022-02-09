import React, { Component } from "react";
class App extends Component {
  state = {
    nome: "Mayara",
    idade: 30,
    comida: "massa",
    musicas: ["Everything", "she", "happier than ever"]
  };
  render() {
    return (
      <div>
        <h1>Me chamo {this.state.nome}</h1>
        <h2>tenho {this.state.idade} anos</h2>
        <h3>Minha comida favorita é {this.state.comida}</h3>
        <h4>Minhas musicas são</h4>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
      </div>
    );
  }
}

export default App;
