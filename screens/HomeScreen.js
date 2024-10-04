import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Goldsmith App!</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('GoldsmithDashboard')}
      />
      <Button
        title="View Product Details"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </View>
  );
};

export default HomeScreen;
