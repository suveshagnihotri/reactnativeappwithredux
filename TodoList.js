import React from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet
} from 'react-native'

const style = StyleSheet.create({
    container: {
        paddingTop: 40,
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
            <Text>{todos.tasks}</Text>
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
