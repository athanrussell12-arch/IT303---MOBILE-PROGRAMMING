import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeEmoji}>🍳</Text>
      <Text style={styles.homeTitle}>Welcome to Recipe Book</Text>
      <Text style={styles.homeSubtitle}>
        Browse simple recipes you can cook at home.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.buttonText}>View Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}