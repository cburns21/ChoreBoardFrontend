import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class Roommate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roommate: this.props.roommate
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text key={this.state.roommate.id} style={styles.names}>{this.state.roommate.name}'s Chores:</Text>
                {this.state.roommate.chores.map(chore => {
                    return <Text><Text style={styles.chores}>{chore.chore_name} </Text> </Text>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7AA095',
        color: '#D7F9F1',
        textAlign: 'left'
    },

    names: {
        margin: 10,
        padding: 5,
        color: '#D7F9F1',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    choreDescriptionText: {
        color: '#D4EFB0',
    },
    chores: {
        // textAlign: 'left',
        // margin: 10,
        // paddingLeft: 30,
        color: '#D7F9F1',
        fontSize: 25,
        // lineHeight: 19,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        color: '#7F7767',
        fontWeight: 'bold',

    }
});