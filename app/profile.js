import React, {} from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import Footer from '../components/Footer';



const ProfileScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header  title="Mon profil" />

      <ScrollView contentContainerStyle={styles.content}>
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

export default ProfileScreen;
