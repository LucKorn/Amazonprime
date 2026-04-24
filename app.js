import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';

function PrimeWebScreen() {
  return (
    <WebView 
      source={{ uri: 'https://www.primevideo.com' }} 
      style={{ flex: 1 }}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <PrimeWebScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
  
