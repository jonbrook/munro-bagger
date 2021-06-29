import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  title: {
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Explore = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header />
    <Text style={styles.title}>Explore Screen</Text>
    <NavFooter />
  </SafeAreaView>
);

export default Explore;
