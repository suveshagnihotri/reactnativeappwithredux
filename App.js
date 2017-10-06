import React from 'react';

import {StyleSheet,Text,} from 'react-native';
import TodoList from "./TodoList";
import TaskForm from "./TaskForm";

import NavigationExperimental from 'react-native-deprecated-custom-components';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

    renderScene(route, nav) {
        switch (route.name) {
            case 'taskform':
                return (
                  <TaskForm/>
                );
            default:
                return (
                    <TodoList
                        onAddStarted={this.onAddStarted.bind(this)}
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
