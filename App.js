import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  
  // Função para abrir o Prime Video no motor do Chrome
  const abrirPrime = async () => {
    await WebBrowser.openBrowserAsync('https://www.primevideo.com', {
      toolbarColor: '#000000', // Cor da barra superior
      enableBarCollapsing: true, // Esconde a barra ao rolar
      showTitle: false,
    });
  };

  // Abre automaticamente assim que o app inicia
  useEffect(() => {
    abrirPrime();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.button} onPress={abrirPrime}>
        <Text style={styles.text}>Abrir Prime Video</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00a8e1',
    padding: 15,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
