// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const dishes = [
  { id: '1', name: 'Sushi', price:499.99 },
  { id: '2', name: 'Dunked Wings', price:45.99 },
  { id: '3', name: 'Burger', price:99.99 },
  { id: '4', name: 'Steak', price:149.99 },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);

  const addToCart = (dish: { name: string; price: number }) => {
    setCart([...cart, dish]);
    Alert.alert('Added to Cart', `R {dish.name} has been added to your cart.`);
  };

  const renderDishItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={styles.dishContainer}>
      <TouchableOpacity
        style={styles.dishButton}
        onPress={() => addToCart({ name: item.name, price: item.price })}
      >
        <Text style={styles.dishText}>{item.name} R{item.price.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddMenuItem</Text>
      <FlatList
        data={dishes}
        renderItem={renderDishItem}
        keyExtractor={(item) => item.id}
        style={styles.dishList}
      />
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout', { cart })} />
      <Button title="Add Dish" onPress={() => navigation.navigate('AddMenuItem')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb7a10',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dishList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  dishContainer: {
    marginBottom: 10,
  },
  dishButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  dishText: {
    fontSize: 18,
  },
});

export default HomeScreen;
