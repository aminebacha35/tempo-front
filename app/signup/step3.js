import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useRouter } from 'expo-router';

const activities = [
  'Bowling',
  'Volley',
  'Karting',
  'Escape game',
  'Canoë',
  'Basketball',
  'Padel',
  'Tennis',
  'Lasergame',
  'Paintball',
  'Escalade',
  'Tennis de table',
  'Badminton',
  'Hockey',
  'Mini-golf',
  'Handball',
];

const Step3 = () => {
  const router = useRouter();
  const [selectedActivities, setSelectedActivities] = useState([]);

  const toggleActivity = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((item) => item !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const handleNext = () => {
    if (selectedActivities.length === 0) {
      alert('Veuillez sélectionner au moins une activité.');
    } else {
      router.push('/signup/step4'); // Redirige vers l'étape suivante
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Inscription" onBackPress={() => router.back()} />

      {/* Contenu */}
      <View style={styles.content}>
        <Text style={styles.title}>Choisis tes activités préférées</Text>

        {/* Bulles des activités */}
        <View style={styles.activitiesContainer}>
          {activities.map((activity, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.activityBubble,
                selectedActivities.includes(activity) && styles.selectedBubble,
              ]}
              onPress={() => toggleActivity(activity)}
            >
              <Text
                style={[
                  styles.activityText,
                  selectedActivities.includes(activity) && styles.selectedText,
                ]}
              >
                {activity}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

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
    marginBottom: 20,
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1, 
  },
  activityBubble: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
    marginRight: 10,
  },
  selectedBubble: {
    backgroundColor: '#2F56E0',
  },
  activityText: {
    color: '#000',
    fontSize: 14,
  },
  selectedText: {
    color: '#FFF',
  },
  primaryButton: {
    marginTop: 300,
    width: '100%',
  },
});

export default Step3;
