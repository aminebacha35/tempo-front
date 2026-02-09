import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, logo, onBackPress }) => {
  return (
    <View style={styles.container}>
      {/* Bouton retour (chevron) */}
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}

      {/* Affichage du logo si `logo` est présent, sinon affichage du titre */}
      {logo ? (
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2634BA',
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  backButton: {
    position: 'absolute',
    left: 20, 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 150, 
    height: 40,
  },
});

export default Header;
