import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './components/Card';

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