import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ActionButtons = () => {
  return (
    <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="add" size={45} color="#2F56E0" />
        <Text style={styles.actionText}>Créer un nouvel événement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="search-outline" size={45} color="#2F56E0" />
        <Text style={styles.actionText}>Rechercher un événement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  actionButton: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  actionText: { fontSize: 15, textAlign: 'center', marginTop: 10 },
});

export default ActionButtons;
