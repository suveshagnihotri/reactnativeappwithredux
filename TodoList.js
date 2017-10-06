import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const  style = StyleSheet.create({
   container:{
       paddingTop: 40,
   }
});

export default class TaskList extends React.Component {
    render() {
        return (
            <View  style = { style.container }>
            <Text> Suvesh Agnihotri Task List</Text>
            </View>)
    }
}
