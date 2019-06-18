import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card type='Manzana'></Card> 
      <Card type='Piña'></Card>
      <Card type='Pera'></Card>
      <Card type='Nanchis'></Card>
      <Card type='Plátano'></Card>
      <Card type='Pera'></Card>
      <Card type='Durazno'></Card>
      <Card type='Uvas'></Card>
      <Card type='Durazno'></Card>
      <Card type='Manzana'></Card>
      <Card type='Uvas'></Card>
      <Card type='Nanchis'></Card>
      <Card type='Piña'></Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
