import {
  SafeAreaView, View, Text, StyleSheet, Button
} from 'react-native';
import React, { useState, useEffect } from 'react';
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

function Game({ randomNumberCount, number,remaniningSeconds }) {
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
  const gameStatus = () => {
    const sumSelected = selectedIds.reduce((acc, curr) => acc + randomNumbers[curr], 0);
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
      <Text style={[styles.target, styles[`STATUS_${currentgameStatus}`]]}>{target}</Text>

      <View style={styles.randomNumberContainer}>
        {currentgameStatus !== 'PLAYING'
        && <Button title="Play" onPress={() => gameStart()} />}
        {currentgameStatus === 'PLAYING' && randomNumbers.map((num, index) => (
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
0. instead of target show you won / you lost
1. beginigne 'start' second hole, games rule show korbe
2. won and lost er jonno 2 different kinds of screen
3. time limit feature
*/}