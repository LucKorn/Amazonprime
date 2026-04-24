import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

function PrimeWebScreen() {
  return (
    <WebView 
      source={{ uri: 'https://www.primevideo.com' }} 
      style={{ flex: 1 }}
      // Melhora a performance do carregamento
      startInLoadingState={true}
      domStorageEnabled={true}
      javaScriptEnabled={true}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <SafeAreaView style={styles.container}>
        {/* Deixa a barra de ícones do celular branca sobre o fundo preto */}
        <StatusBar style="light" backgroundColor="#000" />
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
    
