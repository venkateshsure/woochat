import { Component } from "react";

import Counter from "../Counter";

import "./index.css";
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

class Home extends Component {
  state = { dataArray: data };

  onIncrement = (id) => {
    const { dataArray } = this.state;
    const updatedArray = dataArray.map((each) =>
      each.id === id ? { ...each, value: each.value + 1 } : each
    );
    this.setState({ dataArray: updatedArray });
  };

  onDecrement = (id) => {
    const { dataArray } = this.state;
    const updatedArray = dataArray.map((each) =>
      each.id === id ? { ...each, value: each.value - 1 } : each
    );
    this.setState({ dataArray: updatedArray });
  };

  getTotalCount = () => {
    const { dataArray } = this.state;
    return dataArray.reduce((acc, curObj) => acc + curObj.value, 0);
  };
  render() {
    const { dataArray } = this.state;
    const totalCount = this.getTotalCount();
    return (
      <div className="bg-container">
        <p>Total:{totalCount > 0 ? totalCount : 0}</p>
        <div className="counter-keys">
          {dataArray.map((each) => (
            <Counter
              key={each.id}
              each={each}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
