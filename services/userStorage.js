import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'current_user';
const USERS_KEY = 'users';

// Vérifier si un email ou un nom d'utilisateur existe déjà
const isUserUnique = async (email, username) => {
  const users = await getUsers();
  return !users.some((u) => u.email === email || u.username === username);
};

// Enregistrer un utilisateur
export const registerUser = async (user) => {
  const { email, username } = user;

  // Vérifier unicité
  const isUnique = await isUserUnique(email, username);
  if (!isUnique) {
    throw new Error('Email ou nom d’utilisateur déjà utilisé.');
  }

  const users = await getUsers();
  users.push(user);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Récupérer tous les utilisateurs
export const getUsers = async () => {
  const users = await AsyncStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Connecter un utilisateur
export const loginUser = async (identifier, password) => {
  const users = await getUsers();
  const user = users.find(
    (u) => (u.email === identifier || u.username === identifier) && u.password === password
  );

  if (user) {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  }
  throw new Error('Identifiant ou mot de passe incorrect.');
};

// Récupérer l'utilisateur connecté
export const getCurrentUser = async () => {
  const user = await AsyncStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Déconnecter l'utilisateur
export const logoutUser = async () => {
  await AsyncStorage.removeItem(USER_KEY);
};
