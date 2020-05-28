import React, {Component} from 'react';
import {Button, View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class HomeScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = (text) => {
    this.setState({email: text});
  };

  handlePassword = (text) => {
    this.setState({password: text});
  };

  authCredential = (email, password) => {
    const {navigation} = this.props;
    const {route} = this.props;

    if (email === 'efrain') {
      if (password === '123456') {
        navigation.navigate('Menu', {
          itemId: 8644,
          otherParam: 'anything you want here',
        });
      } else {
        Alert.alert(
          'Contraseña Invalida',
          '',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    } else {
      Alert.alert(
        'Usuario Invalido',
        '',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <Button
          title="Login"
          onPress={() => {
            this.authCredential(this.state.email, this.state.password);
            /* 1. Navigate to the Details route with params */
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 250,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});

export default HomeScreen;
