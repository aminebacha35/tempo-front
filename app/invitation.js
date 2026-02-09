import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Header from '../components/Header';
import EventDetails from '../components/EventDetails';
import ParticipantList from '../components/ParticipantList';
import InvitationResponseButtons from '../components/InvitationResponseButtons';
import NotificationBanner from '../components/NotificationBanner';
import { getEventDetails } from '../services/api'; 

const InvitationScreen = () => {
  const router = useRouter();
  const { eventId } = useLocalSearchParams(); 
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responseStatus, setResponseStatus] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventData = await getEventDetails(eventId);
        setEvent(eventData);
      } catch (error) {
        console.error("Erreur chargement événement:", error);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetails();
    }
  }, [eventId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#2F56E0" />;
  }

  return (
    <View style={styles.container}>
      <Header title="Évènement" />

      <ScrollView contentContainerStyle={styles.content}>
        {responseStatus && (
          <NotificationBanner message={responseStatus} onClose={() => setResponseStatus(null)} />
        )}

        {event ? (
          <>
            <EventDetails event={event} />
            <ParticipantList participants={event.participants || []} />
            <InvitationResponseButtons eventId={event.id} setResponseStatus={setResponseStatus} />
          </>
        ) : (
          <Text style={styles.errorText}>Événement introuvable.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default InvitationScreen;
