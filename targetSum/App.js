/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import Game from './src/components/Game';

export default function App() {
  const [gameid, setGameid] = useState(0)
  const reset = () =>{
    setGameid(gameid + 1);
  };
  // const number = Array.from({ length: 6 })
  //   .map(() => 1 + Math.floor(10 * Math.random()));
  return (
    <Game key={gameid} reset={reset} randomNumberCount={6} />
  );
}
