import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
//import './Card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            cardImage: 'marcapersonal'
        }
    }
    flipCard= ()=> {
        let nextCardImage = '';
        if (this.state.cardImage == 'marcapersonal'){
            nextCardImage = this.props.type;
        }
        else {
            nextCardImage = 'marcapersonal';
        }
        this.setState({
            cardImage: nextCardImage
          });
    }
    render (){
        return (
        <TouchableOpacity onPress={this.flipCard}>
            <Image
                style={styles.button}
                source={images[this.state.cardImage]}/>
        </TouchableOpacity>
       
        );
    }
}
const images = {
    'manzana': require('../Images/manzana.png'),
    'pera': require('../Images/pera.png'),
    'blueberry': require('../Images/blueberry.png'),
    'cerezas': require('../Images/cerezas.png'),
    'fresa': require('../Images/fresa.png'),
    'kiwi': require('../Images/kiwi.png'),
    'mango': require('../Images/mango.png'),
    'naranja': require('../Images/naranja.png'),
    'pina': require('../Images/pina.png'),
    'sandia': require('../Images/sandia.png'),
    'uvas': require('../Images/uvas.png'),
    'banana': require('../Images/banana.png'),
    'marcapersonal': require('../Images/marcapersonal.png'),

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    height: 100,

  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

export default Card;

