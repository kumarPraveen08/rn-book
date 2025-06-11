import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Alert,
} from 'react-native';

const CustomHeader = ({title, isBack, navigation}) => {
  const onShare = async () => {
    try {
      await Share.share({
        message:
          'Have a try, Install on: https://play.google.com/store/apps/details?id=com.pinnacleenglishmedium',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {isBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={22} color="white" />
          </TouchableOpacity>
        )}
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={onShare}>
        <Icon name="share-variant" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'royalblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    gap: 16,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 700,
  },
});

export default CustomHeader;
