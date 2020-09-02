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


import React from 'react';



export default class Wave extends React.Component {
  constructor(props) {
    super();
    this.state = {
      path: null
    }
  }

  componentDidMount(){

  }

  handleCanvas = (canvas) => {

  }


  render() {
    return (
      <View style={styles.waveContainer}>

      </View>
    );


  }
}

const styles = StyleSheet.create({
  waveContainer: {
    height: 100,
    backgroundColor: 'red'
  }
});
