import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoriesWeedScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Categories Meal Screen</Text>
    </View>
  );
};

export default CategoriesWeedScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
