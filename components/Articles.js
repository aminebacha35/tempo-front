import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Articles = () => { 
  //  Articles définis en dur
  const articles = [
    {
      id: 1,
      titre: "Découvrez comment la natation aide à la récupération.",
      image: require('../assets/images/article1.png'),
    },
    {
      id: 2,
      titre: "Découvrez comment améliorer votre agilité au football.",
      image: require('../assets/images/article2.png'),
    }
  ];

  return (
    <View>
      <Text style={styles.sectionTitle}>À la une</Text>
      <View style={styles.articleContainer}>
        {articles.map((article) => (
          <View key={article.id} style={styles.article}>
            <Image source={article.image} style={styles.articleImage} />
            <Text style={styles.articleTitle}>{article.titre}</Text>
            <TouchableOpacity>
              <Text style={styles.articleLink}>Lire plus {'>'}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 30 },
  articleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  article: { flex: 1, marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 10 },
  articleImage: { width: '100%', height: 80, borderRadius: 10, marginBottom: 5 },
  articleTitle: { fontSize: 16, marginBottom: 10, marginTop: 10, marginLeft: 5 },
  articleLink: { color: '#2F56E0', fontWeight: 'bold', marginLeft: 5, marginBottom: 10 },
});

export default Articles;
