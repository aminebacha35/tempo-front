import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Header from '../components/Header'; 
import ButtonPrimary from '../components/ButtonPrimary'; 


const Completed = () => {
  const router = useRouter();
  const { username } = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
      <Header title="Inscription terminée" />

      {/* Icone de profil avec le check */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/images/profile-placeholder.png')} 
          style={styles.profileIcon}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/checkmark.png')} 
          style={styles.checkIcon}
          resizeMode="contain"
        />
      </View>

      {/* Message de bienvenue */}
      <Text style={styles.welcomeText}>Bienvenue {username} !</Text>
      <Text style={styles.description}>
        Ton compte a bien été créé, tu peux maintenant challenger tes amis en faisant plein
        d’activités.
      </Text>

      <ButtonPrimary
          title="C'est parti"
          onPress={() => router.push('/homepage.js')}
          style={styles.primaryButton}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginTop: 70,
    position: 'relative',
    marginBottom: 50,
    alignSelf: 'center',
  },
  profileIcon: {
    width: 200,
    height: 200,
  },
  checkIcon: {
    position: 'absolute',
    width: 100,
    height: 80,
    bottom: 0,
    right: 0,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1926',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  primaryButton: {
    width: '90%',
    marginLeft : 20,
    marginTop: 200,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Completed;
