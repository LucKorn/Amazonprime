import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  ActivityIndicator, 
  SafeAreaView, 
  StatusBar, 
  BackHandler 
} from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

function PrimeWebScreen() {
  const webViewRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Gerencia o botão "Voltar" do Android
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (webViewRef.current) {
          webViewRef.current.goBack();
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        ref={webViewRef}
        // Link alterado para forçar a tela de identificação
        source={{ uri: 'https://www.primevideo.com/auth/login' }}
        style={styles.webview}
        
        // User Agent atualizado para Chrome moderno (Windows 10)
        userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
        
        // Configurações essenciais
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo={true}
        
        // Feedback de carregamento
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
        
        // Otimização de cache para manter o login
        cacheEnabled={true}
        startInLoadingState={true}
      />

      {visible && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#00A8E1" />
        </View>
      )}
    </View>
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
  webview: {
    flex: 1,
    backgroundColor: '#000',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
});
