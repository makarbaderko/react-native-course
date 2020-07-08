import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class App extends Component{
  render(){
    return(
      <View style={styles.mainView}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:'white',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%'
  }
})

export default App;