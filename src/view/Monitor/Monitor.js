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
  ToastAndroid, ScrollView,
} from 'react-native';

import {Card} from '../../component/Card';
import PageHeader from '../../component/pageHeader';

export default class Monitor extends React.Component {
  constructor(props) {
    super();

  }


  render() {
    return (
      <View>
        <PageHeader/>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          <Card/>
        </ScrollView>
      </View>
    )


  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#edf0f8',
    margin: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
