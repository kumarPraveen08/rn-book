import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ChapterItem = ({item, onPress, index}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.serial}>
        <Text style={styles.serialText}>{index + 1}</Text>
      </View>
      <Text numberOfLines={1} style={{fontSize: 16}}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgray',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  serial: {
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    borderRadius: 28,
  },
  serialText: {
    fontWeight: 700,
    color: 'white',
    fontSize: 16,
  },
});

export default ChapterItem;
