import React from 'react';

import { StyleSheet } from 'react-native';
import TodoList from "./TodoList";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            todos: [
                {
                    tasks: 'Suvesh Agnihotri',
                },
                {
                    tasks: ' Agnihotri',
                },
                {
                    tasks: ' Suvesh',
                },
                {
                    tasks: 'Suvesh ',
                },
            ],
        };
    }


  render() {
    return (
      <TodoList todos={this.state.todos}/>
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