import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Button,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
// import DrawerContent from './DrawerContents';
import { List,useTheme } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
// const theme=useTheme();
const Timetable=()=>{
    // const theme=useTheme();
    const[expanded,setExpanded]=useState(false);

    const handlePress=(accordianName)=>{
      setExpanded((prevexpanded)=>(
        {
          ...prevexpanded,[accordianName]:!prevexpanded[accordianName],
        }
      ))};
    // const handlePress=(accordianName)=>{
    //   setExpanded({[accordianName]:!expanded}
      
    //   )};

    // const [buttoncolor, setButtoncolor]=useState();
    
    // const changeButtoncolor=()=>{
    //     setButtoncolor("green");

    // };

    // const icons ({name,color,size})=>{
    //   return(
    //     <Icon name={name} color={color} size={size}/>
    //   )
    // };

    return(
        
        <ScrollView style={{flex:1,minHeight:'100vh'}}>
        <List.Section title='' style={styles.List_Section_Style}>
            
            <List.Accordion 
            style={styles.Accordian_style}
            title='Monday'
            left={props=><List.Icon {...props} icon='calendar'/>}
            onPress={()=>handlePress('Monday')}
            theme={{colors: { primary: expanded['Monday'] ? 'green' : 'blue' }}}
            >
           <List.Item title='First'/>
           <List.Item title='Second'/>
           <List.Item title='Third'/>
           <List.Item title='Fourth'/>
           <List.Item title='Fifth'/>
           <List.Item title='Sixth'/>
           <List.Item title='Seventh'/>
           {/* <List.Item title='Second'/> */}

            </List.Accordion>
            <List.Accordion style={styles.Accordian_style}
            title='Tuesday'
            left={props=><List.Icon {...props} icon="calendar"/>}
            onPress={()=>handlePress('Tuesday')}
            theme={{colors: { primary: expanded['Tuesday'] ? 'green' : 'blue' }}}>
           <List.Item title='First'/>
           <List.Item title='Second'/>
           <List.Item title='Third'/>
           <List.Item title='Fourth'/>
           <List.Item title='Fifth'/>
           <List.Item title='Sixth'/>
           <List.Item title='Seventh'/>
           </List.Accordion>
            <List.Accordion style={styles.Accordian_style}
            title='Wednesday'
            left={props=><List.Icon {...props} icon="calendar"/>}
            onPress={()=>handlePress('Wednesday')}
            theme={{colors: { primary: expanded['Wednesday'] ? 'green' : 'blue' }}}>
           <List.Item title='First'/>
           <List.Item title='Second'/>
           <List.Item title='Third'/>
           <List.Item title='Fourth'/>
           <List.Item title='Fifth'/>
           <List.Item title='Sixth'/>
           <List.Item title='Seventh'/>

            </List.Accordion>
            <List.Accordion style={styles.Accordian_style}
            title='Thursday'
            left={props=><List.Icon {...props} icon="calendar"/>}
            onPress={()=>handlePress('Thursday')}
            theme={{colors: { primary: expanded['Thursday'] ? 'green' : 'blue' }}}>
           <List.Item title='First'/>
           <List.Item title='Second'/>
           <List.Item title='Third'/>
           <List.Item title='Fourth'/>
           <List.Item title='Fifth'/>
           <List.Item title='Sixth'/>
           <List.Item title='Seventh'/>

            </List.Accordion>
            <List.Accordion style={styles.Accordian_style}
            title='Friday'
            left={props=><List.Icon {...props} icon="calendar"/>}
            onPress={()=>handlePress('Friday')}
            theme={{colors: { primary: expanded['Friday'] ? 'green' : 'blue' }}}>
           <List.Item title='First'/>
           <List.Item title='Second'/>
           <List.Item title='Third'/>
           <List.Item title='Fourth'/>
           <List.Item title='Fifth'/>
           <List.Item title='Sixth'/>
           <List.Item title='Seventh'/>
            </List.Accordion>

            <List.Accordion style={styles.Accordian_style}
            title='Saturday'
            left={props=><List.Icon {...props} icon="calendar"/>}
            onPress={()=>handlePress('Saturday')}
            theme={{colors: { primary: expanded['Saturday'] ? 'green' : 'blue' }}}>
           <List.Item title='First'/>
           <List.Item title='Second'/>
           <List.Item title='Third'/>
           <List.Item title='Fourth'/>
           <List.Item title='Fifth'/>
           <List.Item title='Sixth'/>
           <List.Item title='Seventh'/>
           </List.Accordion>

        </List.Section>
        </ScrollView>
        // <View style={styles.Timetable_view}>
        //     <Text>Class Schedule</Text>
        // </View>
    )
};
export default Timetable;

const styles=StyleSheet.create(
    {
        Timetable_view:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
      },
      Accordian_style:{
        borderRadius:20,
        marginBottom:10,
        // elevation:2,
        paddingLeft:0,
        marginBottom:18,
        borderColor:'grey',
        borderWidth:1,
        backgroundColor:'rgba(153, 188, 133,0.4)',  
      },
      List_Section_Style:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:25,
        minHeight:'100vh',
        margin:'auto'
        // elevation:5
      }
    }
)