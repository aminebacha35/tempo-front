import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router'; //  usePathname pour détecter la page active

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname(); //  Détection de la page active

  return (
    <View style={styles.navbar}>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => router.push('/homepage')}>
        <Ionicons name="home-outline" size={24} color={pathname === '/homepage' ? "#2F56E0" : "#999"} />
        <Text style={[styles.navText, pathname === '/homepage' && styles.activeText]}>Accueil</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => router.push('/activities')}>
        <Ionicons name="flame" size={24} color={pathname === '/activities' ? "#2F56E0" : "#999"} />
        <Text style={[styles.navText, pathname === '/activities' && styles.activeText]}>Activités</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => router.push('/ranking')}>
        <Ionicons name="bar-chart-outline" size={24} color={pathname === '/ranking' ? "#2F56E0" : "#999"} />
        <Text style={[styles.navText, pathname === '/ranking' && styles.activeText]}>Classement</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => router.push('/profile')}>
        <Ionicons name="person-outline" size={24} color={pathname === '/profile' ? "#2F56E0" : "#999"} />
        <Text style={[styles.navText, pathname === '/profile' && styles.activeText]}>Mon profil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#999' },
  activeText: { color: '#2F56E0', fontWeight: 'bold' }, //  Texte en bleu quand actif
});

export default Footer;
