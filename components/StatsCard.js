import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StatsCard = ({ stats }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Mes statistiques</Text>
      <View style={styles.card}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="bar-chart-outline" size={25} color="#1DC198" />
            <Text style={styles.statNumber}>{stats?.classement || 0}°</Text>
            <Text style={styles.statLabel}>Classement</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="trophy" size={25} color="#FFC005" />
            <Text style={styles.statNumber}>{stats?.defis_reussis || 0}</Text>
            <Text style={styles.statLabel}>Défis réussis</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="flame" size={25} color="#2634BA" />
            <Text style={styles.statNumber}>{stats?.participations || 0}</Text>
            <Text style={styles.statLabel}>Participations</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 30 },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 15 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 20, fontWeight: 'bold' },
  statLabel: { fontSize: 14, color: '#666' },
});

export default StatsCard;
