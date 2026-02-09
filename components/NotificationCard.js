import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationCard = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.card}>
        <View style={styles.notificationTag}>
          <Ionicons name="person-add" size={19} color="#1DC198" />
          <Text style={styles.notificationTagText}>Demande</Text>
        </View>
        <Text style={styles.notificationText}>
          Mathias Guyader souhaite participer à ton activité.
        </Text>
        <Text style={styles.notificationText2}>
          Accepte sa demande pour compléter l'effectif !
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 30 },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 15 },
  notificationTag: { backgroundColor: '#E2FFEC', padding: 5, borderRadius: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  notificationTagText: { fontSize: 10, fontWeight: 'bold', marginLeft: 5 },
  notificationText: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  notificationText2: { fontSize: 17 },
});

export default NotificationCard;
