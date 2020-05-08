import React from 'react';
import { StyleSheet, Text, FlatList, View, Button } from 'react-native';
import { CategoriesData } from '../data/dummy-data';

const renderCategoryData = (data) => (
  <View style={styles.categoriesItem}>
    <Text>{data.item.title}</Text>
  </View>
);

const CategoriesScreen = (props) => {
  return (
      <FlatList
        data={CategoriesData}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryData}
        numColumns={2}
      />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
    margin: 15,
    height: 150,
  }
});
