import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => navigation.navigate('Home'), 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pinnacle SSC English Medium</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'royalblue',
  },
  text: {
    fontSize: 28,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
    width: '80%',
  },
});

export default SplashScreen;
