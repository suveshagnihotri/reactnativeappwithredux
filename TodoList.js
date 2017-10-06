import React from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet
} from 'react-native'
import  TaskRow from  "./TaskRow"

const style = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
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
            </View>
        );
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TodoList;
