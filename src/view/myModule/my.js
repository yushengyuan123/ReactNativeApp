import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  ToastAndroid,
} from 'react-native';

import Wave from '../../component/Wave';


export class MyModules extends React.Component {
  constructor(props) {
    super();
    this.username = 'nihao';
    this.signature = '说点什么';

  }


  render() {
    return (
      <View>
        <View
          style={styles.topContainer}
        >
          <View style={styles.set}>
            <Image
              style={styles.setIcon}
              source={require('../../image/set.png')}
            />
          </View>
          <View style={styles.myContainer}>
            <View style={styles.iconContainer}>
              <ImageBackground
                style={styles.headIcon}
                source={require('../../image/ow.jpg')}
              >
              </ImageBackground>
              <Text style={styles.name}>
                {this.username}
              </Text>
              <Text style={styles.sign}>
                {this.signature}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Wave/>
        </View>
      </View>
    );


  }
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'white',
  },

  set: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
  },

  setIcon: {
    height: 25,
    width: 25,
  },

  myContainer: {},

  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 200,
  },

  headIcon: {
    height: 80,
    width: 80,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    overflow: 'hidden',
  },

  name: {
    fontSize: 18,
    marginBottom: 5,
  },

  sign: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.36)',
  },
});
