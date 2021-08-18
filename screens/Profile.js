import { Text, View } from 'react-native'
import * as React from 'react'

export default class Profile extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text> Profile </Text>
            </View>
        )
    }
}