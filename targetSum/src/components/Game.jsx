import {
  SafeAreaView, View, Text, StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
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
});
// eslint-disable-next-line no-unused-vars

function Game({ randomNumberCount }) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const randomNumbers = Array.from({ length: randomNumberCount })
    .map(() => 1 + Math.floor(10 * Math.random()));
  const target = randomNumbers.slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.target}>{target}</Text>

      <View style={styles.randomNumberContainer}>
        {randomNumbers.map((num) => (

          <Randomnumber key={Math.random()} num={num} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Game;
