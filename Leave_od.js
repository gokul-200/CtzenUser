import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Button,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Entypo';
// import DrawerContent from './DrawerContents';

const Leave_od=()=>{
    return(
        <View style={styles.Leave_od_view}>
            <Text>Courses Registered</Text>
        </View>
    )
};
export default Leave_od;
const styles=StyleSheet.create(
    {
      Leave_od_view:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
      }
    }
)