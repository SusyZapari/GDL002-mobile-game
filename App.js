import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';
//import './App.css';
//import Board from './components/Board';

export default function App() {
  return (
    <View>
      <Card type='manzana'></Card> 
      <Card type='pina'></Card>
      <Card type='pera'></Card>
      <Card type='banana'></Card>
      <Card type='cerezas'></Card>
      <Card type='fresa'></Card>
      <Card type='kiwi'></Card>
      <Card type='mango'></Card>
      <Card type='naranja'></Card>
      <Card type='sandia'></Card>
      <Card type='uvas'></Card>
      <Card type='blueberry'></Card>

    </View>
  );
}

/*class App extends Component {
  render () {
    return (
      <View className="App">
      <Header/>
      <Board/>
      </View>
    )
  }
}*/
//<TouchableOpacity style={styles.CardStyle} activeOpacity={0.5}>
  //  <Image
    // source={require('./Images/banana.png')}
     //style={styles.ImageIconStyle}
    ///>
    //<View style={styles.SeparatorLine} />
    //<Text style={styles.TextStyle}> Iniciar </Text>
//</TouchableOpacity>
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
