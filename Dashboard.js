import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Button,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from './DrawerContents';
// import { SafeString } from 'handlebars';

const Dashboard=()=>{
    return(
        <View style={styles.Dashboard_view}>
            <Text>Attendance Record and Analytics</Text>
        </View>
    )
};
export default Dashboard;
const styles=StyleSheet.create(
    {
      Dashboard_view:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
      }
    }
)
