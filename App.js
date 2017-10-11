import React from 'react';

import {StyleSheet,Text,} from 'react-native';
import TodoList from "./TodoList";
import TaskForm from "./TaskForm";
import store from "./store";
import NavigationExperimental from 'react-native-deprecated-custom-components';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(()=>{
          this.setState(store.getState());
        });
    }

    renderScene(route, nav) {
        switch (route.name) {
            case 'taskform':
                return (
                  <TaskForm
                  onCancel={this.onCancel.bind(this)}
                  onAdd={this.onAdd.bind(this)}/>
                );
            default:
                return (
                    <TodoList
                        onAddStarted={this.onAddStarted.bind(this)}
                        onDone ={this.onDone.bind(this)}
                        todos={this.state.todos}
                    />
                );
        }
    }

    onAddStarted() {
        this.nav.push({
            name : 'taskform',
        });
    }

    onCancel(){
      console.log('cancel');
      this.nav.pop();
    }

    onDone(todo){
      console.log('onDone',todo);
      const filterTodos = this.state.todos.filter ((filterTodos)=>{
         return filterTodos !== todo;
         });
     this.setState({todos: filterTodos});
    }

    onAdd(task){
      console.log('onAdd',task);
      store.dispatch({
        type : 'ADD_TODO',
        task,
      });
      this.nav.pop();
    }

    render() {
        return (
            <NavigationExperimental.Navigator initialRoute={{ name: 'taskList', index: 0 ,
            screen: TodoList}}
                       ref={((nav)=>{
                           this.nav = nav;
                       })}
                       renderScene={this.renderScene.bind(this)}
            />
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

export default App;
