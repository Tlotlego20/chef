// CheckoutScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type CheckoutScreenProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { cart: { name: string; price: number }[] } }, 'params'>;
};

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ route, navigation }) => {
  const { cart } = route.params;

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleFinalizePurchase = () => {
    // Show confirmation alert
    Alert.alert('Order Placed', 'Your order has been successfully placed!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  const renderCartItem = ({ item }: { item: { name: string; price: number } }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartText}>{item.name} {item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.cartList}
      />
      <Text style={styles.total}>Total: R{calculateTotal()}</Text>
      <Button title="Finalize Purchase" onPress={handleFinalizePurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eb6308',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartList: {
    marginBottom: 20,
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  cartText: {
    fontSize: 18,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CheckoutScreen;
