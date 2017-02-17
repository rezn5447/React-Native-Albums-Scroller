// Index android JS - Put code for android here
// Import a library to import a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

// kinda take the component or shape or what the fuck ever and display it to the device
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
