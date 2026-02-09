import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActivityCard = ({ title, date, team, status, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.tag}>
          <Ionicons name={status === 'Invitation en attente' ? "person-add" : "flame"} size={14} color="#2F56E0" />
          <Text>{status === 'Invitation en attente' ? "Invitation" : "Activité"}</Text>
        </View>
        <Text style={styles.date}>Créée le {date}</Text>
      </View>
      <Text style={styles.title}>
        {title} {status === 'Terminé' && <Text style={styles.ended}> - Terminé</Text>}
      </Text>
      <Text style={styles.team}>{team}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
          {status === 'Invitation en attente' ? "Répondre à l'invitation" : "Voir l'activité"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  tag: { backgroundColor: '#E0F1FF', padding: 5, borderRadius: 5, flexDirection:'row' },
  date: { fontSize: 12, color: '#999' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5 },
  ended: { color: '#999', fontWeight: 'bold' },
  team: { fontSize: 14, marginBottom: 10 },
  button: { backgroundColor: '#2F56E0', paddingVertical: 10, borderRadius: 8, alignItems: 'center', borderRadius: 20, width: '50%' },
  buttonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
});

export default ActivityCard;
