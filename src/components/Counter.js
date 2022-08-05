import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';

// connect for class base component

const Counter = () => {
  // console.log(counterActions)

  const counter = useSelector(state => state.counterReducer.counter)
  const showCounter = useSelector(state => state.counterReducer.showCounter)


  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseByFiveHnadler = () => {
    dispatch(counterActions.incbyfive(5)) // {type: some_unique_identifire, payload: 5}
  }

  const decreaseByFiveHandler = () => {
    dispatch(counterActions.decbyfive(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.togggleCounter())
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
