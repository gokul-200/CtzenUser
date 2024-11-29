// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Entypo';
// // import DrawerContent from './DrawerContents';
// import DrawerContent from './DrawerContents';
// import Dashboard from './Dashboard';
// import Mycourses from './MyCourses';
// import Leave_od from './Leave_od';
// import Timetable from './Timetable';
// import Settings from './Settings';
// import Logout from './Logout';
// // import LoginScreen from './loginScreen';
// // import { View } from 'react-native-reanimated/lib/typescript/Animated';

// const CustomDrawerButton = () => {
//   const navigation = useNavigation();
//   return (
//     <Icon
//       style={{ paddingLeft: 20 }}
//       name="menu"
//       size={30}
//       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//       color="#202122"
//     />
//   );
// };

// const Stack = createStackNavigator();

// const StackNav = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: 'rgb(153, 188, 133)' },
//     }}
//   >
//     <Stack.Screen
//       name="Dashboard"
//       component={Dashboard}
//       options={{
//         headerLeft: () => <CustomDrawerButton />,
//       }}
//     />
//     <Stack.Screen name="Mycourses" component={Mycourses} />
//     <Stack.Screen name="Leave/OD" component={Leave_od} />
//     <Stack.Screen name="Timetable" component={Timetable} />
//     <Stack.Screen name="Settings" component={Settings} />
//     <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
//   </Stack.Navigator>
// );

// const DrawerNav = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <DrawerContent {...props} />}
//       screenOptions={{ headerShown: false, activeTintColor: 'rgb(153, 188, 133)' }}
//       initialRouteName="Dashboard"
//     >
//       <Drawer.Screen name="Dashboard" component={StackNav} />
//     </Drawer.Navigator>
//   );
// };

// const App = () => (
//   <NavigationContainer>

//     <DrawerNav />
    
//   </NavigationContainer>
 
// );

// export default App;
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerContent from './DrawerContents';
import Dashboard from './Dashboard';
import Mycourses from './MyCourses';
import Leave_od from './Leave_od';
import Timetable from './Timetable';
import Settings from './Settings';
import Logout from './Logout';

const CustomDrawerButton = () => {
  const navigation = useNavigation();
  return (
    <Icon
      style={{ paddingLeft: 20 }}
      name="menu"
      size={30}
      onPress={() => {
        console.log('Icon pressed');
        navigation.dispatch(DrawerActions.openDrawer());
      }}
      color="#202122"
    />
  );
};

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'rgb(153, 188, 133)' },
    }}
  >
    <Stack.Screen
      name="DashboardScreen"
      component={Dashboard}
      options={{
        headerLeft: () => <CustomDrawerButton />,
      }}
    />
    <Stack.Screen name="Mycourses" component={Mycourses} />
    <Stack.Screen name="Leave/OD" component={Leave_od} />
    <Stack.Screen name="Timetable" component={Timetable} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false, activeTintColor: 'rgb(153, 188, 133)' }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={StackNav} />
    </Drawer.Navigator>
  );
};

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;
