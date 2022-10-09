import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class AppHeader extends React.Component {
    render() {
        return (
            <View style={styles.titleBox}>
                <Text style={styles.title}>AUDIO DICTIONARY</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleBox: {
        flex: 0.1,
        backgroundColor: 'orange',
        alignItems: 'center',
        
    },
    title: {
        color: '#FF1493',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    }
})