import React from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    Easing,
    ImageBackground,
    Alert,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Button,
    ToastAndroid, PanResponder,
} from 'react-native';
import {getScreenWidthAndHeight, RandomNumBoth} from "../../share/util/util";


export default class RotationChart extends React.Component {
    constructor() {
        super();
        this.state = {
            chartNumber: 2,
            screenWidth: 0,
            dragTarget: 0,
            chartTranslateXArray: [],
            dragListElement: [],
            hasInit: false
        }

    }

    componentDidMount() {

    }

    getScreenWidth() {
        return getScreenWidthAndHeight().width
    }

    initChartX() {
        const arr = this.state.chartTranslateXArray
        const screenWidth = this.getScreenWidth()
        const number = this.state.chartNumber
        for (let i = 0; i < number; i++) {
            arr.push({
                x: i * screenWidth
            })
        }
    }

    initChart() {
        const panResponder = this.panRespond();
        const number = this.state.chartNumber
        const position = this.state.chartTranslateXArray
        const jsx = []

        for (let i = 0; i < number; i++) {
            jsx.push(
                <Animated.View
                    key={i}
                    style={[styles.RotationChartContainer, {
                        transform: [
                            {translateX: position[i].x}
                        ]
                    }]}
                    {...panResponder.panHandlers}
                />
            )
        }

        return jsx
    }

    //滑动手势开始的时候所有的图像跟随移动
    chartMoving(offset) {
        const number = this.state.chartNumber
        const target = this.state.dragTarget

        for (let i = 0; i < number; i++) {
            if (i === target) {
                continue
            }
            const before = this.state.chartTranslateXArray[i].x
            this.state.chartTranslateXArray[i].x = offset + before
        }

        this.setState({
            chartTranslateXArray: this.state.chartTranslateXArray
        })
    }

    /**
     * 参数方向1向右 2向左
     */
    switchChart(direction) {
        const number = this.state.chartNumber
        const screenWidth = direction ? getScreenWidthAndHeight.width : -getScreenWidthAndHeight.width

        for (let i = 0; i < number; i++) {
            const before = this.state.chartTranslateXArray[i].x
            this.state.chartTranslateXArray[i].x = before + screenWidth
        }

        this.setState({
            chartTranslateXArray: this.state.chartTranslateXArray
        })
    }

    //松手时需要平移与否
    releaseNeedMove() {
        const target = this.state.dragTarget
        console.log(target)
        console.log(this.state.chartTranslateXArray[target])
        const endPosition = this.state.chartTranslateXArray[target].x
        //向右移动
        if (endPosition > 50) {
            this.switchChart(1)
        } else if (endPosition < -50){
            this.switchChart(2)
        } else {

        }
    }

    //拖动手势
    panRespond() {
        const dragTarget = this.state.dragTarget

        return PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (event) => {
                console.log('拖动开始')
            },
            onPanResponderMove: (event, gesture) => {
                this.chartMoving(gesture.dx)
                const before = this.state.chartTranslateXArray[dragTarget].x
                this.state.chartTranslateXArray[dragTarget].x = before + gesture.dx
                this.setState({
                    chartTranslateXArray: this.state.chartTranslateXArray
                })
            },
            onPanResponderRelease: (event, gesture) => {
                this.releaseNeedMove()
                console.log('拖动释放')
            },
        });
    }


    render() {
        this.initChartX()
        this.state.dragListElement = this.initChart()

        return (
            <View style={styles.outerContainer}>
                {this.state.dragListElement}
                {/*<View style={styles.pointImage}>*/}

                {/*</View>*/}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    outerContainer: {
        position: 'relative',
        marginTop: 20,
        height: 100,
        width: '100%',
    },
    RotationChartContainer: {
        position: 'absolute',
        height: 100,
        width: '98%',
        backgroundColor: 'red',
        marginLeft: '1%',
        marginRight: '1%',
        borderRadius: 10,
        zIndex: -1,
        elevation: 1
    },
    pointImage: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        height: 7,
        width: 7,
        borderRadius: 7,
        backgroundColor: 'white',
        elevation: 2
    }

});
