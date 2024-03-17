import React, { Fragment } from 'react'
import { useFirstContext } from './context/FirstContext';
import { useSecondContext } from './context/SecondContext';
import { useThirdContext } from './context/ThirdContext';
import { ThemedButton } from './component/ThemedButton';

const App = () => {
  const { firstValue, setFirstValue } = useFirstContext();
  const { secondValue, setSecondValue } = useSecondContext();
  const { state, dispatch } = useThirdContext();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <Fragment>
      {/* <div>
        <p>First Context Value: {firstValue}</p>
        <button onClick={() => setFirstValue("Updated First Value")} className='btn btn-primary'>Update First Value</button>

        <p>Second Context Value: {secondValue}</p>
        <button onClick={() => setSecondValue("Updated Second Value")} className='btn btn-primary'>Update Second Value</button>
      </div>
      <div>
        <p>Count: {state.count}</p>
        <div className='d-flex' style={{ gap: 10 }}>
          <button onClick={handleIncrement} className='btn btn-primary'>Increment</button>
          <button onClick={handleDecrement} className='btn btn-primary'>Decrement</button>
        </div>
      </div> */}
      <ThemedButton />
    </Fragment>
  )
}

export default App