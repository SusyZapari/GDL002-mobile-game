import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './components/Card';

export default function App() {
  let cards = new Array(cardTypes.length);
  let i = 0;
  let generatedCards = 0;
  cards.fill(null);

  while(generatedCards<cardTypes.length){
    i = Math.floor(Math.random() * (cardTypes.length));
    if (cards[i] == null) {
      cards[i]=<Card type={cardTypes[i]}></Card>;
      generatedCards++;
    }
  }

  return ( 
    <View style={styles.container}>
      {cards}
      
    </View>
  );
}


const cardTypes = [
  'manzana', 'pina' ,'pera','banana', 'cerezas', 'fresa',
  'kiwi', 'mango', 'naranja', 'sandia', 'uvas', 'blueberry',
  'manzana', 'pina' ,'pera','banana', 'cerezas', 'fresa',
  'kiwi', 'mango', 'naranja', 'sandia', 'uvas', 'blueberry'
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '30%',
  }
})