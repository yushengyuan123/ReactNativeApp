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
  ToastAndroid,
} from 'react-native';
import index from '@react-native-community/masked-view';

export default class PageHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      titles: props.title,
      template: [],
    };
  }

  componentDidMount() {
    this.initHeader()
  }

  initHeader() {
    const titleList = this.state.titles;
    if (titleList.length === 0) {
      return
    }
    this.setState({
        template: titleList.map(item => {
            return (
              <View key={item}>
                  <Text style={styles.text}>{item}</Text>
              </View>
            );
        })
    })
  }


  render() {
    return (
      <View style={styles.headerContainer}>
          {this.state.template}
      </View>
    );


  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginTop: 10,
    marginRight: 10,
  },
});
