import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {BottomMenu} from './src/component/bottomMenu';


import {MyModules} from './src/view/myModule/my';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Monitor from './src/view/Monitor/Monitor';
import PageFirst from './src/view/PageFirst/PageFirst';
import {Charge} from "./src/component/initAnimated/initAnimated";

const Tab = createBottomTabNavigator();

function App() {
    return (
        <View>
            <PageFirst></PageFirst>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edf0f8',
        position: 'relative',
        height: '100%',
    },
    listContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});

export default App;
