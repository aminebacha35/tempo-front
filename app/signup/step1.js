import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import SocialLogin from '../../components/SocialLogin'; // Import du nouveau composant SocialLogin
import ButtonPrimary from '../../components/ButtonPrimary'; // Réutilisation du bouton principal
import { useRouter } from 'expo-router';

const Step1 = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (!email || !password || password !== confirmPassword) {
      alert('Veuillez remplir tous les champs correctement.');
    } else {
      router.push('/signup/step2');
    }
  };

  const handleAppleLogin = () => {
    console.log('Connexion via Apple');
  };

  const handleGoogleLogin = () => {
    console.log('Connexion via Google');
  };

  const handleFacebookLogin = () => {
    console.log('Connexion via Facebook');
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Inscription" onBackPress={() => router.back()} />

      {/* Contenu */}
      <View style={styles.content}>
        <Text style={styles.title}>Comment souhaites-tu t’inscrire ?</Text>
        <Text style={styles.subtitle}>Les champs obligatoires sont marqués d’une *</Text>

        {/* Champ email */}
        <Text style={styles.label}>Adresse e-mail*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: adresse@example.fr"
          placeholderTextColor="#999" // Couleur pour le placeholder
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Champ mot de passe */}
        <Text style={styles.label}>Mot de passe (8 caractères minimum)*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ton mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Champ confirmation mot de passe */}
        <Text style={styles.label}>Confirmation du mot de passe*</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmation"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Bouton Valider */}
        <ButtonPrimary title="Valider mes informations" onPress={handleNext} style={styles.primaryButton} />

        {/* Boutons sociaux */}
        <SocialLogin
          onApplePress={handleAppleLogin}
          onGooglePress={handleGoogleLogin}
          onFacebookPress={handleFacebookLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F5',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 30, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  primaryButton: {
    width: '100%',
  },
  divider: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 15,
  },
});

export default Step1;