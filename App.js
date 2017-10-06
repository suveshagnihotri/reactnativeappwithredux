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


    onAddStarted(){
     console.log('onAdd Clicked');
    }

  render() {
    return (
      <TodoList
          onAddStarted={this.onAddStarted.bind(this)}
          todos={this.state.todos}/>
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