import React, {useRef} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  const webViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {Platform.OS === 'ios' && <View style={styles.statusBarBackground} />}

      <WebView
        ref={webViewRef}
        style={styles.webview}
        source={{uri: 'https://mody-official.vercel.app/'}}
        contentInsetAdjustmentBehavior="automatic"
        keyboardDisplayRequiresUserAction={false}
        scrollEnabled={true}
        hideKeyboardAccessoryView={true}
        allowsInlineMediaPlayback={true}
        domStorageEnabled={true} // 로컬 스토리지 허용
        javaScriptEnabled={true} // 자바스크립트 허용
        sharedCookiesEnabled={true} // iOS 쿠키 공유
        thirdPartyCookiesEnabled={true} // Android 타사 쿠키 허용
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // 배경색을 검정으로 설정
  },
  statusBarBackground: {
    backgroundColor: 'white', // StatusBar 배경색
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent', // WebView 배경을 투명으로 설정
  },
});

export default App;
