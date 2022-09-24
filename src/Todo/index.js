import { Component } from "react";
import '../index.css';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { arr, onDelete } = this.props;
    return (
      <>
        {arr.map((item, index) => (
          <div className="div" key={index}>
            <span className="h1">{index+1}    {item}</span>
            <button className="btn" key={index} onClick={(e) => onDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default Todo;
