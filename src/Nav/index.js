import { Component } from "react";
import "../index.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    const { change, reset } = this.props;
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (this.state.text) {
              change(this.state.text);
              this.setState({ text: "" });
            }
          }}
        >
          <input
            value={this.state.text}
            onChange={(e) => {
              this.setState({ text: e.target.value });
            }}
            type="text"
            className="input"
          />
          <button className="btn">Add</button>
          <button className="btn" onClick={(e)=>{
            e.preventDefault()
            reset()
          }}>
          Reset
        </button>
        </form>
        
      </>
    );
  }
}

export default Nav;
