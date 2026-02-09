import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetails = ({ event }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.team}>{event.team}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informations sur l'activité</Text>
        <Text>{event.location}</Text>
        <Text>{event.date}</Text>
        <Text>{event.price}€ / personne</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  team: { fontSize: 14, color: '#666', marginBottom: 15 },
  infoContainer: { backgroundColor: '#FFF', padding: 15, borderRadius: 10 },
  infoTitle: { fontWeight: 'bold', marginBottom: 5 },
});

export default EventDetails;
