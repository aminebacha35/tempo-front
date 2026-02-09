import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationBanner = ({ message, type }) => {
  return (
    <View style={[styles.banner, type === "success" ? styles.success : styles.error]}>
      <Ionicons name="checkmark-circle" size={20} color="#1DC198" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  success: { backgroundColor: '#E2FFEC' },
  error: { backgroundColor: '#FFE2E2' },
  message: { marginLeft: 5, color: '#1DC198', fontWeight: 'bold' },
});

export default NotificationBanner;
