import React from 'react';
import {Animated, PanResponder, StyleSheet, View, Text} from 'react-native';

export default class ShoesCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            radius: 75 * Math.sqrt(2),
            angle: 0,
            k: 0,
            last: 0,
            translateValue: {
                x: 0,
                y: 0,
            },
            speed: {
                x: 0,
                y: 0,
            },
            time: {
                start: 0,
                end: 0,
            },
            cardList: [],
            cssStylesArray: [
                {
                    point: {
                        x: 0,
                        y: 0,
                    },
                    scale: new Animated.Value(1),
                    z: 0,
                    zIndex: 3,
                    imageUrl: require('../../image/card_one.png'),
                },
                {
                    point: {
                        x: 0,
                        y: new Animated.Value(10),
                    },
                    scale: new Animated.Value(0.95),
                    z: 0,
                    zIndex: 2,
                    imageUrl: require('../../image/card_two.png'),
                },
                {
                    point: {
                        x: 0,
                        y: new Animated.Value(20),
                    },
                    scale: new Animated.Value(0.90),
                    z: 0,
                    zIndex: 1,
                    imageUrl: require('../../image/card_three.png'),
                },

            ],
            //即将移动的目标
            movingTarget: 0,

        };


    }

    panRespond() {
        return PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (event) => {
                const index = this.state.movingTarget % 3;
                this.state.cssStylesArray[index].point.y = 0;
                this.setState({
                    cssStylesArray: this.state.cssStylesArray,
                    time: {
                        start: event.nativeEvent.timestamp,
                    },
                });
            },
            onPanResponderMove: (evt, gs) => {
                const index = this.state.movingTarget % 3;
                this.state.cssStylesArray[index].point.x = this.state.cssStylesArray[index].point.x + gs.dx;
                this.state.cssStylesArray[index].point.y = this.state.cssStylesArray[index].point.y + gs.dy;
                this.state.cssStylesArray[index].z = this.state.cssStylesArray[index].z + 3;
                this.setState({
                    cssStylesArray: this.state.cssStylesArray,
                });
            },
            onPanResponderRelease: (event, gs) => {
                this.setState({
                    time: {
                        start: this.state.time.start,
                        end: event.nativeEvent.timestamp,
                    },
                });
                this.cardLeave();
            },
        });
    }

    initData() {
        const list = [];
        const panResponder = this.panRespond();
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                list.push(
                    <Animated.View
                        key={i}
                        // source={this.state.cssStylesArray[i].imageUrl}
                        style={[styles.shoesImage, {
                            transform: [
                                {translateX: this.state.cssStylesArray[i].point.x},
                                {scale: this.state.cssStylesArray[i].scale},
                                {translateY: this.state.cssStylesArray[i].point.y},
                                {rotateZ: this.state.cssStylesArray[i].z + 'deg'},
                            ],
                            zIndex: this.state.cssStylesArray[i].zIndex,
                            elevation: this.state.cssStylesArray[i].zIndex,
                            backgroundColor: 'rgb(93,186,168)',
                        }]}
                        {...panResponder.panHandlers}
                    />,
                );
                continue;
            }
            list.push(
                <Animated.View
                    key={i}
                    // source={this.state.cssStylesArray[i].imageUrl}
                    style={[styles.shoesImage, {
                        transform: [
                            {translateX: this.state.cssStylesArray[i].point.x},
                            {scale: this.state.cssStylesArray[i].scale},
                            {translateY: this.state.cssStylesArray[i].point.y},
                            {rotateZ: this.state.cssStylesArray[i].z + 'deg'},
                        ],
                        zIndex: this.state.cssStylesArray[i].zIndex,
                        elevation: this.state.cssStylesArray[i].zIndex,
                        backgroundColor: i === 1 ? 'rgb(183,213,237)' : 'rgb(36,37,39)',
                    }]}
                    {...panResponder.panHandlers}
                />);
        }

        return list;
    }

    //卡片滑动重新整理数组
    switchCardArray() {
        let targetIndex = this.state.movingTarget;
        return [
            Animated.timing(this.state.cssStylesArray[(targetIndex + 1) % 3].scale, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.cssStylesArray[(targetIndex + 1) % 3].point.y, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.cssStylesArray[(targetIndex + 2) % 3].scale, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.cssStylesArray[(targetIndex + 2) % 3].point.y, {
                toValue: 10,
                duration: 200,
                useNativeDriver: true,
            }),
        ];
    }

    slipStart() {
        const newPosition = this.switchCardArray();
        Animated.parallel(newPosition).start();
    }

    //层级设置
    setIndex() {
        const targetIndex = this.state.movingTarget;
        this.state.cssStylesArray[targetIndex].zIndex = 1;
        this.state.cssStylesArray[(targetIndex + 1) % 3].zIndex = 3;
        this.state.cssStylesArray[(targetIndex + 2) % 3].zIndex = 2;
        this.setState({
            cssStylesArray: this.state.cssStylesArray,
        });
    }

    //移动完回去收回
    cardBack() {
        const targetIndex = this.state.movingTarget;
        this.state.cssStylesArray[targetIndex].scale = new Animated.Value(0.90);
        this.state.cssStylesArray[targetIndex].point.x = 0;
        this.state.cssStylesArray[targetIndex].point.y = new Animated.Value(10);
        this.state.cssStylesArray[targetIndex].z = 0;
        Animated.parallel([
            Animated.timing(this.state.cssStylesArray[targetIndex].point.y, {
                toValue: 20,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
        this.setState({
            cssStylesArray: this.state.cssStylesArray,
            movingTarget: (this.state.movingTarget + 1) % 3,
        });

    }

    cardLeave() {
        const targetIndex = this.state.movingTarget;
        const x = this.state.cssStylesArray[targetIndex].point.x;
        const y = this.state.cssStylesArray[targetIndex].point.y;
        const degree = this.state.cssStylesArray[targetIndex].z;
        // this.state.cssStylesArray[targetIndex].z = new Animated.Value(0.5).interpolate({
        //   inputRange: [0, 0.5,1],
        //   outputRange: ['0deg', '90deg','0deg']
        // })
        this.state.cssStylesArray[targetIndex].point.x = new Animated.Value(x);
        this.state.cssStylesArray[targetIndex].point.y = new Animated.Value(y);
        // console.log(typeof this.state.cssStylesArray[targetIndex].rotateZ)
        this.setState({
            cssStylesArray: this.state.cssStylesArray,
        });


        setTimeout(() => {
            const consumeTime = (this.state.time.end - this.state.time.start);
            const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            const speed = distance / consumeTime;
            const k = y / x;
            const to = x > 0 ? 300 : -300;
            Animated.parallel([
                Animated.timing(this.state.cssStylesArray[targetIndex].point.x, {
                        toValue: to,
                        velocity: speed,
                        useNativeDriver: true,
                    },
                ),
                Animated.timing(this.state.cssStylesArray[targetIndex].point.y, {
                        toValue: to * k,
                        velocity: speed,
                        useNativeDriver: true,
                    },
                ),
                // Animated.timing(this.state.cssStylesArray[targetIndex].z, {
                //     toValue: 0.5,
                //     velocity: speed,
                //     useNativeDriver: true,
                //   },
                // ),
            ]).start(() => {
                this.setIndex();
                this.slipStart();
                this.cardBack();
            });
        }, 0);
    }

    render() {
        this.state.cardList = this.initData();
        return (
            <View style={styles.cardContainer}>
                <View style={styles.innerContainer}>
                    {this.state.cardList}
                </View>
                {/*<Image*/}
                {/*  style={styles.shoesImage}*/}
                {/*  source={require('../../image/ow.jpg')}>*/}
                {/*</Image>*/}
            </View>
        );


    }
}

const cssStyles = [
    {
        left: 0,
        top: 0,
        width: 150,
        zIndex: 2,
    },
    {
        left: 7,
        top: 7,
        width: 136,
        zIndex: 1,
    },
    {
        left: 14,
        top: 14,
        width: 122,
        zIndex: 0,
    },
];
const styles = StyleSheet.create({
    cardContainer: {
        // height: '100%',
        // width: '100%',
        height: 150,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerContainer: {
        position: 'absolute',
        height: 150,
        width: 150,
    },

    shoesImage: {
        position: 'absolute',
        height: 150,
        width: 150,
        borderRadius: 8,
        flex: 1
    },
});
