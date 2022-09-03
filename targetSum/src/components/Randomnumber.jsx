import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 45,
    textAlign: 'center',
  },
});
function Randomnumber({ num }) {
  const handlePress = (number) => {
    console.log(number);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => handlePress(num)}>
        <Text style={styles.random}>{num}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Randomnumber;
