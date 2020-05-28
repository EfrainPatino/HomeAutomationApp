import React, {Component, useState} from 'react';
import {Button, View, Text, StyleSheet, ScrollView} from 'react-native';

class RoomScreen extends Component {
  render() {
    const {navigation} = this.props;
    const {route} = this.props;

    const {itemId} = route.params;
    const {otherParam} = route.params;

    const people = [
      {name: 'Cuarto Principal', key: '1'},
      {name: 'Cuarto Secundario', key: '2'},
      {name: 'Cuarto Invitados', key: '3'},
      {name: 'Sala', key: '4'},
      {name: 'Comedor', key: '5'},
      {name: 'Cocina', key: '6'},
      {name: 'Baño Principal', key: '7'},
      {name: 'Baño Secundario', key: '8'},
      {name: 'Pasillo', key: '9'},
      {name: 'Balcon', key: '10'},
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          {people.map((item) => {
            return (
              <View key={item.key}>
                <Button style={styles.room} title={item.name} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  room: {
    margin: 15,
    marginTop: 24,
    fontSize: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    color: 'grey',
  },
});

export default RoomScreen;
