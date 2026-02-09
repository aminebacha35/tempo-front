import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const SocialLogin = ({ onApplePress, onGooglePress, onFacebookPress }) => {
  return (
    <View style={styles.container}>
      {/* Ligne avec "ou" */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>ou</Text>
        <View style={styles.line} />
      </View>

      {/* Bouton Apple */}
      <TouchableOpacity style={styles.socialButton} onPress={onApplePress}>
        <Ionicons name="logo-apple" size={23} color="#000" style={styles.icon} />
        <Text style={styles.socialText}>Continuer avec Apple</Text>
      </TouchableOpacity>

      {/* Bouton Google */}
      <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
        <Ionicons name="logo-google" size={22} color="#000" style={styles.icon} />
        <Text style={styles.socialText}>Continuer avec Google</Text>
      </TouchableOpacity>

      {/* Bouton Facebook */}
      <TouchableOpacity style={styles.socialButton} onPress={onFacebookPress}>
        <Ionicons name="logo-facebook" size={24} color="#00" style={styles.icon} />
        <Text style={styles.socialText}>Continuer avec Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 0.5, 
    borderColor: '#DDD',
  },
  icon: {
    marginRight: 10,
  },
  socialText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center', 
    fontWeight: 'bold',
    flex: 1, 
  },
});

export default SocialLogin;
