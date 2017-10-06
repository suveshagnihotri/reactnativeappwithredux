import React from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import TaskRow from "./TaskRow"

const style = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        height: 60,
        borderColor: "#05A5D1",
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600',
    }
});

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    renderRow(todos) {
        return (
            <TaskRow todo={todos}/>
        );
    }

    render() {
        return (
            <View style={style.container}>
                <ListView
                    key={this.props.todos}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />

                <TouchableHighlight
                    onPress={this.props.onAddStarted}
                    style={style.button}>
                    <Text style={style.buttonText}>Add one </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

TodoList.propTypes = {
    onAddStarted: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TodoList;
