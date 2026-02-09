import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParticipantItem = ({ participant }) => {
  return (
    <View style={styles.participantCard}>
      <Text style={styles.participantName}>{participant.user.nom} {participant.user.prenom}</Text>
      <Text style={[styles.status, styles[participant.statut]]}>{participant.statut}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  participantCard: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  participantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  accepté: { color: '#1DC198' },
  refusé: { color: '#FF4D4D' },
  'en attente': { color: '#FFC005' },
});

export default ParticipantItem;
