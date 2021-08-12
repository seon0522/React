import React from 'react';
import Compon from './Compon';
import Counter from './Counter';
// import MyComponent from './MyComponent';

const App = () => {
  // return <Compon name='react' favoriteNumber={3} >리액트</Compon>; 
  return <Counter button={'1씩 증가합니다.'}></Counter>;
};

export default App;