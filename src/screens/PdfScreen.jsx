import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {cache} from 'react';
import CustomHeader from '../components/CustomHeader';
import Pdf from 'react-native-pdf';

const {width, height} = Dimensions.get('window');

const PdfScreen = ({navigation, route}) => {
  const {item} = route.params;
  const source = {uri: `bundle-assets://${item?.path}.pdf`, cache: true};
  return (
    <View style={styles.container}>
      <CustomHeader isBack title={item?.name} navigation={navigation} />
      <Pdf source={source} style={styles.pdf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width,
    height,
  },
});

export default PdfScreen;
