import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Button,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

// import { SafeString } from 'handlebars';

const Logout=()=>{
    return(
        <View style={styles.Logout_view}>
            <Text>Logged Out Successfully</Text>
        </View>
    )
};
export default Logout;
const styles=StyleSheet.create(
    {
      Logout_view:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
      }
    }
)

