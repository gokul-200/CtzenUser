// import React from "react";
// import {View,Text,Button,StyleSheet} from 'react-native';
// import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
// import {Avatar,Title} from 'react-native-paper';
// import { TouchableOpacity } from "react-native-gesture-handler";
// import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const DrawerList = [
//     {icon: 'view-dashboard', label: 'Dashboard', navigateTo: 'Dashboard'},
//     {icon: 'bookshelf', label: 'Mycourses', navigateTo:'Mycourses'},
//     {icon: 'account-group', label: 'Leave/OD', navigateTo: 'Leave/OD'},
//     {icon: 'timetable', label: 'Timetable', navigateTo: 'Timetable'},
//   ];

// const DrawerBottomList=[
//   {icon:'cog',label:'Settings', navigateTo:'Settings'},
//   {icon:'exit-to-app',label:'Log out', navigateTo:'Logout'},
// ]; ///drawer bottom list within the array

//   const DrawerLayout = ({icon, label, navigateTo}) => {
//     const navigation = useNavigation();
//     return (
//       <DrawerItem 
//         // activeTintColor="rgb(46, 107, 46)"
//         // activeBackgroundColor="rgb(46, 107, 46)"
//         icon={({color, size}) => 
//         <View style={styles.iconstyle}>
//             <Icon name={icon} color={color} size={size} />
//         </View>
//         }
//         label={label}
//         labelStyle={styles.labelstyle}
//         onPress={() => {
//           navigation.navigate(navigateTo);
//         }}
//       />
//     );
//   };///Drawer layout component

//   const DrawerItems = props => {
//     return DrawerList.map((props,i) => {
//       return (
//         <DrawerLayout
//           key={i}
//           icon={props.icon}
//           label={props.label}
//           navigateTo={props.navigateTo}/>
//       );
//     });
//   };///Mapping drawer list array into drawerlayout component in the drawer items
//   const DrawerBottomItems =props=>{
//     return DrawerBottomList.map((props,i)=>{
//       return (
//         <DrawerLayout
//           key={i}
//           icon={props.icon}
//           label={props.label}
//           navigateTo={props.navigateTo}/>
//       );
//     });
//   };///Mapping drawerBottomList elements into drawerLayout component in the drawer items
// function DrawerContent(props){
//     return(
//         <View style={{flex:1,
//         // backgroundColor:'rgb(153, 188, 133)'
//         }} >
//             <DrawerContentScrollView {...props}
//             // contentContainerStyle={{
//             //     backgroundColor:'rgb(153, 188, 133)'
//             // }
//             >
//                 <View style={styles.drawercontent}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                         <View style={styles.userInfoSection}>
//                             <View style={{flexDirection:'row',marginTop:15}}>
                                
//                                 <Avatar.Image 
//                                 source={require('./assets/User.png')} 
//                                 size={50}
//                                 style={{marginTop:5}} 
//                                 />

//                                 <View 
//                                 style={{marginLeft:10,flexDirection:'column'}}>
//                                     <Title 
//                                     style={styles.title}>
//                                         Gokul
//                                     </Title>
//                                     <Text style={styles.caption} numberOfLines={1}>
//                                         gokul@gmail.com
//                                     </Text>
//                                 </View>
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                     <View style={styles.drawerSection}>
//                         <DrawerItems/>
//                     </View>
//                 </View>
//             </DrawerContentScrollView>
//             <View style={styles.bottomDrawerSection}>
//               {/* <DrawerBottomItems 
//                 icon={({color,size})=>(
//                     <View style={styles.iconstyle}>
//                 <Icon name="cog" color={color} size={size} />
//                 </View>)}
//                 labelStyle={styles.labelstyle}
//                 label="Settings"/>
                
//               <DrawerBottomItems
//                icon={({color, size}) => (
//                 <View style={styles.iconstyle}>
//                 <Icon name="exit-to-app" color={color} size={size} />
//                 </View>)}
//                 labelStyle={styles.labelstyle}
//                 label="Log Out"/> */}
//                 <DrawerBottomItems {...props}/>
//       </View>
//     </View>
//     );
//     }
//     export default DrawerContent;
//     const styles = StyleSheet.create({
//         drawerContent: {
//           flex: 1,
//         },
//         userInfoSection: {
//             paddingTop:0,
//           paddingLeft: 20,
//         },
//         title: {
//         //   fontFamily:'Arial',
//           fontSize: 16,
//           marginTop: 3,
//           fontWeight: 'bold',
//         },
//         caption: {
//             // fontFamily:'Arial',
//           fontSize: 13,
//           lineHeight: 14,
//           // color: '#6e6e6e',
//           width: '100%',
//         },
//         row: {
//           marginTop: 20,
//           flexDirection: 'row',
//           alignItems: 'center',
//         },
//         section: {
//           flexDirection: 'row',
//           alignItems: 'center',
//           // marginRight: 15,
//         },
//         paragraph: {
//           fontWeight: 'bold',
//           marginRight: 3,
//         },
//         drawerSection: {
//           marginTop: 15,
//           borderBottomWidth: 0,
//           borderBottomColor: 'grey',
//         //   borderBottomWidth: 1,
//         },
//         bottomDrawerSection: {
//           marginBottom: 5,
//           borderTopColor: '#dedede',
//         //   borderTopWidth: 1,
//           borderBottomColor: '#dedede',
//           borderBottomWidth: 1,
//         //   backgroundColor:'rgb(153, 188, 133)',
//         },
//         // preference: {
//         //   flexDirection: 'row',
//         //   justifyContent: 'space-between',
//         //   paddingVertical: 12,
//         //   paddingHorizontal: 16,
//         // },
//         labelstyle:{
//             color:'rgba(0, 0, 0,0.7)',
//             paddingLeft:10,
//             marginLeft:-25
//         },
//         iconstyle:{
//             paddingLeft:15

//         }
//       });
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerList = [
  { icon: 'view-dashboard', label: 'Dashboard', navigateTo: 'Dashboard' },
  { icon: 'bookshelf', label: 'Mycourses', navigateTo: 'Mycourses' },
  { icon: 'account-group', label: 'Leave/OD', navigateTo: 'Leave/OD' },
  { icon: 'timetable', label: 'Timetable', navigateTo: 'Timetable' },
];

const DrawerBottomList = [
  { icon: 'cog', label: 'Settings', navigateTo: 'Settings' },
  { icon: 'exit-to-app', label: 'Log out', navigateTo: 'Logout' },
];

const DrawerLayout = ({ icon, label, navigateTo, navigation }) => (
  <DrawerItem
    icon={({ color, size }) => (
      <View style={styles.iconStyle}>
        <Icon name={icon} color={color} size={size} />
      </View>
    )}
    label={label}
    labelStyle={styles.labelStyle}
    onPress={() => navigation.navigate(navigateTo)}
  />
);

const DrawerContent = props => {
  const navigation = props.navigation;
  return (
    // <View>
    //   <Text>HI</Text>
    // </View>
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image source={require('./assets/User.png')} size={50} />
            <View style={styles.userInfo}>
              <Title style={styles.title}>Gokul</Title>
              <Text style={styles.caption}>gokul@gmail.com</Text>
            </View>
          </View>
          {DrawerList.map((item, i) => (
            <DrawerLayout
              key={i}
              icon={item.icon}
              label={item.label}
              navigateTo={item.navigateTo}
              navigation={navigation}
            />
          ))}
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        {DrawerBottomList.map((item, i) => (
          <DrawerLayout
            key={i}
            icon={item.icon}
            label={item.label}
            navigateTo={item.navigateTo}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: { flex: 1 },
  drawerContent: { flex: 1 },
  userInfoSection: { flexDirection: 'row', margin: 15 },
  userInfo: { marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  caption: { fontSize: 13, color: '#6e6e6e' },
  iconStyle: { paddingLeft: 15 },
  labelStyle: { color: 'rgba(0, 0, 0,0.7)', paddingLeft: 10 },
  bottomDrawerSection: { marginTop: 10, borderTopWidth: 1, borderTopColor: '#dedede' },
});
