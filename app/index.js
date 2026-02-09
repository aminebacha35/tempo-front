import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary'; 
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Illustration */}
      <Image
        source={require('../assets/images/illustration.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Texte principal */}
      <Text style={styles.title}>Connecte toi ou inscris toi !</Text>
      <Text style={styles.subtitle}>
        Commence dès maintenant à challenger tes amis en faisant plein
        d’activités !
      </Text>

      {/* Boutons */}
      <ButtonPrimary
        title="Je me connecte"
        onPress={() => router.push('/login')} 
        style={styles.primaryButton}
      />
      <TouchableOpacity onPress={() => router.push('/signup/step1')}>
        <Text style={styles.secondaryButton}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F5',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height:100,
    marginTop: 80,
    marginBottom: 5,
  },
  illustration: {
    width: 500,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#00000',
    textAlign: 'center',
    marginBottom: 130,
  },
  primaryButton: {
    width: '100%',
    marginBottom: 20,
  },
  secondaryButton: {
    color: 'black',
    fontSize: 14,
    fontWeight : 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
