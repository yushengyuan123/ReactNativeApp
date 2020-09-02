import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  ToastAndroid,
} from 'react-native';

export class Card extends React.Component {
  constructor(props) {
    super();
    this.shoesList = null;
    this.state = {
      jsx: null,
    };
  }

  componentDidMount() {
      console.log('nihao')

      let url = 'http://localhost:3000/shoesList'

      const that = this

      fetch(url, {
          method: 'POST',
          mode: "cors",
          headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Connection": "close",
          },
          body: 'key = 1'
      }).then((response) => response.json()).then((responseData) => {
          that.shoesList = responseData.data
          console.log('已经返回')
          console.log(responseData.data)
          this.setState({
              jsx: responseData.data.map(item => {
                  return (<View style={styles.bottom} key={item.productId}>
                      <View style={styles.leftContainer}>
                          <Image
                              source={{uri: item.imageUrl}}
                              style={styles.cardImage}
                          />
                      </View>
                      <View style={styles.rightContainer}>
                          <View style={styles.name}>
                              <Text style={styles.nameText}>{item.name}</Text>
                          </View>
                          <View style={styles.otherInfo}>
                              <Text>状态: {item.publishType}</Text>
                          </View>
                          <View style={styles.otherInfo}>
                              <Text>货号: {item.styleColor}</Text>
                          </View>
                          <View style={styles.more}>
                              <Text style={styles.moreItem}>更多</Text>
                              <Text style={styles.moreItem}>货量</Text>
                          </View>
                      </View>
                  </View>)
              })
          })
      }).done()
  }


  render() {
    return (
      <View style={styles.cardBottomContainer}>
        {this.state.jsx}
      </View>
    );


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

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  cardBottomContainer: {
    width: '90%',
  },


  bottom: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
  },

  head: {
    height: 40,
    backgroundColor: 'red',
  },

  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
  },

  rightContainer: {
    paddingTop: 20,
    paddingLeft: 10,
    width: '65%',
  },

  cardImage: {
    height: 90,
    width: 90,
    borderWidth: 1,
    borderColor: '#edf0f8',
    borderRadius: 3,
  },

  name: {
    height: 30,
  },

  nameText: {
    fontWeight: 'bold',
  },

  otherInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 25,
    fontSize: 20,
  },

  more: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },

  moreItem: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 22,
    width: 50,
    borderRadius: 40,
    backgroundColor: '#edf0f8',
    color: '#00c5aa',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
});
