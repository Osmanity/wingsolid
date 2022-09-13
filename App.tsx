import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';

import Navigator from './navigation';

import { Provider } from 'react-redux'
import { store } from './store';

// import { AuthProvider } from './context/AuthContext';



export default function App() {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={{ flex: 1 }}
    //   keyboardVerticalOffset={Platform.OS === "ios" ? "-64" : "0"}
    // >
    <TailwindProvider >
      <StatusBar
        backgroundColor='transparent'
        style='light'
        translucent={true}
      />
      {/* <AuthProvider> */}
      <Provider store={store}>
        <Navigator />
      </Provider>
      {/* </AuthProvider> */}
    </TailwindProvider>
    // </KeyboardAvoidingView>
  );
}
