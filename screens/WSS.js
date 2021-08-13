import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WSS extends React.Component{
    render(){
        return(
            <View>
                <Header>
                    Write Story
                </Header>
                <TextInput
                placeholder={'Title'}
                placeholderTextColor={'black'}
                onChangeText={(Title) => this.setState({ Title })}
                style={styles.textInput}
                />
                <TextInput placeholder={'Author'}
                placeholderTextColor={'black'}
                onChangeText={(Author) => this.setState({ Author })}
                style={styles.textInput}
                />
                <TextInput
                placeholder={'Author'}
                placeholderTextColor={'black'}
                onChangeText={(Author) => this.setState({ Author })}
                multiline={true}
                numberOfLines={10}
                style={styles.textInput}
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height:40,
        marginTop:20,
        borderRadius:20,
        alignSelf:'center',
        backgroundColor:'gray'
    },
    submitButton: {
        height:40,
        marginTop:50,
        borderRadius:20,
        alignSelf:'center'
    }
})