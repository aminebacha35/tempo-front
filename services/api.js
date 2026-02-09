import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://3829-5-49-20-96.ngrok-free.app/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ==========================
//  AUTHENTIFICATION
// ==========================
export const register = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur lors de l\'inscription';
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    if (response.data.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
      await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
      return response.data;
    } else {
      throw new Error("Le serveur n'a pas retourné de token.");
    }
  } catch (error) {
    throw error.response?.data?.error || "Erreur de connexion.";
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('userData');
    return true;
  } catch (error) {
    throw error.response?.data || 'Erreur lors de la déconnexion';
  }
};

// ==========================
//  UTILISATEUR
// ==========================
export const getUserProfile = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur récupération utilisateur';
  }
};

export const getUserStats = async () => {
  try {
    const response = await api.get('/user/stats');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur récupération statistiques';
  }
};

// ==========================
//  ÉVÉNEMENTS
// ==========================
export const createEvenement = async (evenementData) => {
  try {
    const response = await api.post('/evenements', evenementData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur création événement';
  }
};

export const getEventDetails = async (eventId) => {
  try {
    const response = await api.get(`/evenements/${eventId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur lors de la récupération des détails de l\'événement';
  }
};


export const getUserEvents = async () => {
  try {
    const response = await api.get('/evenements/myevents');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur récupération événements';
  }
};

export const joinEvenement = async (evenementId) => {
  try {
    const response = await api.post(`/evenements/${evenementId}/join`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur inscription événement';
  }
};

export const acceptParticipant = async (evenementId, userId) => {
  try {
    const response = await api.post(`/evenements/${evenementId}/accept/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur acceptation participant';
  }
};



// ==========================
//  DÉFIS
// ==========================
export const getDefis = async () => {
  try {
    const response = await api.get('/defis'); //  Vérifie bien l'URL correcte
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur récupération défis';
  }
};


export const completeDefi = async (defiId) => {
  try {
    const response = await api.post(`/defis/${defiId}/complete`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur validation défi';
  }
};

// ==========================
//  AMITIÉS
// ==========================
export const sendFriendRequest = async (friendId) => {
  try {
    const response = await api.post('/friends/request', { friend_id: friendId });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur demande ami';
  }
};

export const acceptFriendRequest = async (requestId) => {
  try {
    const response = await api.post(`/friends/accept/${requestId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur acceptation ami';
  }
};

export const getFriendsList = async () => {
  try {
    const response = await api.get('/friends/list');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erreur récupération liste amis';
  }
};
