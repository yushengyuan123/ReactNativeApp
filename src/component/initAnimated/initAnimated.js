import React from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    Animated,
    Easing,
    ImageBackground,
    Alert,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Button,
    ToastAndroid,
} from 'react-native';
import {RandomNumBoth} from "../../share/util/util";


export class Charge extends React.Component {
    constructor(props) {
        super();
        this.state = {
            bubbleNumber: 10,
            animatedValue: new Animated.Value(0),
            bubbleArray: [],
            bubbleView: []
        }

    }

    componentWillUnmount(){
    }

    componentDidMount() {
        this.initBubbleArray()
        this.initBubbleData()
        this.initAnimated()
        this.bubbleMoveToTop()
    }

    initAnimated() {
        const circle = Animated.timing(this.state.animatedValue, {
            toValue: 360,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true
        })
        Animated.loop(circle).start()
    }

    initBubbleArray() {
        const number = this.state.bubbleNumber
        const bubbleArr = this.state.bubbleArray
        for (let i = 0; i < number; i++) {
            bubbleArr.push(
                {
                    size: 20 + RandomNumBoth(1,20),
                    translateY: new Animated.Value(-5)
                }
            )
        }
    }

    initBubbleData() {
        const number = this.state.bubbleNumber
        const bubbleArr = this.state.bubbleView
        const data = this.state.bubbleArray
        for (let i = 0; i < number; i++) {
            bubbleArr.push(
                <Animated.View
                    key={i}
                    style={[styles.bubbleCircle, {
                    transform: [
                        {translateY: data[i].translateY}
                    ],
                    height: data[i].size,
                    width:  data[i].size,
                    borderRadius: data[i].size,
                    bottom: 0,
                    left: '50%',
                    marginLeft: RandomNumBoth(1,30)
                }]}>
                </Animated.View>
            )
        }
        this.setState({
            bubbleView: this.state.bubbleView
        })
    }

    getAnimateData() {
        const number = this.state.bubbleNumber
        const bubbleArr = this.state.bubbleArray
        const animateArr = []

        for (let i = 0; i < number; i++) {
            animateArr.push(
                Animated.timing(bubbleArr[i].translateY, {
                    toValue: -300,
                    duration: 3000 + RandomNumBoth(1, 5000),
                    delay: RandomNumBoth(1, 3000),
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true
                })
            )
        }

        return animateArr
    }

    //泡泡移动动画
    bubbleMoveToTop() {
        const animateCollection = this.getAnimateData()

        for (let i = 0; i < animateCollection.length; i++) {
            Animated.loop(animateCollection[i]).start()
        }
    }

    render() {
        const rotateZ = this.state.animatedValue.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.chargeContainer}>
                <Animated.View
                    style={[styles.outerCircle, {
                        transform: [
                            {rotateZ: rotateZ},
                        ]
                    }]}
                >
                    <View style={styles.innerCircle}>
                        {/*<Text style={styles.innerCircleText}>*/}
                        {/*    15%*/}
                        {/*</Text>*/}
                    </View>
                </Animated.View>
                <View style={styles.bottomSeat}>
                    {this.state.bubbleView}
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    chargeContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outerCircle: {
        position: 'absolute',
        bottom: 300,
        height: 250,
        width: 250,
        borderRadius: 100,
        backgroundColor: 'aqua',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center'
    },
    innerCircle: {
        height: 220,
        width: 220,
        borderRadius: 100,
        position: 'absolute',
        backgroundColor: 'black',
    },
    innerCircleText: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        fontSize: 20,
        color: 'white'
    },
    bottomSeat: {
        height: 30,
        width: 150,
        position: 'absolute',
        marginLeft: -75,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        left: '50%',
        bottom: 0,
        backgroundColor: 'aqua'
    },
    bubbleCircle: {
        position: 'absolute',
        backgroundColor: 'aqua'
    }
});
