import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Card from './Card';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            prevCard: null,
            lifes: 5,
            matches: 0,
            cards: this.shuffleCards()
        }
    }

    restartGame = () => {
        const cards = this.shuffleCards(); 
        this.setState({
            prevCard: null,
            lifes: 5,
            matches: 0,
            cards: null
        });

        setTimeout(
            () =>{ this.setState({ cards: cards})},
            2000
        );

    }

    shuffleCards = () => {
        let cards = new Array(cardTypes.length);
        let i = 0;
        let generatedCards = 0;
        cards.fill(null);

        while(generatedCards<cardTypes.length){
            i = Math.floor(Math.random() * (cardTypes.length));
            if (cards[i] == null) {
                cards[i]=<Card type={cardTypes[generatedCards]} checkPairs={this.checkPairs}></Card>;
                generatedCards++;
            }
        }
        
        return cards;
    }

    render () {
        return (
            <View>
                <Text style={headerSection.container}>
                    Vidas: <Text style={headerSectionValue.container}>{this.state.lifes}</Text>
                    <Text style={{color: "white"}}>-----</Text>Pares:<Text style={headerSectionValue.container}>{this.state.matches}</Text>
                </Text>
                <Button
                    onPress={this.restartGame}
                    title="Reiniciar"
                    color="#841584"
                />
                <View style={styles.container}>
                    {this.state.cards}    
                </View>
            </View>
        );
    }

    checkPairs = (selectedCard) => {

        if (selectedCard != "marcapersonal") {
            if (this.state.prevCard == null){
                this.setState({
                    prevCard: selectedCard
                });
            } else {
                if (this.state.prevCard == selectedCard) {
                    this.setState({
                        matches: this.state.matches + 1,
                        prevCard: null
                    });
                } else {
                    this.setState({
                        lifes: this.state.lifes - 1,
                        prevCard: null
                    });
                }
            }
        }

    }
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
      marginTop: '10%',
    }
  });

  const headerSection = StyleSheet.create({
    container: {
      marginTop: '10%',
      fontSize: 40,
      fontWeight: 'bold',
      color: "gray"
    }
  });

  const headerSectionValue = StyleSheet.create({
    container: {
      color: "red"
    }
  });

  export default Home;