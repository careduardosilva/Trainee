import React, {Component} from 'react'
import {FlatList, ScrollView, Text, TextInput, View, TouchableHighlight} from 'react-native'
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class Screen1 extends Component{

switchScreen = () => {
  this.props.navigation.navigate('Screen2',{
    name: 'Raduzera',
    age:'24',
  })
}

  render(){
     return(
    <View style = {{flex: 1, justifyContent: 'center'}}>
      <TouchableHighlight style = {{borderColor: 'black', borderWidth: 5}} onPress = {this.switchScreen}>
        <Text style = {{textAlign: 'center'}}>Switch screen!!</Text>
      </TouchableHighlight>
    </View>
    )
  }
}

class Screen2 extends Component{
  renderItems = ({item}) => {
    return <Text>{item.key}</Text>
  }
  
  data = [{key: 'Aryella'},
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'}, 
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
    {key: 'Raul'},
    {key: 'Radu'}, 
    {key: 'Carlos Eduardo'},  
    {key: 'Isaac'},
    {key: 'Jhonathan Vinicius'},
    {key: 'Kaio'},  
           
  
  ]


  render(){
    const {navigation} = this.props
    const name = navigation.getParam('name')
    const age = navigation.getParam('age')
     return(
    <FlatList style = {{flex: 1}}
      data = {this.data}
      renderItem={this.renderItems}
    />
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Screen1: Screen1,
    Screen2: Screen2,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal,tintColor}) => {
        const{routeName} = navigation.state
        let iconName;
        if (routeName == 'Screen1'){
          iconName = 'md-contact'
          return <Ionicons name = {iconName} size = {30} color= "#900"/>
        } else if(routeName == 'Screen2'){
          iconName = 'apple'
          return <MaterialCommunityIcons name = {iconName} size = {30} color= "#f93291"/>
        }
      }
    

    }),
    tabBarOptions:{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },

  }, 
)

export default createAppContainer(TabNavigator)

