import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 45,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.3,
  },
});
function Randomnumber({
  num, onPress, id, me,
}) {
  const [val, setVal] = useState(false);
  const handlePress = () => {
    if (me.indexOf(id) >= 0) { return; }
    onPress(id);
    setVal(me.indexOf(id) >= 0);
    console.log(me);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>

        <Text style={[styles.random, val && styles.disabled]}>{num}</Text>

      </TouchableOpacity>
    </View>
  );
}

export default Randomnumber;
