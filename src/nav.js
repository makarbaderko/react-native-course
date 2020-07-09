import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Nav = () => (
    <View styles={styles.nav}>
        <Text>My app</Text>
    </View>
)

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    }
})

export default Nav;