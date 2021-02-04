import {Component} from 'react';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      running: false,
      interval: null
    };
    // bind handlestart method to bind context to parent
    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStart() {
    const interval = setInterval(() => this.setState({counter: this.state.counter + 1}), 1000)
    if (!this.state.running) {
      this.setState({
        interval: interval,
        running: true
      })
    }
  }

  handlePause() {
    clearInterval(this.state.interval)
    this.setState({running: false})
  }

  handleReset() {
    clearInterval(this.state.interval)
    this.setState({
      counter: 0,
      running: false
    })
  }

  render() {
    return (
      <div>
        <h1>Ye Olde React Stopwatch</h1>
        <h2>{this.state.counter}</h2>
        <div className="control-btns">
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch;