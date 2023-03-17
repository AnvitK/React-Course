// import { Component } from 'react';
// import { useSelector, useDispatch, connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const disptach = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // disptach({ type: "increment" });
    disptach(counterActions.increment());
  };

  const increaseHandler = () => {
    // disptach({ type: "increase", amount: 10 });
    disptach(counterActions.increase(10));   // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    // disptach({ type: "decrement" });
    disptach(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // disptach({ type: "toggle" });
    disptach(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter; // when using functional component way

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = (disptach) => {
//   return {
//     increment: () => disptach({ type: 'increment' }),
//     decrement: () => disptach({ type: 'decrement' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);       // when using class component way
