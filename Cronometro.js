import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      is_ticking: false,
      segundos: 0,
      minutos: 0,
      horas: 0,
    };
  var tempo = setInterval(this.Ticking)
  }
  Iniciar = () => 
  {
    this.setState({is_ticking:true});
  }
  Ticking = () => {
    if(this.state.is_ticking === true){
    this.setState({
      segundos: this.state.segundos + 1
    });
    if(this.state.segundos >= 60) 
    {
      this.setState({
        segundos: 0, 
        minutos: this.state.minutos + 1,
        })
    }
    if(this.state.minutos >= 60)
    {
      this.setState({
        minutos: 0,
        horas: this.state.horas + 1
        })
    }
    }
}
  Parar = () => {
    this.setState({
      is_ticking:false,
    })
  }
  Zerar = () => {
    this.setState({
      segundos: 0,
      minutos: 0,
      horas: 0,
      is_ticking: false,
      tempo: clearInterval(this.Ticking)
    });
  }

  render() {
    return (
      <View style={{flex:100, backgroundColor:'#1E90FF'}}>
        <View style = {{backgroundColor:'#1E90FF', flex:10, flexDirection:'column-reverse', alignItems:'flex-start'}}>
          <Button title = '<- Voltar'
          style = {{alignSelf:'flex-end',width:50}}></Button>
        </View>
        <Text style = {{fontSize:30, color:'#FFFAF0', alignSelf:'center'}}>Cronomêtro</Text>
        <View style = {{backgroundColor:'#1E90FF', flex:50,justifyContent: 'space-evenly'}}>
          <Button title = "Iniciar"
          style = {{fontSize:10, backgroundColor:'red'}}
          onPress ={this.Iniciar}>
          </Button>
          <Button title = "Parar"
          onPress={this.Parar}>
          </Button>
          <Button title = "ZERAR"
          onPress = {this.Zerar}>
          </Button>
        </View>
      <View style = {{backgroundColor:'#F0F8FF', borderRadius: 50, borderLeftWidth:10}}>
        <Text style = {{fontSize:60,alignSelf:'flex-end'}}> {this.state.segundos}</Text>
        <Text style = {{fontSize:60, alignSelf:'center'}}> {this.state.minutos}</Text>
        <Text style = {{fontSize:60, alignSelf:'flex-start'}}> {this.state.horas}</Text>
      </View>
    </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
