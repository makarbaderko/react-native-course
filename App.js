import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Nav from './src/nav';
import Input from './src/input';
class App extends Component {
  state = {
    random: [20, 837],
  };

  onAddRandom = () => {
    alert('add random');
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Button
          color="#ff5c5c"
          title="Hello!"
          onPress={this.onAddRandom}></Button>
          <Input></Input>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default App;
