import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function RecipeDetails({ route, navigation }) {
  // Pull the passed-in data out of route.params
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.detailsContainer}>
      <Text style={styles.detailsName}>{recipe.name}</Text>
      <Text style={styles.detailsMeta}>
        {recipe.origin} · {recipe.time} · Serves {recipe.servings}
      </Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      <Text style={styles.bodyText}>{recipe.ingredients}</Text>

      <Text style={styles.sectionTitle}>Steps</Text>
      <Text style={styles.bodyText}>{recipe.steps}</Text>

      {/* Custom back button using navigation.goBack() */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}