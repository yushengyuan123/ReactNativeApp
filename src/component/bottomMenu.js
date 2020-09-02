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

export class BottomMenu extends React.Component {
    constructor(props) {
        super();

    }


    render() {
        return (
            <View style={styles.bottomMenuContainer}>
                <View style={styles.menuItem}>
                    <Image
                        style={styles.icon}
                        source={require('../image/file.png')}
                    />
                    <Text style={styles.text}>首页</Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={styles.icon}
                        source={require('../image/hospital.png')}
                    />
                    <Text style={styles.text}>监控</Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={styles.icon}
                        source={require('../image/mirror.png')}
                    />
                    <Text style={styles.text}>发现</Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={styles.icon}
                        source={require('../image/nurse.png')}
                    />
                    <Text style={styles.text}>我的</Text>
                </View>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    bottomMenuContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
    },

    icon: {
        height: 25,
        width: 35
    },

    text: {
        marginTop: 2,
        textAlign: 'center',
        fontSize: 10
    },

    menuItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1
    }
})
