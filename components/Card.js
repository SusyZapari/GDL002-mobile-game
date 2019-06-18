import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            cardText: '?'
        }
    }
    flipCard= ()=> {
        let nextCardText = '';
        if (this.state.cardText == '?'){
            nextCardText = this.props.type;
        }
        else {
            nextCardText = '?';
        }
        this.setState({
            cardText: nextCardText
          });
    }
    render (){
        return (
            <Button 
            onPress={this.flipCard}
            title={this.state.cardText}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        );
    }
}

export default Card;

