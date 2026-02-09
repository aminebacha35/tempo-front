import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ParticipantItem from './ParticipantItem'; //  Assurez-vous que ce composant existe

const ParticipantList = ({ participants = [] }) => {
  if (!participants || participants.length === 0) {
    return <Text style={styles.noParticipants}>Aucun participant pour l’instant.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des participants ({participants.length}/10)</Text>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ParticipantItem participant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9FC',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noParticipants: {
    textAlign: 'center',
    color: '#999',
    marginTop: 10,
  },
});

export default ParticipantList;
