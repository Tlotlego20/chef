import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddDishScreen({ navigation }: any) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addDish = () => {
    if (dishName && description && !isNaN(Number(price)) && Number(price) > 0 && course) {
      const newDish = {
        id: Date.now().toString(),
        name: dishName,
        description: description,
        course: course,
        price: Number(price),
      };
      navigation.navigate('Home', { newDish });
    } else {
      alert('Please fill all fields correctly');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Course (e.g., starter, main, dessert)"
        value={course}
        onChangeText={setCourse}
      />

      <TextInput
        style={styles.input}
        placeholder="Price (R)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button title="Add Dish" onPress={addDish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eb8602',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
