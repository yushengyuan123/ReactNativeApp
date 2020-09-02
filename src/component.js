import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Alert,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Button,
    ToastAndroid
} from 'react-native'

export class Welcome extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: 'ysy1'
        }
    }

    componentDidMount() {
        console.log('nihao')
    }

    eventsClick() {
        console.log('fuck')
        Alert.alert('click')
    }

    render() {
        return (
            <View style={styles.outer}>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => Alert.alert(
                        'Alert Title',
                    )}>
                    <View>
                        <Text>Alert with message and default button</Text>
                    </View>
                </TouchableHighlight>
                <TouchableWithoutFeedback onPress={() =>
                    Alert.alert('click')
                }>
                    <View style={styles.container}>
                        <Text>
                            {this.state.name}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },

    outer: {
        height: 150,
        backgroundColor: 'red'
    },

    container: {
        height: 100,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
})
