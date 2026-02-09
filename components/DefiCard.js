import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DefiCard = ({ defi }) => {
  return (
    <View style={styles.card}>
      <View style={styles.defis1}>
        <Image source={require('../assets/images/Tempoints.png')} style={styles.imagetemp} />
      </View>
      <View style={styles.defis2}>
        <Text style={styles.challengeTitle}>{defi.nom_defi}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(defi.progressions[0].progres / defi.objectif) * 100}%` }]} />
        </View>
      </View>
      <Text style={styles.progressText}>{defi.progressions[0].progres}/{defi.objectif}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 15, flexDirection: 'row' },
  defis1: { width: 50, height: 50 },
  defis2: { flex: 1, marginLeft: 15 },
  challengeTitle: { fontWeight: 'bold', marginBottom: 5 },
  progressBar: { height: 5, backgroundColor: '#DDD', borderRadius: 5, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#2F56E0' },
  progressText: { marginTop: 5, textAlign: 'right', fontSize: 12, color: '#666' },
});

export default DefiCard;
