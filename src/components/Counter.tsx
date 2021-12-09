import { useReducer } from 'react';

type CounterState = {
  value: number;
}

type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
}

type SetCounterAction = {
  type: 'SET';
  payload: number;
}

type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      return { value: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch ] = useReducer(reducer, { value: 0 });

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const set = () => dispatch({ type: 'SET', payload: 0 });

  return (
    <main>
      <h2>{state.value} Days since last outage</h2>
      <section>
        <button onClick={increment}>Increment</button>
        <button onClick={set}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
