import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

// connect for class base component

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({
      type: 'inc'
    })
  }

  const decrementHandler = () => {
    dispatch({
      type: "dec"
    })
  }

  const increaseByFiveHnadler = () => {
    dispatch({
      type: "incbyfive",
      payload: 5
    })
  }

  const decreaseByFiveHandler = () => {
    dispatch({
      type: "decbyfive",
      payload: 5
    })
  }

  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle'
    })
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCounter ? <div className={classes.value}>{counter}</div> : ''
      }

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseByFiveHnadler}>Increase by 5</button>
        <button onClick={decreaseByFiveHandler} >Decrease by Five</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
