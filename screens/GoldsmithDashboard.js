import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const GoldsmithDashboard = ({ navigation }) => {
  const [customers, setCustomers] = useState([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Mary Johnson' },
  ]);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>{item.name}</Text>
      <Button
        title="View Product Details"
        onPress={() => navigation.navigate('ProductDetail', { customerId: item.id })}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Goldsmith Dashboard</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GoldsmithDashboard;
