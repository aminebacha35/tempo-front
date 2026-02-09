import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useRouter } from 'expo-router';

const Step4 = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleNext = () => {
    if (!username.trim()) {
      alert('Veuillez entrer un nom d’utilisateur.');
    } else {
      router.push({
        pathname: '/completed',
        params: {
          username: username.trim(), // Transmettez le nom d'utilisateur
        },
      });
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Inscription" onBackPress={() => router.back()} />

      {/* Contenu */}
      <View style={styles.content}>
        <Text style={styles.title}>Choisis un nom d’utilisateur</Text>
        <Text style={styles.subtitle}>Les champs obligatoires sont marqués d’une *</Text>

        {/* Champ de saisie pour le nom d'utilisateur */}
        <Text style={styles.label}>Nom d’utilisateur*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: abel.tho"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        {/* Boîte d'information */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Les autres utilisateurs de Tempo pourront t’ajouter en ami et t’inviter à leurs événements avec ce nom.
          </Text>
        </View>

        {/* Bouton Valider */}
        <ButtonPrimary
          title="Valider mon nom d’utilisateur"
          onPress={handleNext}
          style={styles.primaryButton}
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
    paddingTop: 80, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  infoBox: {
    backgroundColor: '#EAFBF4',
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
  },
  infoText: {
    color: '#1E6647',
    fontSize: 14,
  },
  primaryButton: {
    marginTop: 20,
    width: '100%',
  },
});

export default Step4;
