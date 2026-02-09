import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { acceptParticipant } from '../services/api';

const InvitationResponseButtons = ({ eventId, setResponseStatus }) => {
  const handleResponse = async (status) => {
    try {
      await acceptParticipant(eventId, status === "accepté");
      setResponseStatus(`Tu viens de ${status === "accepté" ? "accepter" : "refuser"} l'invitation.`);
    } catch (error) {
      console.error("Erreur réponse invitation :", error);
      setResponseStatus("Une erreur s'est produite.");
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.refuse]} onPress={() => handleResponse("refusé")}>
        <Text style={styles.buttonText}>Refuser</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.accept]} onPress={() => handleResponse("accepté")}>
        <Text style={styles.buttonText}>Accepter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvitationResponseButtons;
