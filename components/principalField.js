import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';

// import db from '../localdb.json';

export default class PrincipalField extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            word: [],
            wordType: [],
            description: []
        }
    }

    getWord = (word) => {
        var word = word.toLowerCase().trim();

        var url = "https://rupinwhitehatjr.github.io/dictionary/" + word + ".json"

        return fetch(url)
            .then((data) => {
                if(data.status === 200){
                    return data.json();
                } else{
                    return null
                }
            })
            .then((response)=>{
                var responseObject = response;
                if(responseObject){
                    var wordData = responseObject.definitions[0];

                    var wordType = wordData.wordtype;
                    var description = wordData.description;

                    this.setState({
                        word: this.state.text,
                        wordType: wordType,
                        description: description
                    })
                }else{
                    Alert.alert("Can't find this word!")
                }
            })
    }


    render() {
        if (this.state.word === this.state.text) {
            return (
                <View>
                    <Text style={styles.texts1}>WORD: </Text>
                    <Text style={styles.text1}>{this.state.word} </Text>
                    <Text style={styles.texts1}>WORD TYPE: </Text>
                    <Text style={styles.text2}>{this.state.wordType} </Text>
                    <Text style={styles.texts1}>DEFINITION: </Text>
                    <Text style={styles.text3}>{this.state.description} </Text>

                    <TouchableOpacity style={styles.buttonReset} onPress={() => this.setState({ text: '', word: [], wordType: [], description: [] })}>
                        <Text style={styles.textReset}>RESET</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <TextInput
                        onChangeText={text => { this.setState({ text: text }) }}
                        value={this.state.text}
                        style={styles.textInput}
                        placeholder={'Search'}
                        placeholderTextColor='white' />

                    <TouchableOpacity style={styles.buttonGo}
                        onPress={() => this.getWord(this.state.text)}>
                        <Text style={styles.buttonText}>SEARCH</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 4,
        borderRadius: 40,
        borderColor: 'orange',
        textAlign: 'center',
        color: 'white'
    },
    buttonGo: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 20,
        borderWidth: 4,
        borderColor: 'orange',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'orange',
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    texts1: {
        color: '#FF1493',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    text1: {
        color: 'white',
        fontSize: 20,
        marginLeft: 85,
        marginTop: -23
    },
    text2: {
        color: 'white',
        fontSize: 20,
        marginLeft: 140,
        marginTop: -23
    },
    text3: {
        color: 'white',
        fontSize: 20,
        marginLeft: 135,
        marginTop: -23
    },
    buttonReset: {
        backgroundColor: 'blue',
        alignItems: 'center',
        width: 100,
        height: 50,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 50
    },
    textReset: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    }
})