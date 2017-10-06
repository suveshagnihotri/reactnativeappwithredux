import React from 'react';

import { StyleSheet } from 'react-native';
import TaskList from "./TodoList";

class App extends React.Component {

  render() {
    return (
      <TaskList/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export  default App;