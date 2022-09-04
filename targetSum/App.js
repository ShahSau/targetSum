/* eslint-disable react/jsx-filename-extension */

import Game from './src/components/Game';

export default function App() {
  const number = Array.from({ length: 6 })
    .map(() => 1 + Math.floor(10 * Math.random()));
  return (
    <Game randomNumberCount={6} />
  );
}
