import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';

import Screens from './navigation';


export default function App() {
  return (
    <TailwindProvider >
      <Screens />
    </TailwindProvider>
  );
}
