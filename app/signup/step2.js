import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useRouter } from 'expo-router';

const Step2 = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleNext = () => {
    if (!name || !surname || !birthDate) {
      alert('Veuillez remplir tous les champs obligatoires.');
    } else {
      router.push('/signup/step3'); 
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Inscription" onBackPress={() => router.back()} />

      {/* Contenu */}
      <View style={styles.content}>
        <Text style={styles.title}>Dis-nous en plus sur toi...</Text>
        <Text style={styles.subtitle}>Les champs obligatoires sont marqués d’une *</Text>

        {/* Champ Nom */}
        <Text style={styles.label}>Nom*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Dupont"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        {/* Champ Prénom */}
        <Text style={styles.label}>Prénom*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Jean"
          placeholderTextColor="#999"
          value={surname}
          onChangeText={setSurname}
        />

        {/* Champ Date de naissance */}
        <Text style={styles.label}>Date de naissance*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 12/12/2000"
          placeholderTextColor="#999"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        {/* Champ Code parrainage */}
        <Text style={styles.label}>Code parrainage</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 1245-AC90"
          placeholderTextColor="#999"
          value={referralCode}
          onChangeText={setReferralCode}
        />

        {/* Bouton Valider */}
        <ButtonPrimary title="Valider mes informations" onPress={handleNext} style={styles.primaryButton} />
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
    marginTop: 200,
    width: '100%',
  },
});

export default Step2;
