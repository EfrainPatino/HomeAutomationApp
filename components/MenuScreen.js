import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons';

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton
          buttonColor="#3498db"
          btnOutRange="grey"
          radius="100"
          outRangeScale="1.2">
          <ActionButton.Item
            style={styles.item}
            buttonColor="#3498db"
            title="Bathroom"
            onPress={() => console.log('notes tapped!')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/bath.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Balcony"
            onPress={() => console.log('notes tapped!')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/Balcony.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Kitchen"
            onPress={() => console.log('notes tapped!')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/Kitchen.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Principal Bedroom"
            onPress={() => console.log('notes tapped!')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/PrincipalBedroom.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Secundary Bedroom"
            onPress={() => console.log('notes tapped!')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/SecundaryBedroom.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Living Room"
            onPress={() => console.log('notes tapped!')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/LivingRoom.png')}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 450,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  tinyLogo: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 60,
    height: 60,
  },
});

export default MenuScreen;
