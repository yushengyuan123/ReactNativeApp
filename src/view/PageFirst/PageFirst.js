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
  ImageBackground, PanResponder,
} from 'react-native';
import PageHeader from '../../component/pageHeader';
import ShoesCard from '../../component/ShoesCard/ShoesCard';
import RotationChart from "../../component/RotationChart/RotationChart";

export default class PageFirst extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: [
        'xx',
        'xxxx',
        'xxxxx',
      ],
    };

  }


  render() {
    return (
      <View>
        <PageHeader title={this.state.title}/>
        <View style={styles.slipCardContainer}>
          <View style={styles.leftRightContainer}>
            <View style={styles.topCardContainer}>
              <View style={styles.topCard}/>
            </View>
            <View style={styles.topCardContainer}>
              <Image
                style={styles.smallCardLeftContainer}
                // source={require('../../image/gotem1.png')}
              >
                {/*<View style={styles.smallCardLeft}/>*/}
              </Image>
              <Image
                style={styles.smallCardRightContainer}
                // source={require('../../image/ow.jpg')}
              >
                {/*<View style={styles.smallCardRight}/>*/}
              </Image>
            </View>
          </View>
          <View style={styles.leftRightContainer}>
            <ShoesCard/>
          </View>

        </View>
        <View>
          <RotationChart />
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  shoesImage: {
    height: 140,
    width: 140,
    borderRadius: 8,
  },

  headerContainer: {
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  leftRightContainer: {
    height: 150,
    width: '49%',
    marginRight: '1%',
    marginLeft: '1%',
  },

  topCardContainer: {
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  topCard: {
    height: '95%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%'
  },

  smallCardLeftContainer: {
    height: '95%',
    width: '48%',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: '2%',
    flex: 1,
    borderColor: 'black'
  },

  smallCardLeft: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    marginRight: '2%',
  },

  smallCardRightContainer: {
    height: '95%',
    width: '48%',
    borderRadius: 8,
    marginRight: '2%',
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },

  smallCardRight: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    marginLeft: '2%',
  },

  slipCardContainer: {
    height: 150,
    flexDirection: 'row',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
