import React from 'react';

import AlertBox from './AlertBox';
import Counter from './Counter';
import Counter2 from './Counter2';
import Dice from './Dice';
import Fruit from './Fruit';
import NumberBox from './NumberBox';

function App() {
  return (
    <div className="App">
      <AlertBox />
      <NumberBox initialValue={11} />
      <Counter/>
      <Fruit />
      <Counter2 />
      <Dice />
    </div>
  );
}

export default App;
