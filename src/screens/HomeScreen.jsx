import React from 'react';
import {View, Text, FlatList} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import ChapterItem from '../components/ChapterItem';
import {CHAPTERS} from '../constants/dummyData';

const HomeScreen = ({navigation}) => {
  const handlePress = item => {
    navigation.navigate('Pdf', {item});
  };

  return (
    <View>
      <CustomHeader title="Home" />
      <FlatList
        data={CHAPTERS}
        renderItem={({item, index}) => (
          <ChapterItem
            item={item}
            index={index}
            onPress={() => handlePress(item)}
          />
        )}
        ListEmptyComponent={<Text>No Item Found!</Text>}
        ListFooterComponent={
          <View style={{alignSelf: 'center', marginTop: 16}}>
            <Text style={{fontSize: 12, color: 'royalblue'}}>
              Version 1.0.2
            </Text>
            <View style={{height: 100}} />
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;
