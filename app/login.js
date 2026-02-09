import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import ButtonPrimary from '../components/ButtonPrimary';
import SocialLogin from '../components/SocialLogin';
import { login } from '../services/api';

const LoginScreen = () => {
  const router = useRouter();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!emailOrUsername || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      //  Connexion à l'API Laravel
      const response = await login({ email: emailOrUsername, password: password });

      console.log("Réponse de l'API:", response); 

      if (response && response.token) {
        await AsyncStorage.setItem('userToken', response.token);
        await AsyncStorage.setItem('userData', JSON.stringify(response.user));
        router.push('/homepage'); 
      } else {
        setError("Identifiant ou mot de passe incorrect.");
      }
    } catch (err) {
      setError(err.message || 'Erreur de connexion.');
    }

    setLoading(false);
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
      <StatusBar backgroundColor="#2F56E0" barStyle="light-content" />

      {/*  Header */}
      <Header title="Connexion" onBackPress={() => router.back()} />

      {/*  Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Connecte-toi à ton compte !</Text>
        <Text style={styles.subtitle}>Les champs obligatoires sont marqués d’une *</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/*  Champ email ou nom d'utilisateur */}
        <Text style={styles.label}>Adresse e-mail ou nom d’utilisateur*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: adresse@example.fr ou nom d’utilisateur"
          placeholderTextColor="#999"
          value={emailOrUsername}
          onChangeText={setEmailOrUsername}
        />

        {/*  Champ mot de passe */}
        <Text style={styles.label}>Mot de passe*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ton mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/*  Bouton principal */}
        <ButtonPrimary 
          title={loading ? <ActivityIndicator size="small" color="#FFF" /> : "Se connecter"} 
          onPress={handleLogin} 
          style={styles.primaryButton} 
        />

        {/*  Composant SocialLogin */}
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
    paddingTop: 0, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
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
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  primaryButton: {
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default LoginScreen;
