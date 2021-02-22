import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your Goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
