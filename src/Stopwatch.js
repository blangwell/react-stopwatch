import {Component} from 'react';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Stopwatch!</h1>
        <div className="control-btns">
          <button>Start</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch;