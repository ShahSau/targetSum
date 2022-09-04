import {
  SafeAreaView, View, Text, StyleSheet, Button
} from 'react-native';
import React, { useState, useEffect } from 'react';
import shuffle from 'lodash.shuffle';
import Randomnumber from './Randomnumber';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  target: {
    fontSize: 50,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomNumberContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

function Game({ randomNumberCount, number,reset }) {
  const [currentgameStatus, setCurrentgameStatus] = useState('start');
  // eslint-disable-next-line no-unused-vars
  const selectedIds = [];
  const randomNumbers = Array.from({ length: randomNumberCount })
    .map(() => 1 + Math.floor(10 * Math.random()));
  const target = randomNumbers.slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  const isNumberSelected = (numberIndex) => {
    // eslint-disable-next-line no-unused-expressions
    if (selectedIds.indexOf(numberIndex) >= 0) {
      return true;
    }
    return false;
  };
  const shuffledNumbers = shuffle(randomNumbers)
  const gameStatus = () => {
    const sumSelected = selectedIds.reduce((acc, curr) => acc + shuffledNumbers[curr], 0);
    if (sumSelected < target) {
      return 'PLAYING';
    }
    if (sumSelected === target) {
      return 'WON';
    }
    if (sumSelected > target) {
      return 'LOST';
    }
    // return 'PLAYING';
  };
  let situation = 'PLAYING';
  const selectNumber = (numberIndex) => {
    selectedIds.push(numberIndex);
    console.log(gameStatus());
    situation = gameStatus();
    setCurrentgameStatus(situation);
  };

  const gameStart = () => {
    setCurrentgameStatus('PLAYING');
  };
  return (
    <SafeAreaView style={styles.container}>
      {currentgameStatus === 'PLAYING'
      && <Text style={[styles.target, styles[`STATUS_${currentgameStatus}`]]}>{target}</Text>}
      {currentgameStatus === 'WON'
      && <Text style={[styles.target, styles[`STATUS_${currentgameStatus}`]]}>You Won</Text>}
      {currentgameStatus === 'LOST'
      && <Text style={[styles.target, styles[`STATUS_${currentgameStatus}`]]}>You lost</Text>}
      <View style={styles.randomNumberContainer}>
        {currentgameStatus !== 'PLAYING'
        && <Button title="Play" onPress={() => gameStart()} />}
        {currentgameStatus === 'PLAYING' && shuffledNumbers.map((num, index) => (
          <Randomnumber
            key={Math.random()}
            num={num}
            id={index}
            me={gameStatus()}
            isDisabled={isNumberSelected(index)}
            ids={selectedIds}
            onPress={selectNumber}
          />
        ))}
        {currentgameStatus === 'PLAYING' && <Button title="RESET" onPress={() => reset()} />}
      </View>
      <Text>
        {' '}
        {}
      </Text>
    </SafeAreaView>
  );
}

export default Game;
{/*
ideas:
1. time limit feature
*/}