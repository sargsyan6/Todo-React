import { Component } from "react";
import Todo from "./Todo";
import Nav from "./Nav";
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
    };
  }

  change = (newText) => {
    this.setState({ arr: [...this.state.arr, newText] });
  };

  reset = () => {
    this.setState({ arr: [] });
  };

  onDelete = (todoItem) => {
    const { arr } = this.state;
    this.setState({
      arr: arr.filter((item, i) => {
        return todoItem !== i;
      }),
    });
  };
  render() {
    return (
      <>
        <Nav reset={this.reset} change={this.change} />
        <Todo arr={this.state.arr} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
