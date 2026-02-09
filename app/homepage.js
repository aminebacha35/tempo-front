import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotificationCard from '../components/NotificationCard';
import StatsCard from '../components/StatsCard';
import DefiCard from '../components/DefiCard';
import Articles from '../components/Articles';
import { getUserStats, getDefis, getUserEvents } from '../services/api';

const Homepage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [defis, setDefis] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsData = await getUserStats();
        setStats(statsData);

        const defisData = await getDefis();
        
        const defisEnCours = defisData.filter(
          (defi) => defi.progressions.length > 0 && defi.progressions[0].statut == "en cours"
        );

        setDefis(defisEnCours || []);
        const eventsData = await getUserEvents();
        setEvents(eventsData || []);
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo-header1.png')} />

      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#2F56E0" style={styles.loader} />
        ) : (
          <>
            <NotificationCard />
            {stats && <StatsCard stats={stats} />}

            {/*  Affichage des défis */}
            <Text style={styles.sectionTitle}>Défis en cours</Text>
            {defis.length > 0 ? (
              defis.map((defi) => <DefiCard key={defi.id} defi={defi} />)
            ) : (
              <Text style={styles.noData}>Aucun défi en cours.</Text>
            )}

            <Articles />
          </>
        )}
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9FC' },
  content: { padding: 15 },
  loader: { marginTop: 50 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 15 },
  noData: { textAlign: 'center', color: '#999', marginTop: 20 },
});

export default Homepage;
