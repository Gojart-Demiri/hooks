import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import ResourceList from "./components/ResourceList";

class App extends React.Component {
  state = {
    resource: "posts"
  };

  handleOnClick = param => {
    this.setState({
      resource: param
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={()=> this.handleOnClick("post")}>Post</button>
        <button onClick={()=> this.handleOnClick("todos")}>Todos</button>
        <ResourceList resource={this.state.resource} />
      </div>
    );
  }
}

export default App;
