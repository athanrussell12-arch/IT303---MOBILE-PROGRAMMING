import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import recipes from '../data/recipes';
import styles from '../styles';

export default function RecipeList({ navigation }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
          >
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardInfo}>
              {item.origin} · {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}