import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log(token, '-----get token-----');
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Push Notification In React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_bold: {
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
