import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import getStore from "./store"


export default class App extends Component {
    render() {
        return (
            <Provider store={getStore()}>
                <View>
                    <Text>Hello World!</Text>
                </View>
            </Provider>
        )
    }
}
