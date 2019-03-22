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
      numero: 0
    };
  }
  Ticking = () => {
    let tempo = setInterval(this.Incrementar,1000);
  }
  Incrementar = () => {
    this.setState({
      numero: this.state.numero + 1
    });
}
  Zerar = () => {
    this.setState({
      numero: 0
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{backgroundColor:'white', flex:1, flexDirection: 'center',justifyContent: 'space-between'}}>
          <Button title = "Iniciar"
          style = {{fontSize:10,flex:1, backgroundColor:"red"}}
          onPress ={this.Ticking}>
          </Button>
          <Button title = "Zerar"
          onPress = {this.Zerar}>
          </Button>
      <Text style = {{fontSize:60}}>
        <Text>{this.state.numero}</Text>
      </Text>
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
