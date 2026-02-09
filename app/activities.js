import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ActivityCard from '../components/ActivityCard';
import { getUserEvents } from '../services/api'; 

const Activities = () => {
  const [activeTab, setActiveTab] = useState('Mes activités');
  const [activities, setActivities] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const events = await getUserEvents();
        console.log("Données reçues de l'API :", events); //  Debugging API Response

        // Vérification et normalisation des données reçues
        setActivities(events.mesActivites ?? []);
        setInvitations(events.mesInvitations ?? []);

      } catch (error) {
        console.error("Erreur lors du chargement des activités :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Activités" />

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Mes activités')} style={[styles.tab, activeTab === 'Mes activités' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Mes activités' && styles.activeTabText]}>Mes activités</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Mes invitations')} style={[styles.tab, activeTab === 'Mes invitations' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Mes invitations' && styles.activeTabText]}>Mes invitations</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#2F56E0" />
        ) : activeTab === 'Mes activités' ? (
          activities.length > 0 ? (
            activities.map((event) => <ActivityCard key={event.id} event={event} />)
          ) : (
            <Text style={styles.noData}>Aucune activité trouvée.</Text>
          )
        ) : (
          invitations.length > 0 ? (
            invitations.map((event) => <ActivityCard key={event.id} event={event} />)
          ) : (
            <Text style={styles.noData}>Aucune invitation pour le moment.</Text>
          )
        )}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
        <Text style={styles.addButtonText}>Créer un nouvel événement</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9FC' },
  tabContainer: { flexDirection: 'row', padding: 10 , marginTop : 15},
  tab: { flex: 1, alignItems: 'center', paddingBottom: 5 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#2F56E0' },
  tabText: { fontSize: 14, color: '#666' },
  activeTabText: { fontWeight: 'bold', color: '#2F56E0' },
  content: { padding: 15 },
  noData: { textAlign: 'center', color: '#999', marginTop: 50 },
  addButton: {
    backgroundColor: '#2F56E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 25,
  },
  addButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
});

export default Activities;
