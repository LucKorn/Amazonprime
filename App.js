import React, { useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  // Faz o botão "Voltar" do celular funcionar dentro do site
  useEffect(() => {
    const onBackPress = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true; // Impede o app de fechar
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  // UserAgent de um Chrome moderno para evitar o erro de "versão incompatível"
  const chromeUserAgent = "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <WebView 
        ref={webViewRef}
        source={{ uri: 'https://www.primevideo.com' }} 
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        userAgent={chromeUserAgent}
        originWhitelist={['*']}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
});
